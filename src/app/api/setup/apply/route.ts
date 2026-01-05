import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const themes: Record<string, { name: string; description: string }> = {
  minimal: { name: '미니멀', description: '극도로 절제된 미니멀리즘' },
  neon: { name: '네온', description: '레트로 퓨처리스틱 + 네온 글로우' },
  playful: { name: '플레이풀', description: '재미있고 친근한 디자인' },
  luxury: { name: '럭셔리', description: '고급스럽고 정제된 골드 악센트' },
  brutalist: { name: '브루탈리스트', description: '거칠고 원시적인 개발자 스타일' },
}

const templates: Record<string, { name: string; description: string }> = {
  blog: { name: '블로그', description: '블로그/콘텐츠 마케팅용' },
  onepage: { name: '원페이지', description: '랜딩 페이지 전용' },
  admin: { name: '어드민', description: '관리자 대시보드' },
  'ai-webapp': { name: 'AI 웹앱', description: 'AI 채팅/생성 앱' },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { theme: themeId, template: templateId } = body

    const results: string[] = []
    const errors: string[] = []

    // Get root directory (process.cwd() in Next.js points to project root)
    const rootDir = process.cwd()

    // Apply Theme
    if (themeId && themes[themeId]) {
      const themeCssPath = path.join(rootDir, 'src', 'themes', themeId, 'theme.css')
      const globalsCssPath = path.join(rootDir, 'src', 'app', 'globals.css')

      if (fs.existsSync(themeCssPath)) {
        const themeCss = fs.readFileSync(themeCssPath, 'utf-8')
        let globalsCss = fs.readFileSync(globalsCssPath, 'utf-8')

        // Remove existing theme
        globalsCss = globalsCss.replace(/\/\* THEME START \*\/[\s\S]*?\/\* THEME END \*\//g, '')

        // Add new theme
        const themeBlock = `/* THEME START */
/* Active theme: ${themeId} - ${themes[themeId].name} */
${themeCss}
/* THEME END */`

        // Insert after Tailwind directives
        const tailwindEnd = globalsCss.indexOf('@tailwind utilities;')
        if (tailwindEnd !== -1) {
          const insertPos = tailwindEnd + '@tailwind utilities;'.length
          globalsCss = globalsCss.slice(0, insertPos) + '\n\n' + themeBlock + globalsCss.slice(insertPos)
        } else {
          globalsCss = globalsCss + '\n\n' + themeBlock
        }

        fs.writeFileSync(globalsCssPath, globalsCss)
        results.push(`테마 적용: ${themes[themeId].name}`)
      } else {
        errors.push(`테마 파일 없음: ${themeId}`)
      }
    }

    // Apply Template
    if (templateId && templates[templateId]) {
      const sourcePath = path.join(rootDir, 'src', 'templates', templateId, 'pages')
      const targetPath = path.join(rootDir, 'src', 'app')

      if (fs.existsSync(sourcePath)) {
        const files = fs.readdirSync(sourcePath)
        const createdPaths: string[] = []

        files.forEach(file => {
          if (!file.endsWith('.tsx')) return

          const pageName = file.replace('.tsx', '')
          const routeName = pageName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '')

          // Create route folder
          const routePath = path.join(targetPath, routeName)
          if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true })
          }

          // Copy as page.tsx
          const sourceFile = path.join(sourcePath, file)
          const targetFile = path.join(routePath, 'page.tsx')

          let content = fs.readFileSync(sourceFile, 'utf-8')
          content = content.replace(`export default function ${pageName}`, 'export default function Page')

          fs.writeFileSync(targetFile, content)
          createdPaths.push(`/${routeName}`)
        })

        results.push(`템플릿 적용: ${templates[templateId].name} (${createdPaths.length}개 페이지)`)
      } else {
        errors.push(`템플릿 폴더 없음: ${templateId}`)
      }
    }

    // Update onesaas.json
    const configPath = path.join(rootDir, 'onesaas.json')
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))

      if (themeId && themes[themeId]) {
        config.theme = {
          id: themeId,
          name: themes[themeId].name,
          appliedAt: new Date().toISOString(),
        }
      }

      if (templateId && templates[templateId]) {
        config.template = config.template || {}
        config.template.type = templateId
        config.template.name = templates[templateId].name
        config.template.appliedAt = new Date().toISOString()
      }

      fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
    }

    if (errors.length > 0) {
      return NextResponse.json({
        success: false,
        message: errors.join(', '),
        results
      }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: '설정이 적용되었습니다',
      results
    })

  } catch (error) {
    console.error('Setup apply error:', error)
    return NextResponse.json({
      success: false,
      message: '설정 적용 중 오류가 발생했습니다'
    }, { status: 500 })
  }
}

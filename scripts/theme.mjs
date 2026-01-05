#!/usr/bin/env node

/**
 * OneSaaS 테마 CLI
 *
 * 사용법:
 *   node scripts/theme.mjs list          # 사용 가능한 테마 목록
 *   node scripts/theme.mjs apply <name>  # 테마 적용
 *   node scripts/theme.mjs preview       # 모든 테마 미리보기 URL
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

const themes = {
  minimal: {
    name: '미니멀',
    description: '극도로 절제된 미니멀리즘',
    target: '생산성 앱, 노트 앱',
    preview: 'https://minimal.onesaas.dev',
  },
  neon: {
    name: '네온',
    description: '레트로 퓨처리스틱 + 네온 글로우',
    target: 'AI 도구, 테크 스타트업',
    preview: 'https://neon.onesaas.dev',
  },
  playful: {
    name: '플레이풀',
    description: '재미있고 친근한 디자인',
    target: '교육, 소셜 앱',
    preview: 'https://playful.onesaas.dev',
  },
  luxury: {
    name: '럭셔리',
    description: '고급스럽고 정제된 골드 악센트',
    target: '프리미엄 서비스, 금융',
    preview: 'https://luxury.onesaas.dev',
  },
  brutalist: {
    name: '브루탈리스트',
    description: '거칠고 원시적인 개발자 스타일',
    target: '개발자 도구, 오픈소스',
    preview: 'https://brutalist.onesaas.dev',
  },
}

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

function log(msg, color = '') {
  console.log(color + msg + colors.reset)
}

function showHelp() {
  console.log(`
${colors.bright}🎨 OneSaaS 테마 CLI${colors.reset}

${colors.cyan}사용법:${colors.reset}
  node scripts/theme.mjs <command> [options]

${colors.cyan}명령어:${colors.reset}
  list              사용 가능한 테마 목록
  apply <theme>     테마 적용 (minimal, neon, playful, luxury, brutalist)
  preview           모든 테마 미리보기 URL

${colors.cyan}예시:${colors.reset}
  node scripts/theme.mjs list
  node scripts/theme.mjs apply neon
  node scripts/theme.mjs apply playful
`)
}

function listThemes() {
  log('\n🎨 사용 가능한 테마\n', colors.bright)

  Object.entries(themes).forEach(([id, theme], index) => {
    const num = index + 1
    log(`  ${num}. ${theme.name} (${id})`, colors.cyan)
    log(`     ${theme.description}`, colors.dim)
    log(`     적합: ${theme.target}`, colors.dim)
    console.log()
  })

  log('💡 테마 적용: node scripts/theme.mjs apply <theme-id>\n', colors.yellow)
}

function applyTheme(themeId) {
  if (!themes[themeId]) {
    log(`\n❌ 테마를 찾을 수 없습니다: ${themeId}`, colors.yellow)
    log('\n사용 가능한 테마:', colors.dim)
    Object.keys(themes).forEach(id => log(`  - ${id}`, colors.dim))
    return
  }

  const theme = themes[themeId]
  const themeCssPath = path.join(rootDir, 'src', 'themes', themeId, 'theme.css')
  const globalsCssPath = path.join(rootDir, 'src', 'app', 'globals.css')

  // Check if theme CSS exists
  if (!fs.existsSync(themeCssPath)) {
    log(`\n❌ 테마 파일을 찾을 수 없습니다: ${themeCssPath}`, colors.yellow)
    return
  }

  // Read theme CSS
  const themeCss = fs.readFileSync(themeCssPath, 'utf-8')

  // Read current globals.css
  let globalsCss = fs.readFileSync(globalsCssPath, 'utf-8')

  // Remove existing theme imports (if any)
  globalsCss = globalsCss.replace(/\/\* THEME START \*\/[\s\S]*?\/\* THEME END \*\//g, '')

  // Add new theme
  const themeBlock = `/* THEME START */
/* Active theme: ${themeId} - ${theme.name} */
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

  // Write back
  fs.writeFileSync(globalsCssPath, globalsCss)

  // Update onesaas.json
  const configPath = path.join(rootDir, 'onesaas.json')
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    config.theme = {
      id: themeId,
      name: theme.name,
      appliedAt: new Date().toISOString(),
    }
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  }

  log(`\n✅ 테마 적용 완료: ${theme.name}`, colors.green)
  log(`\n📁 수정된 파일:`, colors.dim)
  log(`   - src/app/globals.css`, colors.dim)
  log(`   - onesaas.json`, colors.dim)
  log(`\n🔄 개발 서버를 재시작하세요: pnpm dev\n`, colors.yellow)
}

function showPreviews() {
  log('\n🖼️ 테마 미리보기\n', colors.bright)

  Object.entries(themes).forEach(([id, theme]) => {
    log(`  ${theme.name}`, colors.cyan)
    log(`  ${theme.preview}`, colors.blue)
    console.log()
  })
}

// Main
const [,, command, arg] = process.argv

switch (command) {
  case 'list':
    listThemes()
    break
  case 'apply':
    if (!arg) {
      log('\n❌ 테마 이름을 입력해주세요', colors.yellow)
      log('예: node scripts/theme.mjs apply neon\n', colors.dim)
    } else {
      applyTheme(arg)
    }
    break
  case 'preview':
    showPreviews()
    break
  case '--help':
  case '-h':
  case undefined:
    showHelp()
    break
  default:
    log(`\n❌ 알 수 없는 명령어: ${command}`, colors.yellow)
    showHelp()
}

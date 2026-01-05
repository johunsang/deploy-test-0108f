#!/usr/bin/env node

/**
 * OneSaaS 템플릿 CLI
 *
 * 사용법:
 *   node scripts/template.mjs list              # 템플릿 목록
 *   node scripts/template.mjs apply <type>      # 템플릿 적용
 *   node scripts/template.mjs create <type>     # 템플릿으로 새 페이지 생성
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

const templates = {
  blog: {
    name: '블로그',
    description: '블로그/콘텐츠 마케팅용',
    pages: ['BlogHome', 'BlogPost', 'BlogCategory'],
    features: ['포스트 목록', '카테고리 필터', '검색', '작성자 프로필'],
  },
  onepage: {
    name: '원페이지',
    description: '랜딩 페이지 전용',
    pages: ['OnePage'],
    features: ['히어로 섹션', '소셜 프루프', '기능 소개', 'CTA'],
  },
  admin: {
    name: '어드민',
    description: '관리자 대시보드',
    pages: ['AdminDashboard', 'AdminUsers', 'AdminSettings'],
    features: ['통계 카드', '차트', '사용자 관리', '설정'],
  },
  'ai-webapp': {
    name: 'AI 웹앱',
    description: 'AI 채팅/생성 앱',
    pages: ['AIChat', 'AIHistory', 'AISettings'],
    features: ['실시간 채팅', '대화 기록', 'AI 모델 선택', '프롬프트 템플릿'],
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
${colors.bright}📦 OneSaaS 템플릿 CLI${colors.reset}

${colors.cyan}사용법:${colors.reset}
  node scripts/template.mjs <command> [options]

${colors.cyan}명령어:${colors.reset}
  list                      사용 가능한 템플릿 목록
  apply <template>          템플릿 적용 (페이지 복사)
  info <template>           템플릿 상세 정보

${colors.cyan}템플릿 종류:${colors.reset}
  blog        블로그/콘텐츠
  onepage     원페이지 랜딩
  admin       관리자 대시보드
  ai-webapp   AI 채팅 앱

${colors.cyan}예시:${colors.reset}
  node scripts/template.mjs list
  node scripts/template.mjs apply blog
  node scripts/template.mjs apply ai-webapp
`)
}

function listTemplates() {
  log('\n📦 사용 가능한 템플릿\n', colors.bright)

  Object.entries(templates).forEach(([id, template], index) => {
    const num = index + 1
    log(`  ${num}. ${template.name} (${id})`, colors.cyan)
    log(`     ${template.description}`, colors.dim)
    log(`     페이지: ${template.pages.join(', ')}`, colors.dim)
    console.log()
  })

  log('💡 적용: node scripts/template.mjs apply <template-id>\n', colors.yellow)
}

function showInfo(templateId) {
  if (!templates[templateId]) {
    log(`\n❌ 템플릿을 찾을 수 없습니다: ${templateId}`, colors.yellow)
    return
  }

  const template = templates[templateId]

  log(`\n📦 ${template.name} 템플릿\n`, colors.bright)
  log(`설명: ${template.description}`, colors.dim)
  log(`\n포함된 페이지:`, colors.cyan)
  template.pages.forEach(page => log(`  - ${page}`, colors.dim))
  log(`\n주요 기능:`, colors.cyan)
  template.features.forEach(feature => log(`  ✓ ${feature}`, colors.green))
  console.log()
}

function applyTemplate(templateId) {
  if (!templates[templateId]) {
    log(`\n❌ 템플릿을 찾을 수 없습니다: ${templateId}`, colors.yellow)
    log('\n사용 가능한 템플릿:', colors.dim)
    Object.keys(templates).forEach(id => log(`  - ${id}`, colors.dim))
    return
  }

  const template = templates[templateId]
  const sourcePath = path.join(rootDir, 'src', 'templates', templateId, 'pages')
  const targetPath = path.join(rootDir, 'src', 'app')

  // Check if source exists
  if (!fs.existsSync(sourcePath)) {
    log(`\n❌ 템플릿 소스를 찾을 수 없습니다: ${sourcePath}`, colors.yellow)
    return
  }

  // Create route folders and copy files
  const files = fs.readdirSync(sourcePath)
  const createdPaths = []

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
    // Update export name if needed
    content = content.replace(`export default function ${pageName}`, 'export default function Page')

    fs.writeFileSync(targetFile, content)
    createdPaths.push(`/${routeName}`)
  })

  // Update onesaas.json
  const configPath = path.join(rootDir, 'onesaas.json')
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    config.template = config.template || {}
    config.template.type = templateId
    config.template.name = template.name
    config.template.appliedAt = new Date().toISOString()
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  }

  log(`\n✅ 템플릿 적용 완료: ${template.name}`, colors.green)
  log(`\n📁 생성된 페이지:`, colors.cyan)
  createdPaths.forEach(p => log(`   ${p}`, colors.dim))
  log(`\n🔄 개발 서버를 재시작하세요: pnpm dev`, colors.yellow)
  log(`\n🌐 브라우저에서 확인:`, colors.dim)
  createdPaths.forEach(p => log(`   http://localhost:3000${p}`, colors.blue))
  console.log()
}

// Main
const [,, command, arg] = process.argv

switch (command) {
  case 'list':
    listTemplates()
    break
  case 'apply':
    if (!arg) {
      log('\n❌ 템플릿 이름을 입력해주세요', colors.yellow)
      log('예: node scripts/template.mjs apply blog\n', colors.dim)
    } else {
      applyTemplate(arg)
    }
    break
  case 'info':
    if (!arg) {
      log('\n❌ 템플릿 이름을 입력해주세요', colors.yellow)
    } else {
      showInfo(arg)
    }
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

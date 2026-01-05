/**
 * 테마 설정
 * CLI 또는 설정 파일에서 테마를 선택할 수 있습니다.
 */

export const themes = {
  minimal: {
    id: 'minimal',
    name: '미니멀',
    description: '극도로 절제된 미니멀리즘 - 생산성 앱, 노트 앱에 적합',
    colors: {
      bg: '#fafafa',
      bgDark: '#0a0a0a',
      text: '#0a0a0a',
      textDark: '#fafafa',
      accent: '#0a0a0a',
      accentDark: '#fafafa',
    },
    fonts: {
      display: "'Instrument Sans', 'Pretendard', sans-serif",
      body: "'Geist', 'Pretendard', sans-serif",
    },
    borderRadius: 'minimal', // 4-8px
  },

  neon: {
    id: 'neon',
    name: '네온',
    description: '레트로 퓨처리스틱 - AI 도구, 테크 스타트업에 적합',
    colors: {
      bg: '#09090b',
      text: '#fafafa',
      accent: '#00ff88',
      accentSecondary: '#00d4ff',
    },
    fonts: {
      display: "'Space Grotesk', 'SUIT', sans-serif",
      body: "'Satoshi', 'SUIT', sans-serif",
    },
    borderRadius: 'medium', // 10-16px
    effects: ['glow', 'noise', 'grid'],
  },

  playful: {
    id: 'playful',
    name: '플레이풀',
    description: '재미있고 친근한 - 교육, 소셜 앱에 적합',
    colors: {
      bg: '#fffbeb',
      text: '#1c1917',
      accent: '#f97316',
      secondary: '#8b5cf6',
      tertiary: '#06b6d4',
    },
    fonts: {
      display: "'Nunito', 'Wanted Sans', sans-serif",
      body: "'Nunito', 'Wanted Sans', sans-serif",
    },
    borderRadius: 'rounded', // 16-32px
    effects: ['bounce', 'dots'],
  },

  luxury: {
    id: 'luxury',
    name: '럭셔리',
    description: '고급스럽고 정제된 - 프리미엄 서비스, 금융에 적합',
    colors: {
      bg: '#0c0a09',
      text: '#fafaf9',
      accent: '#d4af37', // gold
    },
    fonts: {
      display: "'Cormorant Garamond', 'Noto Serif KR', serif",
      body: "'Inter', 'Pretendard', sans-serif",
    },
    borderRadius: 'sharp', // 0-4px
    effects: ['grain', 'fadeUp'],
  },

  brutalist: {
    id: 'brutalist',
    name: '브루탈리스트',
    description: '거칠고 원시적인 - 개발자 도구, 오픈소스에 적합',
    colors: {
      bg: '#ffffff',
      bgDark: '#000000',
      text: '#000000',
      textDark: '#ffffff',
      accent: '#0000ff',
    },
    fonts: {
      display: "'IBM Plex Mono', 'D2Coding', monospace",
      body: "'IBM Plex Mono', 'D2Coding', monospace",
    },
    borderRadius: 'none', // 0px
    effects: ['hardShadow', 'cursor'],
  },
} as const

export type ThemeId = keyof typeof themes
export type Theme = (typeof themes)[ThemeId]

export function getTheme(id: ThemeId): Theme {
  return themes[id]
}

export function getThemeList() {
  return Object.values(themes)
}

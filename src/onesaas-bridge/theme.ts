/**
 * OneSaaS 테마 설정
 *
 * 브랜드 색상, 폰트, 간격 등을 정의합니다.
 * Tailwind CSS와 함께 사용됩니다.
 */

export const theme = {
  // 브랜드 색상
  colors: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // 메인 색상 (green-500)
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7', // 보조 색상 (purple-500)
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    accent: {
      500: '#3b82f6', // 강조 색상 (blue-500)
    },
  },

  // 폰트 설정
  fonts: {
    sans: ['Inter', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
  },

  // 테두리 둥글기
  borderRadius: {
    sm: '0.375rem', // 6px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    '2xl': '1.5rem', // 24px
  },

  // 그림자
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    glow: '0 0 20px rgb(34 197 94 / 0.25)', // primary glow
  },

  // 애니메이션
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
}

// 다크 모드 설정
export const darkMode = {
  background: '#030712', // gray-950
  surface: '#111827',    // gray-900
  border: '#1f2937',     // gray-800
  text: {
    primary: '#ffffff',
    secondary: '#9ca3af', // gray-400
    muted: '#6b7280',     // gray-500
  },
}

// 라이트 모드 설정 (선택사항)
export const lightMode = {
  background: '#ffffff',
  surface: '#f9fafb',    // gray-50
  border: '#e5e7eb',     // gray-200
  text: {
    primary: '#111827',  // gray-900
    secondary: '#4b5563', // gray-600
    muted: '#9ca3af',     // gray-400
  },
}

// 컴포넌트별 스타일
export const components = {
  button: {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
    outline: 'border border-gray-700 hover:bg-gray-800 text-white',
    ghost: 'hover:bg-gray-800 text-gray-400 hover:text-white',
  },
  input: {
    base: 'bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none',
  },
  card: {
    base: 'bg-gray-900 border border-gray-800 rounded-2xl',
  },
}

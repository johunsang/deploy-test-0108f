/**
 * OneSaaS 프로젝트 설정
 *
 * 서비스 이름, 기능 플래그, API 설정 등을 정의합니다.
 */

export const config = {
  // 서비스 기본 정보
  site: {
    name: 'OneSaaS',
    description: 'SaaS를 만드는 가장 쉬운 방법',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: '/logo.png',
    favicon: '/favicon.ico',
  },

  // 기능 플래그
  features: {
    auth: {
      enabled: true,
      providers: {
        email: true,
        google: true,
        kakao: true,
      },
      magicLink: false,
    },
    payment: {
      enabled: true,
      provider: 'portone', // 'portone' | 'tosspayments'
      currency: 'KRW',
    },
    admin: {
      enabled: true,
      analytics: true,
      userManagement: true,
    },
    ai: {
      enabled: true,
      providers: ['openai', 'anthropic', 'google'],
    },
    email: {
      enabled: true,
      provider: 'resend', // 'resend' | 'sendgrid' | 'mailgun'
    },
  },

  // 가격 플랜
  plans: [
    {
      id: 'free',
      name: '무료',
      price: 0,
      features: [
        '기본 기능 모두 포함',
        '월 100 사용자',
        '커뮤니티 지원',
      ],
    },
    {
      id: 'pro',
      name: '프로',
      price: 29000,
      features: [
        '무료 플랜의 모든 것',
        '무제한 사용자',
        '우선 이메일 지원',
        '고급 분석',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: '엔터프라이즈',
      price: null, // 문의
      features: [
        '프로 플랜의 모든 것',
        '전담 매니저',
        'SLA 보장',
        '커스텀 개발',
      ],
    },
  ],

  // 소셜 링크
  social: {
    twitter: '',
    github: '',
    discord: '',
  },

  // 연락처
  contact: {
    email: 'support@onesaas.kr',
    phone: '',
  },

  // SEO 기본값
  seo: {
    title: 'OneSaaS - SaaS를 만드는 가장 쉬운 방법',
    description: '결제, 인증, 관리자 대시보드까지 모두 포함. 코딩 없이 클릭 몇 번으로 완성하세요.',
    keywords: ['SaaS', '스타트업', '노코드', '창업', 'B2B'],
  },
}

// 환경별 설정
export const env = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
}

/**
 * OneSaaS 라우트 설정
 *
 * 이 파일은 onesaas-managed와 onesaas-custom 사이를 연결하는 역할을 합니다.
 * 경로, 메뉴, 접근 권한 등을 정의합니다.
 */

export const routes = {
  // 공개 페이지 (로그인 불필요)
  public: [
    { path: '/', label: '홈' },
    { path: '/#features', label: '기능' },
    { path: '/#pricing', label: '가격' },
    { path: '/docs', label: '문서' },
    { path: '/terms', label: '이용약관' },
    { path: '/privacy', label: '개인정보처리방침' },
  ],

  // 인증 페이지
  auth: [
    { path: '/login', label: '로그인' },
    { path: '/signup', label: '회원가입' },
    { path: '/forgot-password', label: '비밀번호 찾기' },
  ],

  // 로그인 필요 페이지
  protected: [
    { path: '/dashboard', label: '대시보드' },
    { path: '/settings', label: '설정' },
    { path: '/billing', label: '결제' },
  ],

  // 관리자 전용 페이지
  admin: [
    { path: '/admin', label: '관리자 홈' },
    { path: '/admin/users', label: '사용자 관리' },
    { path: '/admin/analytics', label: '통계' },
    { path: '/admin/settings', label: '시스템 설정' },
  ],
}

// 네비게이션 메뉴 (헤더에 표시)
export const navMenu = {
  main: [
    { path: '/#features', label: '기능' },
    { path: '/#pricing', label: '가격' },
    { path: '/docs', label: '문서' },
  ],
  auth: {
    loggedOut: [
      { path: '/login', label: '로그인' },
      { path: '/signup', label: '무료 시작', isPrimary: true },
    ],
    loggedIn: [
      { path: '/dashboard', label: '대시보드' },
    ],
  },
}

// 푸터 메뉴
export const footerMenu = {
  service: [
    { path: '/#features', label: '기능' },
    { path: '/#pricing', label: '가격' },
    { path: '/docs', label: '문서' },
  ],
  legal: [
    { path: '/terms', label: '이용약관' },
    { path: '/privacy', label: '개인정보처리방침' },
  ],
}

// 리다이렉트 설정
export const redirects = {
  afterLogin: '/dashboard',
  afterLogout: '/',
  afterSignup: '/dashboard',
}

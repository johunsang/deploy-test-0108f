import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-white text-lg">OneSaaS</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              클릭 몇 번으로 완성하는 SaaS.
              결제, 인증, 관리자 페이지까지 모두 포함.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white text-sm transition-colors">
                  기능
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  가격
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  문서
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} OneSaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

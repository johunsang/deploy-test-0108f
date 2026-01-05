'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // TODO: Replace with actual auth

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-white text-lg">OneSaaS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <Link href="/#features" className="text-gray-400 hover:text-white transition-colors ml-8">
              기능
            </Link>
            <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors ml-8">
              가격
            </Link>
            <Link href="/notes" className="text-gray-400 hover:text-white transition-colors ml-8">
              노트
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-white transition-colors ml-8">
              문서
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition-colors mr-4"
                >
                  대시보드
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-white transition-colors mr-4"
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  무료 시작
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                기능
              </Link>
              <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                가격
              </Link>
              <Link href="/notes" className="text-gray-400 hover:text-white transition-colors">
                노트
              </Link>
              <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                문서
              </Link>
              <hr className="border-gray-800" />
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                    대시보드
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-left text-gray-400 hover:text-white transition-colors"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                    로그인
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-center"
                  >
                    무료 시작
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

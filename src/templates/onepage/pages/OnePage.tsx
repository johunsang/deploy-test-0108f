'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function OnePage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-green-500/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">현재 200+ 팀이 사용 중</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-200 to-purple-200 bg-clip-text text-transparent">
              복잡한 건 우리가,
            </span>
            <br />
            <span className="text-white">당신은 성장만.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            코딩 없이 10분 만에 SaaS를 만들고,
            <br />
            바로 고객을 받으세요.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
            <button className="px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-500/25 whitespace-nowrap">
              무료로 시작
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            신용카드 필요 없음 • 14일 무료 체험
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-8">
            이미 많은 팀이 신뢰하고 있습니다
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Startup A', 'Company B', 'Team C', 'Brand D', 'Corp E'].map((name) => (
              <span key={name} className="text-xl font-bold text-gray-400">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">왜 OneSaaS인가?</h2>
            <p className="text-gray-400 text-lg">다른 도구들과 비교해보세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">10분 만에 완성</h3>
              <p className="text-gray-400">
                클릭 몇 번으로 결제, 인증, 대시보드까지
                완성된 SaaS를 배포하세요.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">개발 비용 90% 절감</h3>
              <p className="text-gray-400">
                외주 개발 없이 직접 만들고,
                필요할 때만 전문가 도움을 받으세요.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">내 코드, 내 소유</h3>
              <p className="text-gray-400">
                락인 없이 언제든 코드를 내보내고,
                원하는 곳에 호스팅하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            지금 시작하세요
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            14일 무료 체험으로 직접 경험해보세요.
            <br />
            신용카드 없이 바로 시작할 수 있습니다.
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-5 bg-green-500 text-white rounded-xl font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-green-500/25"
          >
            무료로 시작하기
          </Link>
        </div>
      </section>
    </div>
  )
}

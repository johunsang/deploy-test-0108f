'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: '총 사용자', value: '1,234', change: '+12%', icon: '👥' },
    { label: '월 매출', value: '₩2,450,000', change: '+8%', icon: '💰' },
    { label: '활성 구독', value: '89', change: '+5%', icon: '📈' },
    { label: '이번 주 가입', value: '23', change: '+18%', icon: '✨' },
  ]

  const recentUsers = [
    { name: '김철수', email: 'chulsoo@example.com', plan: '프로', date: '2024-01-15' },
    { name: '이영희', email: 'younghee@example.com', plan: '무료', date: '2024-01-14' },
    { name: '박지민', email: 'jimin@example.com', plan: '프로', date: '2024-01-13' },
    { name: '최수진', email: 'sujin@example.com', plan: '엔터프라이즈', date: '2024-01-12' },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-gray-900 border-r border-gray-800 p-4">
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'overview' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <span>📊</span>
            대시보드
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'users' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <span>👥</span>
            사용자 관리
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'billing' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <span>💳</span>
            결제 관리
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'analytics' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <span>📈</span>
            통계
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'settings' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <span>⚙️</span>
            설정
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">대시보드</h1>
            <p className="text-gray-400">서비스 현황을 한눈에 확인하세요</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">최근 가입자</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 font-medium">{user.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          user.plan === '프로' ? 'bg-purple-500/20 text-purple-400' :
                          user.plan === '엔터프라이즈' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {user.plan}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">{user.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">빠른 작업</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left">
                    <span className="text-2xl mb-2 block">📧</span>
                    <p className="text-white font-medium">이메일 발송</p>
                    <p className="text-gray-400 text-sm">전체 사용자에게</p>
                  </button>
                  <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left">
                    <span className="text-2xl mb-2 block">📊</span>
                    <p className="text-white font-medium">리포트 다운로드</p>
                    <p className="text-gray-400 text-sm">월간 보고서</p>
                  </button>
                  <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left">
                    <span className="text-2xl mb-2 block">💳</span>
                    <p className="text-white font-medium">결제 설정</p>
                    <p className="text-gray-400 text-sm">결제 수단 관리</p>
                  </button>
                  <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left">
                    <span className="text-2xl mb-2 block">🔧</span>
                    <p className="text-white font-medium">서비스 설정</p>
                    <p className="text-gray-400 text-sm">기본 설정 변경</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

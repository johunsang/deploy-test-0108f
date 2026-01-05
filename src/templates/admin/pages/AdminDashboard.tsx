'use client'

import { useState } from 'react'

interface StatCard {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: string
}

interface User {
  id: string
  name: string
  email: string
  plan: string
  status: string
  joinedAt: string
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const stats: StatCard[] = [
    { label: '총 매출', value: '₩12,450,000', change: '+12.5%', trend: 'up', icon: '💰' },
    { label: '활성 사용자', value: '1,234', change: '+8.2%', trend: 'up', icon: '👥' },
    { label: '구독 전환율', value: '24.5%', change: '+3.1%', trend: 'up', icon: '📈' },
    { label: '이탈률', value: '2.1%', change: '-0.5%', trend: 'down', icon: '📉' },
  ]

  const recentUsers: User[] = [
    { id: '1', name: '김철수', email: 'cs@example.com', plan: '프로', status: '활성', joinedAt: '2024-01-15' },
    { id: '2', name: '이영희', email: 'yh@example.com', plan: '무료', status: '활성', joinedAt: '2024-01-14' },
    { id: '3', name: '박지민', email: 'jm@example.com', plan: '프로', status: '활성', joinedAt: '2024-01-13' },
    { id: '4', name: '최수진', email: 'sj@example.com', plan: '엔터프라이즈', status: '활성', joinedAt: '2024-01-12' },
    { id: '5', name: '정민호', email: 'mh@example.com', plan: '무료', status: '비활성', joinedAt: '2024-01-11' },
  ]

  const menuItems = [
    { id: 'dashboard', label: '대시보드', icon: '📊' },
    { id: 'users', label: '사용자', icon: '👥' },
    { id: 'billing', label: '결제', icon: '💳' },
    { id: 'analytics', label: '분석', icon: '📈' },
    { id: 'content', label: '콘텐츠', icon: '📝' },
    { id: 'settings', label: '설정', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            {sidebarOpen && <span className="font-bold text-white">Admin</span>}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toggle */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full p-2 text-gray-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">대시보드</h1>
          <p className="text-gray-400">전체 서비스 현황을 확인하세요</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">매출 추이</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [차트 영역]
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">사용자 증가</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [차트 영역]
            </div>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-gray-900 rounded-xl border border-gray-800">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">최근 가입자</h3>
            <button className="text-green-400 text-sm hover:text-green-300">
              전체 보기 →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-gray-400 text-sm font-medium p-4">사용자</th>
                  <th className="text-left text-gray-400 text-sm font-medium p-4">플랜</th>
                  <th className="text-left text-gray-400 text-sm font-medium p-4">상태</th>
                  <th className="text-left text-gray-400 text-sm font-medium p-4">가입일</th>
                  <th className="text-right text-gray-400 text-sm font-medium p-4">액션</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.plan === '프로' ? 'bg-purple-500/20 text-purple-400' :
                        user.plan === '엔터프라이즈' ? 'bg-green-500/20 text-green-400' :
                        'bg-gray-700 text-gray-300'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`flex items-center gap-2 text-sm ${
                        user.status === '활성' ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          user.status === '활성' ? 'bg-green-400' : 'bg-gray-400'
                        }`} />
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">{user.joinedAt}</td>
                    <td className="p-4 text-right">
                      <button className="text-gray-400 hover:text-white">•••</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

const themes = [
  {
    id: 'minimal',
    name: '미니멀',
    description: '극도로 절제된 미니멀리즘',
    target: '생산성, 노트 앱',
    colors: ['#fafafa', '#0a0a0a', '#0a0a0a'],
    preview: '/previews/minimal.png',
  },
  {
    id: 'neon',
    name: '네온',
    description: '레트로 퓨처리스틱 + 네온 글로우',
    target: 'AI 도구, 테크 스타트업',
    colors: ['#09090b', '#00ff88', '#00d4ff'],
    preview: '/previews/neon.png',
  },
  {
    id: 'playful',
    name: '플레이풀',
    description: '재미있고 친근한 디자인',
    target: '교육, 소셜 앱',
    colors: ['#fffbeb', '#f97316', '#8b5cf6'],
    preview: '/previews/playful.png',
  },
  {
    id: 'luxury',
    name: '럭셔리',
    description: '고급스럽고 정제된 골드 악센트',
    target: '프리미엄 서비스, 금융',
    colors: ['#0c0a09', '#d4af37', '#fafaf9'],
    preview: '/previews/luxury.png',
  },
  {
    id: 'brutalist',
    name: '브루탈리스트',
    description: '거칠고 원시적인 개발자 스타일',
    target: '개발자 도구, 오픈소스',
    colors: ['#ffffff', '#0000ff', '#000000'],
    preview: '/previews/brutalist.png',
  },
]

const templates = [
  {
    id: 'blog',
    name: '블로그',
    description: '블로그/콘텐츠 마케팅',
    icon: '📝',
    features: ['포스트 목록', '카테고리 필터', '검색', '작성자 프로필'],
  },
  {
    id: 'onepage',
    name: '원페이지',
    description: '랜딩 페이지 전용',
    icon: '🚀',
    features: ['히어로 섹션', '소셜 프루프', '기능 소개', 'CTA'],
  },
  {
    id: 'admin',
    name: '어드민',
    description: '관리자 대시보드',
    icon: '📊',
    features: ['통계 카드', '차트', '사용자 관리', '설정'],
  },
  {
    id: 'ai-webapp',
    name: 'AI 웹앱',
    description: 'AI 채팅/생성 앱',
    icon: '🤖',
    features: ['실시간 채팅', '대화 기록', 'AI 모델 선택', '프롬프트'],
  },
]

export default function SetupPage() {
  const [step, setStep] = useState(1)
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isApplying, setIsApplying] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleApply = async () => {
    if (!selectedTheme || !selectedTemplate) return

    setIsApplying(true)

    try {
      // Apply theme
      const themeRes = await fetch('/api/setup/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme: selectedTheme, template: selectedTemplate }),
      })

      if (themeRes.ok) {
        setIsComplete(true)
      }
    } catch (error) {
      console.error('적용 실패:', error)
    } finally {
      setIsApplying(false)
    }
  }

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4">설정 완료!</h1>
          <p className="text-gray-400 mb-8">
            테마와 템플릿이 적용되었습니다.
            <br />
            개발 서버를 재시작하면 변경사항이 반영됩니다.
          </p>
          <div className="bg-gray-900 rounded-xl p-4 mb-6 text-left">
            <p className="text-gray-400 text-sm mb-2">터미널에서 실행:</p>
            <code className="text-green-400">pnpm dev</code>
          </div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">프로젝트 설정</h1>
          <p className="text-gray-400">테마와 템플릿을 선택하세요</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-green-400' : 'text-gray-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-500'
            }`}>
              1
            </span>
            <span className="hidden sm:inline">테마 선택</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-green-500' : 'bg-gray-700'}`} />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-green-400' : 'text-gray-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-500'
            }`}>
              2
            </span>
            <span className="hidden sm:inline">템플릿 선택</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-green-500' : 'bg-gray-700'}`} />
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-green-400' : 'text-gray-500'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-500'
            }`}>
              3
            </span>
            <span className="hidden sm:inline">완료</span>
          </div>
        </div>

        {/* Step 1: Theme Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">디자인 테마를 선택하세요</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`text-left p-6 rounded-xl border-2 transition-all ${
                    selectedTheme === theme.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                  }`}
                >
                  {/* Color swatches */}
                  <div className="flex gap-2 mb-4">
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg border border-gray-700"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{theme.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{theme.description}</p>
                  <p className="text-gray-500 text-xs">적합: {theme.target}</p>
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => selectedTheme && setStep(2)}
                disabled={!selectedTheme}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음 단계
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Template Selection */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">템플릿을 선택하세요</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`text-left p-6 rounded-xl border-2 transition-all ${
                    selectedTemplate === template.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{template.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{template.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {template.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                이전
              </button>
              <button
                onClick={() => selectedTemplate && setStep(3)}
                disabled={!selectedTemplate}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음 단계
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-center">설정 확인</h2>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">테마</span>
                  <span className="font-semibold">
                    {themes.find(t => t.id === selectedTheme)?.name}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400">템플릿</span>
                  <span className="font-semibold">
                    {templates.find(t => t.id === selectedTemplate)?.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <p className="text-yellow-400 text-sm">
                ⚠️ 적용 후 개발 서버를 재시작해야 변경사항이 반영됩니다.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                이전
              </button>
              <button
                onClick={handleApply}
                disabled={isApplying}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isApplying ? '적용 중...' : '적용하기'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

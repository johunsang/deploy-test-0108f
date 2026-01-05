'use client'

import Link from 'next/link'

interface Post {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  image?: string
}

const samplePosts: Post[] = [
  {
    id: '1',
    title: '스타트업이 알아야 할 2024년 SaaS 트렌드',
    excerpt: 'AI 통합, 버티컬 SaaS의 부상, 그리고 PLG 전략까지. 올해 주목해야 할 핵심 트렌드를 정리했습니다.',
    author: '김철수',
    date: '2024-01-15',
    category: '트렌드',
    readTime: '5분',
  },
  {
    id: '2',
    title: 'Next.js 14 App Router 완벽 가이드',
    excerpt: 'Server Components, Streaming, 그리고 새로운 캐싱 전략까지. Next.js 14의 모든 것을 알아봅니다.',
    author: '이영희',
    date: '2024-01-12',
    category: '개발',
    readTime: '10분',
  },
  {
    id: '3',
    title: '효과적인 가격 정책 설계하기',
    excerpt: 'Freemium vs 무료 체험, 가격 앵커링, 그리고 업셀 전략. SaaS 가격 모델의 모든 것.',
    author: '박지민',
    date: '2024-01-10',
    category: '비즈니스',
    readTime: '7분',
  },
]

export default function BlogHome() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">블로그</h1>
        <p className="text-gray-400 text-lg">
          SaaS, 스타트업, 개발에 대한 인사이트
        </p>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {['전체', '트렌드', '개발', '비즈니스', '디자인'].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              cat === '전체'
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <article className="mb-16">
        <div className="bg-gradient-to-br from-purple-900/50 to-gray-900 rounded-2xl p-8 border border-gray-800">
          <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
            추천
          </span>
          <h2 className="text-2xl font-bold mb-4 hover:text-green-400 transition-colors cursor-pointer">
            {samplePosts[0].title}
          </h2>
          <p className="text-gray-400 mb-6">{samplePosts[0].excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{samplePosts[0].author}</span>
            <span>•</span>
            <span>{samplePosts[0].date}</span>
            <span>•</span>
            <span>{samplePosts[0].readTime} 읽기</span>
          </div>
        </div>
      </article>

      {/* Post List */}
      <div className="space-y-8">
        {samplePosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 hover:text-green-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} 읽기</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
          더 보기
        </button>
      </div>
    </div>
  )
}

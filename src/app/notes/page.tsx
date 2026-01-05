'use client'

import { useState, useEffect } from 'react'

interface Note {
  id: string
  title: string
  content: string | null
  published: boolean
  createdAt: string
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 노트 목록 불러오기
  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes')
      const data = await res.json()
      // 배열인지 확인
      if (Array.isArray(data)) {
        setNotes(data)
      } else {
        console.error('API 응답이 배열이 아님:', data)
        setNotes([])
      }
    } catch (error) {
      console.error('노트 불러오기 실패:', error)
      setNotes([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  // 노트 생성/수정
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    try {
      if (editingId) {
        // 수정
        await fetch(`/api/notes/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        })
      } else {
        // 생성
        await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        })
      }

      setTitle('')
      setContent('')
      setEditingId(null)
      fetchNotes()
    } catch (error) {
      console.error('노트 저장 실패:', error)
    }
  }

  // 노트 삭제
  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      await fetch(`/api/notes/${id}`, { method: 'DELETE' })
      fetchNotes()
    } catch (error) {
      console.error('노트 삭제 실패:', error)
    }
  }

  // 수정 모드
  const handleEdit = (note: Note) => {
    setEditingId(note.id)
    setTitle(note.title)
    setContent(note.content || '')
  }

  // 수정 취소
  const handleCancel = () => {
    setEditingId(null)
    setTitle('')
    setContent('')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">노트</h1>
        <p className="text-gray-400">CRUD 예제 - 노트를 작성하고 관리하세요</p>
      </div>

      {/* 노트 작성 폼 */}
      <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요 (선택)"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            {editingId ? '수정하기' : '추가하기'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
          )}
        </div>
      </form>

      {/* 노트 목록 */}
      {isLoading ? (
        <div className="text-center text-gray-400 py-12">불러오는 중...</div>
      ) : notes.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p className="text-5xl mb-4">📝</p>
          <p>아직 노트가 없습니다</p>
          <p className="text-sm">첫 번째 노트를 작성해보세요!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{note.title}</h3>
                  {note.content && (
                    <p className="text-gray-400 whitespace-pre-wrap">{note.content}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-3">
                    {new Date(note.createdAt).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(note)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    title="수정"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                    title="삭제"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

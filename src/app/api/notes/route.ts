import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - 모든 노트 조회
export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(notes)
  } catch (error) {
    console.error('노트 조회 실패:', error)
    return NextResponse.json({ error: '노트를 불러올 수 없습니다' }, { status: 500 })
  }
}

// POST - 새 노트 생성
export async function POST(request: Request) {
  try {
    const { title, content } = await request.json()

    if (!title) {
      return NextResponse.json({ error: '제목을 입력해주세요' }, { status: 400 })
    }

    const note = await prisma.note.create({
      data: { title, content },
    })

    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error('노트 생성 실패:', error)
    return NextResponse.json({ error: '노트를 생성할 수 없습니다' }, { status: 500 })
  }
}

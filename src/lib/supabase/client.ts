'use client'

/**
 * Supabase 클라이언트 (브라우저용)
 */

import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 환경 변수 설정 여부 확인
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export function createClient() {
  if (!isSupabaseConfigured) {
    // 환경 변수가 없으면 더미 클라이언트 반환 (에러 방지)
    return null
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

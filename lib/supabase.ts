// lib/supabase.ts - Modern Supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser client pentru components
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export pentru easy import
export default supabase
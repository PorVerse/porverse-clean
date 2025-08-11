// lib/types.ts - Toate tipurile PorVerse în loc sigur

// ===========================
// API & Response Types
// ===========================
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// ===========================
// User & Profile Types  
// ===========================
export interface UserProfile {
  id: string
  email: string
  full_name?: string
  first_name?: string
  last_name?: string
  avatar_url?: string
  stripe_customer_id?: string
  paypal_customer_id?: string
  country_code?: string
  subscription_status?: 'free' | 'premium' | 'trinity'
  created_at: string
  updated_at: string
}

// ===========================
// Ecosystem Access Types
// ===========================
export interface EcosystemAccess {
  ecosystem: string
  access_level: 'free' | 'premium'
  features_unlocked: string[]
  user_id: string
}

// ===========================
// Health Types (PorHealth)
// ===========================
export interface HealthProfile {
  id: string
  user_id: string
  height_cm?: number
  weight_kg?: number
  activity_level?: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
  health_goals?: string[]
  dietary_restrictions?: string[]
  allergies?: string[]
  created_at: string
  updated_at: string
}

export interface BiometricEntry {
  id: string
  user_id: string
  metric_type: 'weight' | 'blood_pressure' | 'heart_rate' | 'body_fat'
  value: number
  unit: string
  recorded_at: string
  notes?: string
}

// ===========================
// Task & Productivity Types
// ===========================
export interface Task {
  id: string
  user_id: string
  title: string
  description?: string
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'in_progress' | 'completed'
  due_date?: string
  category?: string
  estimated_duration?: number
  actual_duration?: number
  created_at: string
  updated_at: string
}

export interface TimeBlock {
  id: string
  user_id: string
  title: string
  start_time: string
  end_time: string
  type: 'work' | 'break' | 'meeting' | 'focus'
  description?: string
  productivity_score?: number
}

// ===========================
// Mood & Mental Health Types
// ===========================
export interface MoodEntry {
  id: string
  user_id: string
  mood: 'very_sad' | 'sad' | 'neutral' | 'happy' | 'very_happy'
  energy_level: number
  stress_level: number
  notes?: string
  triggers?: string[]
  created_at: string
}

// ===========================
// AI & Conversation Types
// ===========================
export interface AIConversation {
  id: string
  user_id: string
  ecosystem: string
  messages: Array<{
    role: 'user' | 'assistant'
    content: string
    timestamp: string
  }>
  created_at: string
  updated_at: string
}

// ===========================
// Subscription & Payment Types
// ===========================
export interface SubscriptionPlan {
  id: string
  name: string
  price_monthly: number
  price_yearly: number
  features: string[]
  ecosystems: string[]
  tier: 'free' | 'premium' | 'trinity'
}

export interface UserSubscription {
  id: string
  user_id: string
  plan_id: string
  status: 'active' | 'cancelled' | 'past_due'
  current_period_start: string
  current_period_end: string
  stripe_subscription_id?: string
  paypal_subscription_id?: string
}

// ===========================
// Component Props Types
// ===========================
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline'
  children: React.ReactNode
}
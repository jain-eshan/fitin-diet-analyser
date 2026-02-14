// ─── Diet Profile ────────────────────────────────────────────────────────────
export interface DietProfile {
  id: string;
  user_id: string;
  age: number;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  weight_kg: number;
  height_cm: number;
  activity_level: 'sedentary' | 'light' | 'moderate' | 'very_active' | 'extremely_active';
  fitness_goal: 'weight_loss' | 'muscle_gain' | 'maintenance' | 'general_health';
  dietary_restrictions: string[];
  food_dislikes: string;
  health_conditions: string;
  profile_complete: boolean;
  created_at: string;
  updated_at: string;
}

// ─── Diet Log ────────────────────────────────────────────────────────────────
export interface DietLog {
  id: string;
  user_id: string;
  log_date: string;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'beverage';
  description: string;
  estimated_calories: number | null;
  protein_grams: number | null;
  carbs_grams: number | null;
  fats_grams: number | null;
  created_at: string;
}

// ─── Rule ─────────────────────────────────────────────────────────────────────
export interface DietRule {
  id: string;
  rule_id: string;
  name: string;
  description: string;
  category: 'macros' | 'calories' | 'meal_patterns' | 'goal_alignment';
  severity: 'critical' | 'high' | 'medium' | 'low';
  metric: string;
  operator: 'lt' | 'gt' | 'lte' | 'gte' | 'eq';
  threshold: number;
  applies_to_goal: string | null;
  user_message: string;
  is_active: boolean;
  sort_order: number;
}

export interface RuleFlag extends DietRule {
  actual_value: number;
}

// ─── Nutrition Metrics ────────────────────────────────────────────────────────
export interface NutritionMetrics {
  daily_calories: number;
  protein_per_kg: number;
  carbs_pct: number;
  fats_pct: number;
  protein_pct: number;
  calorie_balance: number; // positive = surplus, negative = deficit
  breakfast_frequency: number; // ratio 0-1
  meals_per_day: number;
  tdee: number;
}

// ─── Analysis ─────────────────────────────────────────────────────────────────
export interface AIRecommendation {
  title: string;
  explanation: string;
  impact: 'high' | 'medium' | 'low';
  priority: number;
}

export interface DietAnalysis {
  id: string;
  user_id: string;
  analysis_period_days: number;
  diet_snapshot: DietLog[];
  rule_flags: RuleFlag[];
  health_score: number;
  estimated_daily_calories: number;
  avg_protein_grams: number;
  avg_carbs_grams: number;
  avg_fats_grams: number;
  tdee_estimated: number;
  calorie_deficit_surplus: number;
  ai_recommendations: AIRecommendation[];
  ai_summary: string;
  reviewed_by: string | null;
  coach_notes: string | null;
  coach_override_recommendations: AIRecommendation[] | null;
  review_status: 'pending' | 'reviewed' | 'flagged_for_call';
  analysis_status: 'pending' | 'processing' | 'completed' | 'failed';
  error_message: string | null;
  created_at: string;
}

// ─── Coach Intervention ───────────────────────────────────────────────────────
export interface CoachIntervention {
  id: string;
  analysis_id: string;
  coach_id: string;
  user_id: string;
  intervention_type: 'note' | 'override' | 'call_scheduled' | 'call_completed';
  notes: string;
  outcome: string | null;
  created_at: string;
}

// ─── Rule Engine Output ───────────────────────────────────────────────────────
export interface RuleEngineOutput {
  flags: RuleFlag[];
  health_score: number;
  metrics: NutritionMetrics;
}

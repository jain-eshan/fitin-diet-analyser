# Changelog

## [Unreleased]

### Planned
- Diet profile form (age, weight, goal, restrictions)
- Meal logger (breakfast, lunch, dinner, snack, beverage)
- Rule engine — database-driven evaluator against `diet_rules` table
- Gemini 1.5 Flash Edge Function for AI recommendations
- Analysis results page (health score, macro breakdown, flags, recommendations)
- Admin coach dashboard (review queue, interventions, call tracking)
- Admin rules editor (edit thresholds/messages without code changes)
- Database migration SQL for all 5 tables

---

## [0.1.0] — 2026-02-14

### Added
- Project scaffold: React 18 + Vite 5 + TypeScript + Tailwind CSS v3 + shadcn/ui
- Supabase client — connects to shared Fitin project (`dtpgjeatqzhhwstoxbvg`)
- `AuthContext` — login, signup, logout, `isAdmin` check via `get_user_role` RPC
- `ProtectedRoute` — redirects unauthenticated users to `/login`
- `CoachRoute` — redirects non-admins to `/dashboard`
- Full routing structure (member + admin routes)
- Login page
- Signup page (creates profile with `MEMBER` role)
- Member placeholder pages: Dashboard, Diet Profile, Log Meals, Analyse, Results
- Admin placeholder pages: Dashboard, Members, Analysis Review, Rules Editor
- Design token system (`theme.css`) matching Reccos visual identity
- `vercel.json` SPA rewrite rules for `diet.fitin.club`
- TypeScript types for: `DietProfile`, `DietLog`, `DietAnalysis`, `DietRule`, `CoachIntervention`, `NutritionMetrics`, `RuleEngineOutput`
- GitHub repo: `jain-eshan/fitin-diet-analyser`

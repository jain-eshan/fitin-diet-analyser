# Fitin Diet Analyser

AI-powered diet analysis tool at [diet.fitin.club](https://diet.fitin.club).

Part of the **Fitin platform** — shares auth with [reccos.fitin.club](https://reccos.fitin.club) (one account, all tools).

---

## What It Does

Members log their meals, answer questions about their health goals, and receive an instant diet analysis:
- **Health score** (0–100)
- **Macro breakdown** (protein, carbs, fats)
- **Rule-based flags** — e.g. "protein too low for your goal"
- **AI recommendations** — personalised, India-specific advice via Gemini

Fitin coaches review AI output, add notes, and flag members for follow-up calls from an admin dashboard.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Database + Auth | Supabase (`dtpgjeatqzhhwstoxbvg`) — shared with Reccos |
| AI | Gemini 1.5 Flash (free tier, via Supabase Edge Function) |
| Deployment | Vercel → `diet.fitin.club` |

---

## Local Development

**Prerequisites:** Node 18+, npm

```bash
# 1. Clone
git clone https://github.com/jain-eshan/fitin-diet-analyser.git
cd fitin-diet-analyser

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Supabase anon key to .env

# 4. Start dev server
npm run dev
# → http://localhost:8080
```

---

## Environment Variables

```bash
# .env
VITE_SUPABASE_URL=https://dtpgjeatqzhhwstoxbvg.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Get the anon key from: Supabase Dashboard → Settings → API → anon public

---

## Project Structure

```
src/
├── components/
│   ├── auth/           # ProtectedRoute, CoachRoute guards
│   ├── layout/         # Header, Footer
│   └── ui/             # shadcn/ui components
├── context/
│   └── AuthContext.tsx # Auth state (login/signup/logout + isAdmin)
├── hooks/              # use-toast, use-mobile
├── lib/
│   ├── supabaseClient.ts
│   ├── utils.ts
│   └── rules/          # Diet rule engine (coming soon)
├── pages/
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── member/         # Dashboard, Profile, LogMeals, Analyse, Results
│   └── admin/          # Dashboard, Members, Analysis, Rules
├── styles/
│   └── theme.css       # Design tokens (colors, spacing, typography)
└── types/
    └── diet.ts         # TypeScript types for all data models
supabase/
├── migrations/         # Database schema SQL
└── functions/
    └── analyze-diet/   # Gemini AI edge function (coming soon)
```

---

## Routes

| Path | Access | Description |
|------|--------|-------------|
| `/login` | Public | Sign in |
| `/signup` | Public | Create account |
| `/dashboard` | Member | Overview + stats |
| `/profile` | Member | Diet profile setup |
| `/log` | Member | Log today's meals |
| `/analyse` | Member | Trigger analysis |
| `/results/:id` | Member | View analysis results |
| `/admin` | Coach only | Review queue |
| `/admin/members` | Coach only | All members |
| `/admin/analysis/:id` | Coach only | Review one analysis |
| `/admin/rules` | Coach only | Edit rule thresholds |

---

## Database Tables

All tables live in the shared Supabase project. Run migrations from `supabase/migrations/`.

| Table | Purpose |
|-------|---------|
| `diet_profiles` | Member baseline info (age, weight, goal, restrictions) |
| `diet_logs` | Individual meal entries |
| `diet_analyses` | Rule engine + AI analysis results |
| `coach_interventions` | Coach notes, call outcomes |
| `diet_rules` | Editable rules (threshold, severity, user message) |

---

## Deployment

Pushes to `main` auto-deploy to Vercel.

```bash
git push origin main
```

**Vercel env vars to set:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

**Custom domain:** `diet.fitin.club` (GoDaddy DNS → Vercel)

---

## Fitin Platform

```
fitin.club
├── reccos.fitin.club   → Product recommendations
└── diet.fitin.club     → Diet analyser (this repo)
```

Shared Supabase project means one account works across all tools.

---

## Build Status

MVP in progress. See implementation plan for phase breakdown.

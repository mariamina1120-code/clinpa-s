# ClinPA-S Deployment Notes
*Summary of changes made during Cowork session — April 15, 2026*

## Live Deployment
- **Platform:** Vercel
- **URL:** https://clinpa-et8evo3bn-mariamina1120-5675s-projects.vercel.app
- **GitHub repo:** https://github.com/mariamina1120-code/clinpa-s
- **Branch:** main (auto-deploys on every push)

## Supabase Project
- **Project name:** clinpasdeploy
- **Project ID:** khncuygnhqjsdqmjjdyd
- **URL:** https://khncuygnhqjsdqmjjdyd.supabase.co
- All 6 database tables created (profiles, user_modules, charts, case_logs, quiz_attempts, procedure_progress)
- Auth trigger `on_auth_user_created` recreated with error handling
- Supabase Auth → URL Configuration set to Vercel URL

## Environment Variables (set in Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (test/sandbox key)
- `STRIPE_SECRET_KEY` (test/sandbox key)

## Code Changes Made
1. **`next.config.js`** — Updated `allowedOrigins` to allow Vercel domains (was localhost:3000 only)
2. **`app/case-log/page.tsx`** — Created missing page (was returning 404). Full case log UI with form to add encounters, list view, and delete functionality.

## Completed ✅
- Case log page live and working (`/case-log`)
- Sign up, email confirmation, and login all working
- Admin account (mariamina1120@gmail.com) has all 8 rotations unlocked manually via SQL
- Hard refresh (Cmd+Shift+R) required if browser shows cached old version

## Still To Do
- [ ] Set up Stripe webhook so purchases unlock rotation modules for real customers
- [ ] Switch Stripe from test keys to live keys when ready to accept real payments
- [ ] Set up custom domain (e.g. clinpa-s.com)
- [ ] Stripe webhook endpoint is at `/api/purchase` — needs `STRIPE_WEBHOOK_SECRET` env var added to Vercel

## How to Deploy Changes
Any time you make code changes, just run:
```bash
cd "/Users/mariamina/Clinical Year Resource "
git add -A
git commit -m "your message here"
git push
```
Vercel will automatically redeploy within ~2 minutes.

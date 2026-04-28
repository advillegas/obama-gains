# ObamaGains.com

> Wall Street built robots to take your money. We built one to give it back.
>
> Algorithmic trading designed for low-income Americans. Start with $5. Yes we can. **Thanks Obama.**

A satirical-but-semi-serious brand site for an algorithmic trading product targeted at the half of America that traditional fintech prices out. Built on the [StoryBrand](https://storybrand.com/) framework.

> **Heads up:** ObamaGains is a satirical concept and is not affiliated with Barack Obama, the Obama Foundation, or any U.S. government entity. The official White House portrait used on the site is a public-domain U.S. government work by Pete Souza.

## Stack

- **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack, React 19)
- **[Tailwind CSS v4](https://tailwindcss.com/)** with **OKLCH** design tokens (Nero Design System influence)
- **shadcn/ui** primitives — Button, Card, Badge, Input, Separator, Accordion
- **Radix UI** for accessible behavior
- **next-themes** (dark default), **lucide-react**, **framer-motion**, **sonner**
- TypeScript, ESLint
- Deploys to **Vercel**

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Routes

| Route            | Purpose                                                            |
| ---------------- | ------------------------------------------------------------------ |
| `/`              | StoryBrand landing — hero, problem, guide, plan, stakes, success, social proof, pricing teaser, waitlist CTA |
| `/how-it-works`  | 6-step product walkthrough                                          |
| `/pricing`       | Two-tier pricing — free below $1k, $1.99/mo above                   |
| `/faq`           | Honest answers, including "is this satire?"                          |
| `/about`         | Origin story + values                                                |
| `/disclaimer`    | Risk disclaimer + satire notice (Obama affiliation explicitly denied)|
| `/login`         | Stub — sends users to the waitlist                                   |
| `/privacy`       | Plain-English privacy policy                                         |
| `/terms`         | Plain-English terms of service                                       |

## Design system

Custom OKLCH palette inspired by [neroai-com/design](https://github.com/neroai-com/design):

- `--flag-blue` / `--flag-red` — patriotic accents
- `--gold` — primary in dark mode, "gains" highlight
- `--bull` / `--bear` — market state colors
- Plus standard shadcn tokens (background, card, primary, muted, accent, ring…)

Dark mode is the default. Background uses subtle radial gradients in flag colors plus a faint grid overlay.

## StoryBrand framework structure

The homepage is intentionally laid out around the seven StoryBrand elements:

1. **Character** — low-income Americans (the hero)
2. **Problem** — external (priced out), internal (psychic damage), philosophical (rigged system)
3. **Guide** — ObamaGains, with empathy ("we&apos;ve been there") and authority (real product)
4. **Plan** — three-step process: deposit $5 → pick a bot → live your life
5. **Call to Action** — direct (waitlist signup) and transitional ("see how it works")
6. **Failure / Stakes** — what happens if nothing changes
7. **Success / Vision** — what life looks like with a bot in your corner

## Deploy to Vercel

The fastest path:

```bash
npx vercel
# or push to GitHub and import the repo at https://vercel.com/new
```

No environment variables required for the marketing site as-is. The waitlist server action is a stub — wire it up to Vercel Postgres, Resend, Loops, or Beehiiv for production.

## Project structure

```
app/
  actions/waitlist.ts     # server action
  layout.tsx              # ThemeProvider, header, footer, sonner
  page.tsx                # StoryBrand landing
  globals.css             # OKLCH tokens + utilities
  how-it-works/, pricing/, faq/, about/, disclaimer/, login/, privacy/, terms/
components/
  ui/                     # shadcn primitives (button, card, badge, input, separator, accordion)
  site-header.tsx         # sticky nav with mobile menu
  site-footer.tsx         # links + legal disclaimer
  market-ticker.tsx       # animated marquee with satirical tickers (HOPE, CHANGE, ACA…)
  presidential-portrait.tsx  # framed photo card with "Thanks, Obama" sticker
  page-hero.tsx           # reusable inner-page hero
  waitlist-form.tsx       # email capture (uses server action)
  theme-provider.tsx
lib/
  utils.ts                # cn() helper
```

## License

This is a portfolio / brand-prototype project. Code is MIT. The Obama portrait is public domain. The brand satire is editorial commentary.

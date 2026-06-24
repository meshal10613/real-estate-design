# Realteek — Premium Real Estate Platform

A modern, pixel-perfect real estate landing page built with **Next.js 16**, **Tailwind CSS 4**, **TypeScript**, and **ShadCN UI**.

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.2.9 |
| React | 19.2.4 |
| Tailwind CSS | 4.x |
| TypeScript | 5.x |
| ShadCN UI | Latest |
| Lucide React | 1.x |
| Sonner | 2.x |
| pnpm | 8+ |

---

## Getting Started (Local Development)

### Prerequisites

- **Node.js** v20+
- **pnpm** v8+ (install via `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/real-estate-design.git
cd real-estate-design

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm run build
pnpm start
```

---

## Deploying to Vercel

This project is fully configured for **one-click Vercel deployment**.

### Option A: Deploy from Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Vercel auto-detects the framework (Next.js) and package manager (pnpm).
5. Click **Deploy** — no extra configuration needed.

> All settings are pre-configured in [`vercel.json`](./vercel.json).

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel --prod
```

---

## Project Structure

```
real-estate-design/
├── app/
│   ├── globals.css        # Global styles & Tailwind theme
│   ├── layout.tsx         # Root layout with Space Mono font
│   ├── page.tsx           # Home page
│   └── properties/
│       └── [id]/
│           └── page.tsx   # Dynamic property details page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── FeaturedGrid.tsx
│   ├── PropertyCard.tsx
│   ├── StatsSection.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── ui/                # ShadCN UI primitives
├── lib/
│   ├── properties.ts      # Centralized property data
│   └── utils.ts           # cn() utility
├── public/                # Static images
├── vercel.json            # Vercel deployment config
├── next.config.ts         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

---

## Environment Variables

No environment variables are required for the base deployment.

If you integrate a real backend or CMS in the future, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_API_URL=https://your-api.com
```

> ⚠️ Never commit `.env.local` or any secrets. These are already excluded in `.gitignore`.

---

## License

MIT © Realteek

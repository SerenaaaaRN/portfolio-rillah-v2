
This repository contains the source code for my personal portfolio, showcasing my projects, skills, academic journey, and a fully functional guestbook.

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### UI & Animations
- **Library**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Shadcn UI, Magic UI](https://ui.shadcn.com/)
- **Font**: Outfit & Space Grotesk

### Backend & Services
- **Database**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Project Structure
```
src/
├── app/               # Next.js App Router pages
├── components/        # React components
│   ├── cards/         # Reusable cards (Project, Tech, Timeline)
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Main homepage sections (Hero, About, etc.)
│   ├── shared/        # Shared UI (SectionHeader, TabSwitcher)
│   └── ui/            # Shadcn UI base components
├── data/              # Static data files (text content)
├── hooks/             # Custom React hooks (useGuestbook, etc.)
├── types/             # TypeScript type definitions
└── utils/             # Helper functions & Supabase client
``` 
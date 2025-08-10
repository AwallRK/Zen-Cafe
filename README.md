# Zen Cafe CMS Dashboard

A modern, full-stack CMS dashboard for managing a Japanese cafe menu, categories, orders, reviews, and contacts. Built with Next.js, React, MongoDB, and a rich UI component library.

---

## ✨ Features

- Modular dashboard for menu, categories, orders, reviews, contacts
- CRUD actions for all entities
- Custom category icons (emoji support)
- Authentication and protected routes
- Pagination, filtering, and tab-based navigation
- Toastify and SweetAlert2 notifications
- REST API backend with Mongoose models
- Migration and seeding scripts
- Responsive, minimalist design with Tailwind CSS
- Framer Motion animations for smooth UI transitions
- Lucide and Geist icons for a beautiful interface
- Mobile-friendly and accessible

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion, Lucide Icons, Toastify, SweetAlert2
- **Backend:** Node.js, MongoDB, Mongoose
- **UI Components:** Radix UI, Geist, Embla Carousel, Recharts
- **Other:** Zod validation, bcryptjs, dotenv, multer, emailjs-com

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- MongoDB instance

### Installation

```bash
pnpm install
```

### Environment Setup

Create a `.env` file based on `.env.example` and configure your MongoDB URI and other secrets.

### Running Locally

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
pnpm start
```

### Database Migration & Seeding

```bash
pnpm run migrate
pnpm run seed
```

---

## 📁 Folder Structure

- `app/` - Next.js app router, pages, and API routes
- `components/` - UI and dashboard components
- `models/` - Mongoose schemas
- `data/` - Seed data
- `config/` - Auth, database, email config
- `scripts/` - Migration and seeding scripts
- `public/` - Static assets
- `styles/` - Global styles
- `types/` - TypeScript types

---

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

---

## 💡 Tips & Customization

- You can easily add new categories with custom emoji icons.
- All dashboard tables support quick actions and auto-refresh after changes.
- Authentication is required for all CMS routes.
- Easily extend models and API endpoints for new features.
- The UI is fully customizable with Tailwind CSS and Radix UI primitives.

---

## 📜 License

MIT

---

> Inspired by Japanese minimalist design and modern web technologies. Enjoy building your own Zen Cafe experience!

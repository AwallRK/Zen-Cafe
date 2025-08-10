# Zen Cafe CMS Dashboard

A modern, full-stack CMS dashboard for managing a Japanese cafe menu, categories, orders, reviews, and contacts. Built with Next.js, React, MongoDB, and a rich UI component library.

---

## ✨ Features

- Stripe payment gateway integration for secure online payments
- Customer details are captured and stored with each order
- Fancy animated loading screens for menu and order pages
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

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/framer%20motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-000000?style=for-the-badge&logo=radix-ui&logoColor=white)
![Geist](https://img.shields.io/badge/geist-000000?style=for-the-badge&logo=geist&logoColor=white)
![Toastify](https://img.shields.io/badge/toastify-FF9800?style=for-the-badge&logo=react&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/sweetalert2-FF4081?style=for-the-badge&logo=sweetalert2&logoColor=white)

**Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion, Lucide Icons, Toastify, SweetAlert2
**Backend:** Node.js, MongoDB, Mongoose, Stripe
**UI Components:** Radix UI, Geist, Embla Carousel, Recharts
**Other:** Zod validation, bcryptjs, dotenv, multer, emailjs-com

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

Create a `.env` file based on `.env.example` and configure your MongoDB URI, Stripe keys, and other secrets.

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

- Stripe payment integration is ready to use—just add your keys to `.env.local`.
- Customer details are automatically saved with every order for better order management.
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

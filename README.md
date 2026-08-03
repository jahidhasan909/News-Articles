# MaxValid Frontend Internship Assignment - News & Articles Portal

A production-quality, fully responsive React web application built for the MaxValid Frontend Internship Assignment based on the Figma design.

## Features

- **Public News & Articles Portal**:
  - Glassmorphic navigation header with language switcher (EN / BN).
  - High-impact Hero banner with breadcrumb navigation.
  - Featured news card section highlighting top relief initiatives.
  - Category menu sidebar with article counts and active filters.
  - Responsive 3-column article card grid with hover animations.
  - Search bar with clear actions.
  - Dynamic page pagination control (`< 1 2 3 ... >`).
  - Full article detail view modal.

- **Admin Management Dashboard**:
  - Side navigation bar for portal management.
  - Comprehensive table listing content title, date, social share metrics, and actions.
  - Create / Edit modal with character counters, rich text style toolbar, category selection, and thumbnail previews.
  - Image upload drag-and-drop modal with local sample media picker.
  - Full CRUD operations with `localStorage` persistence.
  - One-click state reset to original mock data.

## Tech Stack

- **React 19** with Functional Components & Custom Hooks
- **Vite** for fast module bundling
- **Tailwind CSS v4** & DaisyUI for design system & styling
- **React Router v7** for single page routing
- **Lucide React & React Icons** for modern iconography

## Project Structure

```
src/
├── Components/
│   ├── Admin/
│   │   ├── AdminSidebar.jsx
│   │   ├── ArticleFormModal.jsx
│   │   └── ImageUploadModal.jsx
│   ├── HeroBanner/
│   │   └── HeroBanner.jsx
│   ├── HomeMainContent/
│   │   ├── ArticleCard.jsx
│   │   ├── ArticleGrid.jsx
│   │   ├── CategoryManu.jsx
│   │   ├── FeaturedArticle.jsx
│   │   ├── HomeMainContent.jsx
│   │   ├── Pagination.jsx
│   │   └── SearchBar.jsx
│   ├── Shared/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── UI/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Modal.jsx
├── data/
│   └── mockArticles.js
├── hooks/
│   ├── useArticles.js
│   └── useDebounce.js
├── MainLayout/
│   └── MainLayout.jsx
├── Pages/
│   ├── AdminDashboard.jsx
│   └── HomePage.jsx
└── routes/
    └── route.jsx
```

## Setup & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/jahidhasan909/News-Articles.git
   cd News-Articles
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

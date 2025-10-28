# KidsLearn - Children's Education Website

A modern, responsive React + TypeScript website for children's educational services, copied from https://kidspark-portfolio.lovable.app/

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Smooth Navigation**: Fixed header with smooth scroll to sections
- **Interactive Components**: Reviews carousel, pricing cards, contact information
- **Accessible**: Semantic HTML and ARIA labels throughout

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Mulish, Playfair Display, Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mikhi/classes-for-kids.git
cd classes-for-kids
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
classes-for-kids/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Fixed navigation header
│   │   ├── Hero.tsx            # Hero section with Russian heading
│   │   ├── OurApproach.tsx     # Three pillars section
│   │   ├── WhatWeOffer.tsx     # Services list
│   │   ├── LessonFormats.tsx   # In-person vs Online
│   │   ├── Reviews.tsx         # Testimonials carousel
│   │   ├── Pricing.tsx         # Pricing plans (group & individual)
│   │   ├── TeacherBio.tsx      # Teacher profile
│   │   ├── Contact.tsx         # Contact information
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Card.tsx            # Reusable card component
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles & Tailwind
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Key Sections

1. **Hero**: Russian heading "Нескучные занятия для детей от 5 до 9 лет" with CTAs
2. **Our Approach**: Three core principles (Through a Game, With Care, With Result)
3. **What We Offer**: List of educational services
4. **Lesson Formats**: In-person vs Online comparison
5. **Reviews**: Carousel of parent testimonials
6. **Pricing**: Group and individual class pricing plans
7. **Teacher Bio**: Profile of Jane Anderson with qualifications
8. **Contact**: Phone, email, and office address

## Color Scheme

- **Primary**: Orange (#EA580C)
- **Secondary**: Warm cream/beige
- **Background**: White
- **Text**: Dark brown (#2F241D)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## License

ISC

## Acknowledgments

- Original design: https://kidspark-portfolio.lovable.app/
- Built as a portfolio copy using modern web technologies

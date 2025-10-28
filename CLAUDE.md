# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + TypeScript single-page website for a children's education service ("KidsLearn"), cloned from https://kidspark-portfolio.lovable.app/. The site features Russian language content with a focus on engaging, game-based learning for children ages 5-9.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Note: Tests are not currently configured (package.json test script exits with error).

## Tech Stack & Configuration

- **React 19** with TypeScript (strict mode enabled)
- **Vite 7** as build tool
- **Tailwind CSS 4** for styling
- **Path alias**: `@/` maps to `./src/` (configured in both tsconfig.json and vite.config.ts)
- **TypeScript**: Strict mode with noUnusedLocals, noUnusedParameters, and noFallthroughCasesInSwitch

## Architecture

### Single-Page Layout

The app follows a simple single-page architecture where App.tsx renders all sections sequentially:

1. Header (fixed navigation)
2. Hero (Russian heading: "Нескучные занятия для детей от 5 до 9 лет")
3. OurApproach (three core principles)
4. WhatWeOffer (educational services list)
5. LessonFormats (in-person vs online comparison)
6. Reviews (testimonials carousel)
7. Pricing (group and individual plans)
8. TeacherBio (instructor profile)
9. Contact (phone, email, address)
10. Footer

All sections are imported and rendered in App.tsx without routing.

### Component Patterns

**Reusable UI Components** (Button.tsx, Card.tsx):
- Built with React.forwardRef for proper ref forwarding
- Accept variant/size props for styling flexibility
- Use the `cn()` utility for conditional className merging
- Extend native HTML element props for full DOM attribute support

**Section Components**:
- Self-contained with their own styling and content
- No props typically needed (content is hardcoded)
- Each represents a major page section

### Utilities

`src/lib/utils.ts` exports the `cn()` function which combines clsx and tailwind-merge for optimal className handling. Use this whenever conditional or merged Tailwind classes are needed.

## Styling System

### Custom Theme Extensions (tailwind.config.js)

**Colors**:
- Primary: `#FF6628` (orange - main brand color)
- Secondary: warm cream/beige (`hsl(40 100% 97%)`)
- Foreground: dark brown (`hsl(26 24% 15%)`)

**Fonts**:
- Sans: Poppins, Mulish (via Google Fonts)
- Serif: Playfair Display
- Heading: Mulish
- Pacifico: Used for decorative/handwritten style text

**Custom Shadows**:
- `shadow-medium`: Subtle elevation
- `shadow-strong`: Pronounced elevation

### Font Loading

Fonts are loaded from Google Fonts (check index.html for links). When adding new text, use appropriate font families from the configured stack.

## Key Considerations

- **Russian Language**: Hero section and potentially other content uses Russian text. Preserve Cyrillic characters carefully when editing.
- **Responsive Design**: Mobile-first approach. Test changes across breakpoints (mobile < 768px, tablet 768-1024px, desktop > 1024px).
- **Image Assets**: Space illustration and other visual elements should maintain the playful, child-friendly aesthetic.
- **TypeScript**: All component files use `.tsx` extension. Maintain type safety and avoid `any` types.
- **Import Paths**: Use `@/` alias for cleaner imports (e.g., `import { cn } from "@/lib/utils"`).

## Adding New Components

When creating new components:
1. Place in `src/components/` directory
2. Use React.forwardRef if the component wraps a DOM element that might need ref access
3. Extend appropriate HTML element props for full attribute support
4. Use `cn()` utility for className merging
5. Export with a display name for better debugging

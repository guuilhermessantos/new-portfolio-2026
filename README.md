# Modern Professional Portfolio

A cutting-edge portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features **truly responsive design** with separate mobile and desktop layouts.

## 🎯 Key Features

### Mobile-First Architecture
- ✅ **Separate layouts** for mobile and desktop (not just responsive CSS)
- ✅ **Bottom Navigation** on mobile for easy thumb access
- ✅ **Fixed Sidebar** on desktop with profile information
- ✅ **Tab-based navigation** on mobile to eliminate scrolling
- ✅ **Horizontal scrolling metrics** on mobile, grid on desktop
- ✅ **Large project cards** optimized for touch on mobile

### Responsive Breakpoints
- **Mobile**: < 1024px (single column, bottom nav, tab-based)
- **Desktop**: ≥ 1024px (multi-column, sidebar, scrollable)

### Sections
1. **Hero** - Eye-catching introduction with CTA
2. **Metrics** - Quick stats showcase
3. **About** - Personal information and values
4. **Projects** - Featured work with live demos
5. **Skills** - Technology expertise with progress bars
6. **Contact** - Contact form and social links

### Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📱 Responsive Design Philosophy

This portfolio follows a **mobile-first, layout-first** approach:

### Mobile Experience
- One section visible at a time (tab-based)
- Bottom navigation for easy access
- Horizontal swiping for metrics
- Large touch targets (min 44x44px)
- No sidebar clutter
- Optimized for one-handed use

### Desktop Experience
- All sections on one scrollable page
- Fixed sidebar with profile and navigation
- Grid-based metrics display
- Multi-column project layout
- Hover effects and rich animations
- More whitespace and breathing room

## 🎨 Customization

### Colors
Edit the accent colors in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    500: "#0ea5e9",  // Your brand color
    // ...
  },
}
```

### Content
Update the content in each section component:
- `components/sections/Hero*.tsx` - Main introduction
- `components/sections/About*.tsx` - Personal info
- `components/sections/Projects*.tsx` - Your projects
- `components/sections/Skills*.tsx` - Your skills
- `components/sections/Contact*.tsx` - Contact information

### Personal Information
Update in:
- `components/navigation/MobileHeader.tsx`
- `components/navigation/Sidebar.tsx`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (switches between layouts)
│   └── globals.css         # Global styles
├── components/
│   ├── layouts/
│   │   ├── MobileLayout.tsx    # Mobile-specific layout
│   │   └── DesktopLayout.tsx   # Desktop-specific layout
│   ├── navigation/
│   │   ├── MobileHeader.tsx    # Mobile header
│   │   ├── BottomNavigation.tsx # Mobile bottom nav
│   │   └── Sidebar.tsx         # Desktop sidebar
│   └── sections/
│       ├── Hero*.tsx
│       ├── About*.tsx
│       ├── Projects*.tsx
│       ├── Skills*.tsx
│       ├── Metrics*.tsx
│       └── Contact*.tsx
└── tailwind.config.ts
```

## 🎯 Design Principles

1. **Mobile-first**: Mobile layout is designed first, not adapted
2. **Touch-friendly**: All interactive elements are easy to tap
3. **Performance**: Optimized animations, lazy loading
4. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
5. **Modern**: Clean, minimalist design inspired by Stripe and Notion

## 📦 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Built with modern web technologies and best practices in responsive design.

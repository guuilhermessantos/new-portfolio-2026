# 🎨 Design Guide

## Design System Overview

Este portfólio segue princípios de design modernos inspirados em Stripe e Notion.

## 🎯 Design Principles

### 1. Clean & Minimal
- Uso generoso de whitespace
- Foco no conteúdo
- Hierarquia visual clara
- Sem elementos desnecessários

### 2. Mobile-First
- Layout pensado para mobile primeiro
- Navegação com o polegar
- Touch targets de 44x44px mínimo
- Sem scroll horizontal indesejado

### 3. Professional
- Paleta de cores sóbria
- Tipografia clara e legível
- Animações sutis e com propósito
- Consistência visual

## 🎨 Color System

### Dark Theme (Padrão)
```css
Background: #000000 (Black)
Surface: rgba(255, 255, 255, 0.05) (White with 5% opacity)
Border: rgba(255, 255, 255, 0.1) (White with 10% opacity)
Text Primary: #FFFFFF (White)
Text Secondary: #9CA3AF (Gray-400)
```

### Accent Color
```css
Accent 400: #38bdf8 (Lighter)
Accent 500: #0ea5e9 (Primary)
Accent 600: #0284c7 (Darker)
Accent 700: #0369a1 (Darkest)
```

### Gradients
```css
Primary Gradient: from-accent-500 to-accent-600
Surface Gradient: from-accent-500/20 to-accent-700/20
```

## 📏 Spacing System

### Tailwind Spacing Scale
```
px-4  = 16px (Mobile padding)
px-6  = 24px (Mobile section padding)
px-8  = 32px (Desktop padding)
py-12 = 48px (Section vertical spacing)
gap-4 = 16px (Small gap)
gap-6 = 24px (Medium gap)
gap-8 = 32px (Large gap)
```

## 🔤 Typography

### Font Family
```css
font-family: Inter, system-ui, sans-serif
```

### Font Sizes
```css
text-xs   = 12px  (Labels, badges)
text-sm   = 14px  (Secondary text)
text-base = 16px  (Body text)
text-lg   = 18px  (Large body)
text-xl   = 20px  (Subheadings mobile)
text-2xl  = 24px  (Headings mobile)
text-3xl  = 30px  (Titles mobile)
text-4xl  = 36px  (Hero mobile)
text-5xl  = 48px  (Headings desktop)
text-6xl  = 60px  (Hero desktop)
```

### Font Weights
```css
font-medium   = 500 (Labels, buttons)
font-semibold = 600 (Subheadings)
font-bold     = 700 (Headings)
```

## 📐 Layout Grid

### Mobile (< 1024px)
```
Layout: Single column
Padding: px-6 (24px)
Max Width: 100%
Cards: Full width
```

### Desktop (≥ 1024px)
```
Layout: Sidebar (288px) + Content
Content Max Width: 1152px (6xl)
Padding: px-8 (32px)
Cards: Grid (2-3 columns)
```

## 🎭 Components

### Cards
```css
Background: bg-white/5
Border: border border-white/10
Border Radius: rounded-2xl (16px)
Padding: p-6 (24px)
Hover: border-accent-500/50
```

### Buttons

#### Primary Button
```css
Background: bg-gradient-to-r from-accent-500 to-accent-600
Text: text-white
Padding: py-3 px-6 (mobile), py-4 px-8 (desktop)
Border Radius: rounded-xl (12px)
Shadow: shadow-lg shadow-accent-500/25
Hover: shadow-accent-500/40
```

#### Secondary Button
```css
Background: bg-white/5
Border: border border-white/10
Text: text-white
Padding: py-3 px-6
Border Radius: rounded-xl
Hover: bg-white/10
```

### Inputs
```css
Background: bg-white/5
Border: border border-white/10
Padding: px-4 py-3
Border Radius: rounded-xl
Focus: border-accent-500
```

### Badges/Tags
```css
Background: bg-accent-500/10
Border: border border-accent-500/20
Text: text-accent-500
Padding: px-3 py-1
Border Radius: rounded-full
Font Size: text-xs or text-sm
```

## ✨ Animations

### Principles
1. **Purpose**: Animações devem ter um propósito
2. **Performance**: Sempre 60fps
3. **Duration**: 0.3s-0.6s para transições
4. **Easing**: ease-out para entradas, ease-in-out para loops

### Common Animations

#### Fade In
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

#### Slide Up
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

#### Hover Scale
```typescript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Mobile Animations
- Mais leves e rápidas
- Menos elementos animados
- Foco em performance

### Desktop Animations
- Mais complexas e ricas
- Hover effects
- Parallax e scroll effects

## 📱 Responsive Patterns

### Hide/Show
```jsx
// Mostrar apenas no mobile
<div className="block lg:hidden">Mobile Content</div>

// Mostrar apenas no desktop
<div className="hidden lg:block">Desktop Content</div>
```

### Layout Changes
```jsx
// Single column mobile, 2 columns desktop
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
```

### Spacing Adjustments
```jsx
// Menor padding mobile, maior desktop
<div className="px-6 lg:px-8 py-12 lg:py-16">
```

## 🎯 Touch Targets (Mobile)

### Minimum Sizes
- Buttons: 44x44px mínimo
- Bottom nav items: 48px altura
- Cards: Altura mínima confortável
- Inputs: 48px altura mínimo

### Spacing
- Mínimo 8px entre elementos tocáveis
- 12px preferencial para melhor UX

## 🌟 Icons

### Lucide React
```tsx
import { Icon } from "lucide-react";

// Mobile: 18-20px
<Icon size={20} />

// Desktop: 20-24px
<Icon size={24} />
```

## 📊 Metrics Display

### Mobile
- Horizontal scroll (swipe)
- Cards: 280px largura mínima
- Snap scroll: snap-x snap-mandatory
- Hide scrollbar

### Desktop
- Grid fixo: grid-cols-4
- Hover effects
- Stationary display

## 🎨 Custom Gradients

### Background Decorations
```css
bg-accent-500/5 blur-3xl
bg-accent-600/5 blur-3xl
```

### Card Backgrounds
```css
bg-gradient-to-br from-accent-500/20 to-accent-700/20
```

### Text Gradients
```css
text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600
```

## ✅ Accessibility

### Required
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast (WCAG AA)
- Touch targets 44x44px+

### Focus States
```css
focus:border-accent-500
focus:outline-none
focus:ring-2
focus:ring-accent-500
```

## 🎬 Animation Performance

### Best Practices
1. Animate transform and opacity only
2. Use will-change sparingly
3. Avoid animating width/height
4. Use GPU acceleration
5. Reduce motion on mobile

### GPU Accelerated Properties
- transform
- opacity
- filter

---

**Design Token Summary:**
- Colors: Black bg, white text, accent-500 highlights
- Spacing: 4px base scale (4, 8, 12, 16, 24, 32...)
- Border Radius: 8px, 12px, 16px, 24px
- Shadows: Subtle with accent color tint
- Typography: Inter font, clear hierarchy
- Animations: Purposeful, performant, 0.3-0.6s




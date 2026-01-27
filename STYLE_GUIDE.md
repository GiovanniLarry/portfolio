# Portfolio Website - Design System & Style Guide

## 🎨 Color Palette

### Primary Colors
- **Primary Background**: `#0a0a0f` - Deep dark base
- **Secondary Background**: `#0f0f1a` - Slightly lighter dark
- **Tertiary Background**: `#151520` - Card backgrounds

### Accent Colors
- **Primary Accent**: `#6366f1` (Indigo) - Main brand color
- **Secondary Accent**: `#8b5cf6` (Purple) - Secondary brand color
- **Tertiary Accent**: `#ec4899` (Pink) - Highlights
- **Neon Accent**: `#00f5ff` (Cyan) - Special effects

### Text Colors
- **Primary Text**: `#ffffff` - Main content
- **Secondary Text**: `#a0a0b0` - Body text
- **Tertiary Text**: `#6b6b7a` - Muted text

### Glassmorphism
- **Glass Background**: `rgba(255, 255, 255, 0.05)` - Translucent white
- **Glass Border**: `rgba(255, 255, 255, 0.1)` - Subtle borders
- **Glass Shadow**: `rgba(0, 0, 0, 0.3)` - Depth shadows

## 📝 Typography

### Font Families
- **Primary Font**: `Inter` - Body text, UI elements
- **Display Font**: `Space Grotesk` - Headings, titles

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700
- Extra-bold: 800

### Type Scale
- **Hero Title**: `clamp(3rem, 8vw, 6rem)` - Responsive large
- **Section Title**: `clamp(2.5rem, 5vw, 4rem)` - Section headings
- **Card Title**: `1.5rem` - Card headings
- **Body Text**: `1rem - 1.125rem` - Paragraphs
- **Small Text**: `0.875rem - 0.9rem` - Labels, captions

## 🎭 Design Principles

### Glassmorphism
- Translucent backgrounds with backdrop blur
- Subtle borders for definition
- Layered depth with shadows
- Used in: Cards, navigation, modals

### 3D & Motion
- Smooth animations with easing curves
- 3D transforms on hover
- Parallax effects on scroll
- Floating elements in hero section

### Spacing System
- **XS**: `0.5rem` (8px)
- **SM**: `1rem` (16px)
- **MD**: `2rem` (32px)
- **LG**: `4rem` (64px)
- **XL**: `6rem` (96px)

### Border Radius
- **Small**: `10px` - Buttons, inputs
- **Medium**: `15px` - Cards
- **Large**: `20px` - Large cards, containers
- **Pill**: `50px` - Badges, buttons

## 🎬 Animation Guidelines

### Easing Functions
- **Smooth**: `[0.6, -0.05, 0.01, 0.99]` - Natural motion
- **Spring**: `{ type: 'spring', stiffness: 300 }` - Bouncy interactions
- **Ease In Out**: `easeInOut` - Standard transitions

### Animation Durations
- **Fast**: `0.3s` - Hover states, quick transitions
- **Medium**: `0.6s` - Section reveals
- **Slow**: `1s` - Complex animations

### Hover Effects
- **Scale**: `1.05` - Slight growth
- **Translate Y**: `-10px` - Lift effect
- **Glow**: Enhanced shadow with accent color
- **Border**: Color change to accent

## 🧩 Component Descriptions

### Hero Section
- **3D Canvas**: Floating geometric shapes using Three.js
- **Animated Text**: Staggered reveal with gradient text
- **Call-to-Action**: Primary and secondary buttons
- **Scroll Indicator**: Animated arrow with gradient line

### About Section
- **Stats Grid**: Three-column layout with animated numbers
- **Image Placeholder**: Glassmorphic container for photo
- **Gradient Glow**: Pulsing background effect

### Skills Section
- **Skill Cards**: Grid layout with animated progress bars
- **Icon Display**: Emoji icons with glow effects
- **Progress Animation**: Width animation on scroll into view

### Projects Section
- **Project Cards**: Grid with hover 3D transforms
- **Gradient Backgrounds**: Unique gradient per project
- **Tag System**: Technology stack indicators
- **Hover Effects**: Lift and scale on interaction

### Experience Section
- **Timeline Layout**: Vertical timeline with markers
- **Experience Cards**: Glassmorphic cards with achievements
- **Animated Reveal**: Slide in from left on scroll

### Testimonials Section
- **Testimonial Cards**: 3D card effect with rotation
- **Rating Display**: Star ratings with glow
- **Author Info**: Avatar and role display

### Contact Section
- **Two-Column Layout**: Info card and form
- **Social Links**: Animated icon links
- **Form Inputs**: Glassmorphic inputs with focus states
- **Submit Button**: Primary button with glow effect

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column, stacked layout
- **Tablet**: `768px - 968px` - Two columns, adjusted spacing
- **Desktop**: `> 968px` - Full multi-column layout

## ✨ Special Effects

### Neon Glow
```css
.neon-glow {
  text-shadow: 0 0 10px var(--accent-neon), 
               0 0 20px var(--accent-neon), 
               0 0 30px var(--accent-neon);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, 
    var(--accent-primary), 
    var(--accent-secondary), 
    var(--accent-tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Glass Effect
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-lg);
}
```

## 🎯 Best Practices

1. **Performance**: Use `will-change` sparingly, prefer transforms
2. **Accessibility**: Maintain contrast ratios, keyboard navigation
3. **Animation**: Respect `prefers-reduced-motion`
4. **Loading**: Use Suspense for 3D components
5. **SEO**: Semantic HTML, proper meta tags

## 🚀 Recommended Animations

### Scroll Animations
- Fade in on scroll (using Intersection Observer)
- Stagger children for sequential reveals
- Parallax effects for depth

### Hover Animations
- Scale transforms (1.05x)
- Translate Y for lift effect
- Color transitions
- Glow effects

### 3D Effects
- Rotating shapes in hero
- Card rotations on hover
- Perspective transforms

### Micro-interactions
- Button press feedback
- Input focus states
- Link hover underlines
- Icon animations

## 📦 Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll animations

## 🎨 Customization Guide

### Changing Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
}
```

### Adding Sections
1. Create component in `src/components/`
2. Add CSS file with component styles
3. Import and add to `App.tsx`
4. Update navigation in `Navbar.tsx`

### Modifying Animations
Adjust Framer Motion variants in component files:
```tsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}
```

---

**Note**: This is a living document. Update as the design system evolves.


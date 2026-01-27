# 🚀 Quick Start Guide

## Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The portfolio should be running!

## 🎨 Quick Customization

### 1. Update Personal Information

**Contact Information** (`src/components/Contact.tsx`):
```tsx
// Update these values:
- Email: your.email@example.com
- Phone: +1 (555) 123-4567
- Location: Your City, Country
```

**Social Links** (`src/components/Contact.tsx`):
```tsx
const socialLinks = [
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', icon: '💻', url: 'https://github.com/yourusername' },
  // ... add more
]
```

### 2. Add Your Projects

**Edit Projects** (`src/components/Projects.tsx`):
```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['React', 'TypeScript'],
    image: '🎨', // or use an image URL
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  // Add more projects...
]
```

### 3. Update Experience

**Edit Experience** (`src/components/Experience.tsx`):
```tsx
const experiences = [
  {
    id: 1,
    role: 'Your Role',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Your job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // Add more experiences...
]
```

### 4. Customize Skills

**Edit Skills** (`src/components/Skills.tsx`):
```tsx
const skills = [
  { name: 'Your Skill', level: 95, icon: '⚛️' },
  // Add more skills...
]
```

### 5. Update About Section

**Edit About** (`src/components/About.tsx`):
- Update the description paragraphs
- Modify statistics (projects, years, satisfaction)
- Replace image placeholder with your photo

### 6. Change Colors

**Edit Colors** (`src/index.css`):
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
  --accent-tertiary: #your-color;
}
```

### 7. Update Hero Section

**Edit Hero** (`src/components/Hero.tsx`):
- Change the badge text
- Update the main title
- Modify the description
- Update button text and links

## 📸 Adding Images

### Option 1: Use Image URLs
```tsx
<img src="https://your-image-url.com/image.jpg" alt="Description" />
```

### Option 2: Local Images
1. Create `public/images/` folder
2. Add your images
3. Reference: `<img src="/images/your-image.jpg" alt="Description" />`

## 🎯 Next Steps

1. ✅ Customize all content sections
2. ✅ Add your real projects and experience
3. ✅ Update contact information
4. ✅ Add your professional photo
5. ✅ Test on mobile devices
6. ✅ Deploy to production

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder to Netlify

### GitHub Pages
See README.md for detailed instructions

## 💡 Tips

- **Performance**: Optimize images before adding
- **SEO**: Update meta tags in `index.html`
- **Analytics**: Add Google Analytics or similar
- **Domain**: Connect your custom domain after deployment

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Change port in vite.config.ts
server: { port: 3001 }
```

**3D elements not showing?**
- Check browser console for errors
- Ensure Three.js dependencies are installed
- Try disabling hardware acceleration

**Styles not applying?**
- Clear browser cache
- Restart dev server
- Check CSS import paths

---

**Need help?** Check the full documentation in `README.md` and `STYLE_GUIDE.md`


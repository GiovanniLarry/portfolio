# 🚀 Portfolio Website - Touani Giovanni Larry

A highly professional, modern portfolio website for Touani Giovanni Larry - Full Stack Developer & AI Enthusiast from Cameroon. Features stunning 3D and 4D motion effects, glassmorphism, and premium design aesthetics.

## ✨ Features

- **3D Interactive Elements**: Floating shapes and animated 3D objects using Three.js
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Glassmorphism Design**: Modern translucent UI elements with backdrop blur
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Premium Color Palette**: Carefully curated colors with neon highlights
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Testimonials, Contact

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Smooth animations
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personalize Your Portfolio

1. **Update Content**
   - Edit component files in `src/components/` to update text, projects, and experience
   - Replace placeholder images and icons
   - Update contact information in `Contact.tsx`

2. **Modify Colors**
   - Edit CSS variables in `src/index.css`
   - Adjust accent colors, backgrounds, and text colors

3. **Add Your Photo**
   - Replace the placeholder in `About.tsx` with your professional photo
   - Update the image path or use an external URL

4. **Customize Projects**
   - Edit the `projects` array in `Projects.tsx`
   - Add your own project details, tags, and links

5. **Update Experience**
   - Modify the `experiences` array in `Experience.tsx`
   - Add your work history and achievements

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   └── FloatingShapes.tsx
│   │   ├── About.tsx
│   │   ├── BackgroundEffects.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Components

### Hero Section
- Animated 3D background with floating shapes
- Gradient text effects
- Smooth scroll indicator
- Call-to-action buttons

### About Section
- Statistics display
- Image placeholder with glow effect
- Responsive grid layout

### Skills Section
- Animated progress bars
- Icon-based skill display
- Hover effects with scale transforms

### Projects Section
- Grid layout with project cards
- Gradient backgrounds
- Technology tags
- Interactive hover states

### Experience Section
- Timeline layout
- Achievement lists
- Glassmorphic cards

### Testimonials Section
- 3D card effects
- Star ratings
- Author information

### Contact Section
- Contact form
- Social media links
- Information display

## 🎨 Design System

See [STYLE_GUIDE.md](./STYLE_GUIDE.md) for detailed design system documentation including:
- Color palette
- Typography
- Spacing system
- Animation guidelines
- Component descriptions

## 🚀 Deployment

### GitHub Pages (Recommended)

Your portfolio is configured for automatic deployment to GitHub Pages!

**Quick Setup:**
1. Create a GitHub repository
2. Push your code to the `main` branch
3. Enable GitHub Pages in repository Settings
4. Enable GitHub Actions in Settings → Actions → General
5. Your site will deploy automatically!

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.**

Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

### Alternative Deployment Options

**Vercel:**
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

**Netlify:**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue or contact through the portfolio contact form.

---

**Built with ❤️ using React, Three.js, and modern web technologies**


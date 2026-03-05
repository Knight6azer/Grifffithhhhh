# Personal Portfolio Site — Ujjwal Suneel Tiwari

A modern, immersive 3D portfolio website built with **React**, **Vite**, **TypeScript**, and **Three.js** via React Three Fiber.

[![Live Preview](https://img.shields.io/badge/Live-Preview-64ffda?style=flat-square)](https://github.com/Knight6azer/Personal-Portfolio-Site)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r3f-white?style=flat-square&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ 3D Features

| Feature | Technology |
|---|---|
| Animated particle starfield (Hero background) | React Three Fiber · Three.js `Points` |
| Floating wireframe icosahedron + torus knot | R3F `Float` · `MeshStandardMaterial` |
| Interactive skills globe | R3F `Html` · Fibonacci sphere distribution |
| Mouse-reactive 3D card tilt | CSS `perspective` + JS pointer tracking |
| Animated gradient timeline | Framer Motion `scaleY` |
| Scroll-aware active nav highlighting | Intersection offset scroll handler |

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 5
- **Language**: TypeScript 5
- **3D Engine**: Three.js · @react-three/fiber · @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS 3 · Custom CSS (glassmorphism, neon glow)
- **UI Primitives**: Radix UI via shadcn/ui
- **Icons**: Lucide React
- **Build**: Vite + SWC

---

## 📁 Project Structure

```
src/
├── components/
│   ├── three/              # WebGL 3D components
│   │   ├── ParticleField.tsx   # Animated particle starfield
│   │   ├── FloatingGeometry.tsx # Rotating wireframe shapes
│   │   └── SkillsGlobe.tsx     # Interactive skills globe
│   ├── Hero.tsx            # Full-screen 3D canvas hero
│   ├── Navbar.tsx          # Scroll-aware + mobile menu
│   ├── About.tsx           # 3D tilt highlight cards
│   ├── Skills.tsx          # Skills globe + category badges
│   ├── Projects.tsx        # 3D tilt project cards
│   ├── Experience.tsx      # Animated timeline
│   ├── Education.tsx       # Accent-border edu cards
│   ├── Certifications.tsx  # Staggered cert cards with glow
│   ├── Contact.tsx         # Contact form + social links
│   └── Footer.tsx          # Gradient footer
├── pages/
│   └── Index.tsx
├── index.css               # Design system + 3D utilities
└── main.tsx
public/
├── Resume_UT.pdf
└── certificates/           # Certificate PDFs
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Sections

1. **Hero** — Full-screen 3D WebGL background with particle field and floating geometry
2. **About** — Bio with mouse-reactive 3D tilt cards
3. **Skills** — Interactive 3D globe + categorized tech stack
4. **Projects** — Featured and grid projects with 3D depth cards
5. **Experience** — Animated vertical timeline of internships
6. **Education** — Academic cards with accent borders and glow
7. **Certifications** — Achievement cards from Infosys, Coursera, Simplilearn, Edunet
8. **Contact** — Contact form + social links

---

## 👤 About Ujjwal

Aspiring Data Scientist & Electronics Engineer — Mumbai, India  
B.E. Electronics & Computer Science @ Shree L.R. Tiwari College of Engineering (2023–2027)  
Co-Head, R&D Cell · Python · ML · Embedded Systems

- **Email**: tiwari.ujjwal10c27@gmail.com

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

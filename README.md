# UTTAM M — Portfolio

![React](https://img.shields.io/badge/React-18-00ff41?style=flat&logo=react&logoColor=00ff41&labelColor=020a06) ![Vite](https://img.shields.io/badge/Vite-5-00ff41?style=flat&logo=vite&logoColor=00ff41&labelColor=020a06)

> Military/surveillance HUD aesthetic portfolio — inspired by killianherzer.com

## SUBJECT PROFILE

**Uttam M** | B.Tech Electrical & Electronics Engineering  
ASE, Coimbatore · Amrita Vishwa Vidyapeetham · 2026

## FEATURES

- Animated INITIALIZING preloader with terminal typing + progress bar
- Full-screen scanline + vignette CRT overlay
- Live HUD corners: clock, coordinates, CAM REC indicator, mouse position
- Glitch effect on hero name
- Typewriter hero subtitle
- Horizontal drag-to-scroll EVIDENCE BOARD (projects)
- Click-to-decrypt project modal overlay
- SUBJECT PROFILE with identity card, experience, education, skills, certifications
- Terminal-style contact form
- Custom dot + ring cursor
- Fully responsive

## STRUCTURE

```
src/
├── components/
│   ├── Cursor.jsx / .css       # Custom animated cursor
│   ├── Loader.jsx / .css       # INITIALIZING sequence
│   ├── HUD.jsx / .css          # Persistent corner overlays
│   ├── Navbar.jsx / .css       # Navigation
│   ├── Hero.jsx / .css         # Landing with typewriter + dossier card
│   ├── Projects.jsx / .css     # Horizontal EVIDENCE BOARD
│   ├── Profile.jsx / .css      # SUBJECT PROFILE case file
│   ├── Contact.jsx / .css      # Terminal contact form
│   └── Footer.jsx / .css       # Footer
├── App.jsx
├── main.jsx
└── index.css                   # Global styles, scanlines, CRT, glitch
```

## GETTING STARTED

```bash
git clone https://github.com/uttam2811/Port-folio.git
cd Port-folio
npm install
npm run dev
```

Open http://localhost:5173

## DEPLOY ON VERCEL

1. Go to vercel.com → New Project
2. Import uttam2811/Port-folio
3. Framework preset: Vite
4. Deploy → live at uttam2811.vercel.app

## CONTACT

uttamkrishnan3578@gmail.com

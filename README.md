<div align="center">
  <img src="public/favicon.svg" alt="SkyMart Logo" width="90" style="border-radius: 18px; padding: 12px; background: rgba(200,244,0,0.1); margin-bottom: 20px;" />
  
  <h1 align="center">SkyMart</h1>
  
  <p align="center">
    <strong>A high-performance, modern e-commerce interface built from the ground up.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/ES2026-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <h3>
    <a href="https://sky-mart-tau-black.vercel.app/">🚀 View Live Demo</a>
  </h3>
</div>

<br />

Hi! 👋 Welcome to the repository for **SkyMart**.

I built this project to challenge myself. Instead of following a step-by-step tutorial, I wanted to dive into the absolute latest frontend ecosystem and figure things out on my own. My primary goal was to build a UI that doesn't just look pretty, but is actually structurally sound, accessible, and fast.

I focused heavily on keeping the codebase clean, dropping unnecessary dependencies, and writing modern, efficient JavaScript (ES2026).

---

## ✨ What Makes This Project Special?

### 🎨 Pixel-Perfect UI & Fluid Responsiveness
- Designed using the brand-new **Tailwind CSS v4** (leveraging the new CSS-first engine).
- Instead of rigid breakpoints, the app uses **fluid typography** (`clamp()`) and fluid spacing. It scales flawlessly from a tiny smartphone screen to a massive ultrawide monitor without breaking the layout.
- Added deliberate micro-interactions, spring animations, and frosted glass effects (backdrop blurs) to make the interface feel premium and alive.

### ⚡ Extreme Performance Focus
- Completely migrated to **React 19.2.8** to utilize the native React compiler and native hooks.
- **Zero Third-Party Bloat for SEO:** Handled metadata natively via React 19's tag hoisting instead of relying on heavy packages like `react-helmet`.
- Powered by **Vite 8 (Rolldown)**, featuring optimized code-splitting so the browser only loads exactly what is needed for the initial render.
- Images are lazy-loaded, and heavy state updates are deferred to ensure the Interaction to Next Paint (INP) stays in the green.

### 🧹 Obsessive Code Hygiene
- **100% Pure JSX:** No unused files, no lingering dead code, and zero duplicated logic. 
- Strict architectural separation between UI components, global context state, and mock data APIs.

---

## 🛠️ The Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core** | HTML5, Modern JavaScript (ES2026) |
| **Framework** | React 19 (Hooks, Context API, Suspense) |
| **Styling** | Tailwind CSS v4.3.3 |
| **Bundler** | Vite 8.2.0 |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |

---

## 👨‍💻 A Quick Note for Recruiters

I am a B.Tech CSE student (Class of 2026) with a deep passion for frontend engineering and product design. 

I built SkyMart to demonstrate that I can independently pick up cutting-edge documentation (like the newly released React 19 and Tailwind v4) and build production-grade interfaces with them. I care immensely about code cleanliness, edge cases, and the final user experience.

I am actively looking for frontend internship/full-time opportunities where I can contribute to a real product, learn from experienced engineers, and write code that makes an impact. If my work aligns with what you're looking for, I would love to connect!

---

## 🚀 Run It Locally

If you'd like to explore the code on your own machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/skymart.git
   cd skymart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---
*Designed and built with passion.* 

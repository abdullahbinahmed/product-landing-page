Here is your complete, ready-to-use README.md file. It explicitly details the exact dev and build run commands as requested:
Markdown

# 🎨 Product Landing Page (Frontend)

A clean, responsive, and minimalist product landing page for **Himiway EBikes**—built with React, TypeScript, and Vite. This interface demonstrates clean visual hierarchy, semantic HTML elements, and fluid layouts across desktop, tablet, and mobile device viewports.

---

## ✨ Design & Layout Features
* **Semantic HTML:** Constructed using structural elements (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure optimal SEO and web accessibility.
* **Responsive Architecture:** Employs CSS Flexbox, CSS Grid systems, and media queries to achieve fluid responsiveness from wide screens down to small mobile devices.
* **React Icons Integration:** Employs lightweight, accessible vector graphics using `react-icons`.
* **TypeScript Integrity:** Fully typed layouts and components to prevent runtime errors.

---

## 📂 Page Structure
* **Header with Product Hero and Image:** Features a sticky navigation bar displaying the product name prominently alongside a responsive call-to-action (CTA). Presents a representative overview layout pairing a catchy value proposition with a clean product illustration/mockup.
* **Key Features Grid:** A 3-column responsive card layout (`CSS Grid`) highlighting at least three key capabilities.
* **Product Description:** A concise description outlining the core utility of Himiway EBikes.
* **Footer:** Semantic bottom layout displaying basic contact information and essential links.

---

## ⚙️ Setup, Dev & Run Instructions

Follow these quick steps to launch the frontend web application locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Install Dependencies
Run this command in your terminal within this directory to install the packages defined in the `package.json`:
```bash
npm install
```
### 2. Run the Development Server (Dev Command)
Start the local development server with hot module replacement (HMR) enabled:
```bash
npm run dev
```
### 3. Build for Production (Build Command)
To test the build process or compile the project into optimized, production-ready assets:
```bash
npm run build
```
### 4. Preview the Production Build (Preview Command)
To run and preview the production build locally before deploying:
```bash
npm run preview
```
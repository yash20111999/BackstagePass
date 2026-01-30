# BackstagePass UI – Frontend Assignment

This project is a UI-focused implementation of a BackstagePass product page, built as part of a Front-End UI assignment for Tagmango.

The goal was to recreate the provided Figma design with a strong emphasis on:
- pixel-perfect UI
- responsiveness
- light and dark mode support
- clean, readable code

No APIs or backend logic are used — all data is static/mock.

---

## 🔗 Links

- **Live Demo:** [<DEPLOYED_URL>](https://backstage-pass-seven.vercel.app/)
- **GitHub Repository:** [<GITHUB_REPO_URL>](https://github.com/yash20111999/BackstagePass)
- **Figma Reference:** [BackstagePass – Product Design System](https://www.figma.com/design/eKduEjfHxWorlffeDkYhCg/%E2%9D%96-BackstagePass---Product-Design-System?node-id=6078-133079&t=J5E2fLgkbwgedgVg-0)

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons & Shapes:** SVG (exported from Figma)
- **Animations:** CSS & SVG-based (no external animation libraries)

---

## ✨ Features Implemented

### UI Components
- Feed post card (text & media)
- Pinned post state
- Subscriber post with animated confetti header
- Sidebar with day selection and locked states
- Global header and page header

### Interactions
- Day selection in sidebar (unlocked days only)
- Hover and active states across interactive elements
- Confetti animation for “Your Submission”

### Responsiveness
- Desktop layout matches Figma design
- Mobile layout hides sidebar for clarity
- Feed scrolls independently while headers remain fixed

### Light & Dark Mode
- Fully supported via CSS variables
- Theme toggle available via profile menu
- No duplicated styles for dark mode

---

## 🎨 Design Fidelity

Special care was taken to match:
- spacing and alignment
- typography hierarchy
- border radii and curved shapes
- background layering (image + blur + gradient)
- subtle UI polish and transitions

Custom SVGs are used where CSS alone could not achieve the required precision (e.g. sidebar active day shape).

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```
- The app will be available at http://localhost:3000.

## 📁 Project Notes

- Tailwind class repetition is minimized using **local class constants** within components to improve readability.
- No global style abstractions were introduced, keeping Tailwind usage **explicit and easy to trace**.
- The codebase favors **clarity over over-engineering**, which is appropriate for a UI-focused assignment.

---

## ✅ Assignment Scope Compliance

- [x] UI only (no APIs)
- [x] Responsive design
- [x] Light & dark mode
- [x] High visual fidelity to Figma
- [x] Clean, modular component structure


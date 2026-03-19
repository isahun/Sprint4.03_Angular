# ImageGallery | Modern Angular Showcase (Sprint 4.03)

A high-performance, responsive image gallery built with **Angular 19+**. This project focuses on modern Angular patterns, including **Signals**, **Standalone Components**, and **Zoneless** change detection.

---

## Key Features

- **Signals-Driven Logic:** Leveraging the latest Angular reactivity for state management.
- **Smart Grid Layout:** Responsive CSS Grid that adapts seamlessly from mobile to desktop.
- **Featured Image Highlighting:** Visual emphasis on primary content through dynamic class binding and high-contrast borders.
- **Accessibility (A11y) First:** - Optimized color contrast (WCAG 2.1 compliant).
  - Semantic HTML with ARIA labels and roles.
  - Screen-reader friendly descriptions for featured content.
- **Performance:** Optimized image rendering using `object-fit: cover` to prevent distortion.

---

## Tech Stack & Architecture

- **Framework:** Angular 19+ (Zoneless mode)
- **Language:** TypeScript
- **Styling:** Modular CSS with Custom Properties (CSS Variables)
- **Component Pattern:** Smart Parent (**Gallery**) vs. Presentational Child (**ImageItem**)

### File Structure
| Folder / File | Responsibility |
| :--- | :--- |
| `src/app/interfaces/` | Data contracts (Image interface) |
| `src/app/components/gallery/` | Parent component: Manages the list of images and signal state |
| `src/app/components/image-item/` | Child component: Handles rendering, `:host` styling, and A11y |
| `src/styles.css` | Global design system, variables, and accessibility resets |

---

## Getting Started

### 1. Prerequisites
- **Node.js:** v22.22.0 or higher (required for Angular CLI 19+)
- **Angular CLI:** `npm install -g @angular/cli`


### 2. Installation
Clone the repository:
`git clone https://github.com/your-username/image-gallery.git`

Navigate to the project folder:
`cd image-gallery`

Install dependencies:
`npm install`

### 3. Development Server
Run the following command for a local dev server:
`ng serve`

Once started, navigate to `http://localhost:4200/`. The application will automatically reload if you modify any of the source files.

---

## Styling Philosophy

The project follows a **Pragmatic & Robust Design** approach:

* **Component Encapsulation:** Utilizing the `:host` selector to ensure component-level styles (like grid positioning) are handled correctly without leaking to the global scope.
* **Visual Hierarchy:** To ensure a bulletproof layout, the featured image is highlighted using a high-contrast **Secondary Color border (6px)** and deep shadows instead of complex grid-spanning that might disrupt the flow on smaller screens.
* **Responsive Consistency:** All images maintain a uniform aspect ratio using `object-fit: cover`, ensuring a professional look regardless of the source image proportions.

---

## Accessibility Implementation

Accessibility is integrated directly into the component logic:

* **Dynamic ARIA Binding:** Using `[attr.aria-label]` and `[attr.aria-describedby]` linked to Angular Signals to provide real-time context to assistive technologies.
* **Semantic Roles:** Explicitly defined regions using `role="region"` for better navigation.
* **Visual Accessibility:** Color schemes were tested to pass WCAG AA contrast guidelines.
* **Hidden Metadata:** Use of the `.sr-only` utility class to provide descriptive labels that are available to screen readers but hidden from the visual UI.

---

##### Author Irene V. Sahun - GitHub: isahun 

##### Created as part of the IT Academy Frontend BootCamp.
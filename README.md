# 🎓 StudyNook | Premium Co-Working & Study Space Booking Platform

A modern, full-stack web application designed to help students, developers, and professionals find, book, and manage premium study rooms and productive co-working environments. Built with a visually striking dark-themed UI, real-time interactive dashboards, and lightning-fast performance.

🔗 **Live Site URL:** [study-nook.vercel.app](https://study-nook-frontend.vercel.app/)

---

## ✨ Key Features & Functionality

* **Premium & Tailored Study Environments:** Explore a diverse catalog of pre-configured rooms designed for varying needs—ranging from **The Silent Oasis** (fully soundproofed for deep focus) and **Tech-Innovation Labs** (equipped with pro-grade coding setups) to **Brainstorming Dens** featuring interactive whiteboards.
* **Intuitive & Smooth Booking System:** Authenticated users can instantly reserve time slots for individual study or group marathons through an interactive booking modal, featuring strict client-side verification and hassle-free, dynamic booking states.
* **Comprehensive Owner Dashboard (Full CRUD):** Complete control for space owners to list new rooms, upload contextual asset specifications (floor level, amenities count, dynamic hourly rates), modify existing configurations on the fly via pop-up modals, and manage active listings securely.
* **State-of-the-Art Secure Authentication:** Powered by a modern authentication layer providing persistent, seamless session management (`authClient.useSession`), ensuring dynamic user context on both server-side pre-rendering and instant client-side hydration.
* **Immersive High-Fidelity UI/UX:** Styled using Tailwind CSS with a premium dark-themed aesthetic, modern cards, glassmorphic interactive layers, sticky booking sections, and fluid micro-interactions built optimized for technical professionals and modern students.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** Next.js (App Router, Version 16+) with Turbopack for lightning-fast hot module reloading.
* **Styling & Motion:** Tailwind CSS for a highly cohesive utility-first design, interactive custom borders, animations, and micro-interactions.
* **State & Authentication:** Secure, asynchronous session caching layers mapping owner permissions and access tokens dynamically.
* **Performance Optimization:** Strategic implementation of hybrid state mounting and dynamic client-side hydration wrappers to entirely bypass layout shifts and server-client mismatch errors (Hydration Fixes).



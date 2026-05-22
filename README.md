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

This project leverages the **MERN Stack** enhanced with next-generation production tools to ensure complete structural type safety, smooth animations, and high performance.

* **Frontend Architecture:** * **Next.js (App Router):** Utilized for optimized routing, fast rendering, and clean component structures.
  * **HeroUI & daisyUI:** Integrated together to build a premium, highly cohesive, dark-themed responsive layout with production-ready components.
  * **Tailwind CSS:** Used for writing clean utility-first styling and managing complex dark theme system configurations.
  * **Framer Motion:** Powering complex UI micro-interactions, layout transitions, and page load entry animations for an immersive user experience.

* **Backend & Database:**
  * **Node.js & Express.js:** Scalable server environment managing custom REST APIs, booking pipelines, and room access verification endpoints.
  * **MongoDB:** A robust, flexible NoSQL database storing structured collections for user profiles, dynamic rooms, slots, and interactive user bookings.

* **State & Authentication Layer:** * **Better-Auth (`authClient.useSession`):** Handles secure client-side and server-side state caching, managing owner permissions, and resolving session mismatches seamlessly during runtime.



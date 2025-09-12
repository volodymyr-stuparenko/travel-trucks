# 🚐 TravelTrucks - Camper Rental Web App

**TravelTrucks** is a frontend web application for a camper rental company.  
The app is built with **React + Vite**, using **Redux Toolkit, React Router,
Axios, and Tailwind CSS**.

Users can browse available campers, filter by parameters, view detailed
descriptions, read reviews, and make reservations.

---

## ✨ Features

- 📌 **Home Page**
  - Banner with main call-to-action button
  - "View Now" button redirects to the catalog
- 🚐 **Catalog Page**
  - Displays list of available campers
  - Filtering by:
    - Location (text input)
    - Camper type (single choice)
    - Features (AC, kitchen, bathroom, etc.)
  - Add/remove campers from **Favorites** (persisted in LocalStorage)
  - "Load More" button for pagination
- 📝 **Camper Details Page**
  - Image gallery
  - Full description (transmission, engine, AC, kitchen, etc.)
  - Technical details (form, length, width, height, tank, consumption)
  - User reviews with star rating system
  - Booking form with success notification
- 🔀 **Routing**
  - `/` – Home
  - `/catalog` – Catalog
  - `/catalog/:id` – Camper details
- ⚡ **Server-side filtering** (performed on backend, not frontend)
- 💾 **Favorites persistence** (stored in LocalStorage)
- ✅ Clean, reusable, component-based codebase

---

## 🛠️ Tech Stack

- [React + Vite](https://vitejs.dev/) – project setup
- [Redux Toolkit](https://redux-toolkit.js.org/) – state management
- [React Router](https://reactrouter.com/) – routing
- [Axios](https://axios-http.com/) – API requests
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [MockAPI](https://mockapi.io/) – backend for camper listings

---

## 📡 API

The backend is available at:  
[`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

**Endpoints:**

- `GET /campers` – fetch all campers (with filters support)
- `GET /campers/:id` – fetch camper details by ID

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/volodymyr-stuparenko/travel-trucks.git
cd travel-trucks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

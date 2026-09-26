# 🏋️ FitLog

**FitLog** is a modern and responsive fitness web application built with **Next.js and React**. It allows users to explore different exercises, view exercise details, create workout plans, and save their favorite workouts for later.

The project focuses on providing a clean user interface, responsive design, reusable components, and a smooth user experience.

---

## 🌐 Live Demo

🔗 **Live Website:** [Visit Website](https://fit-log-ten-ashen.vercel.app/)

## 📂 GitHub Repository

🔗 **GitHub Repository:** [View Source Code](https://github.com/jubail-dev/fit-log)

---

## ✨ Features

* 🏠 Modern and responsive home page
* 💪 Browse different exercises
* 📖 View detailed information about exercises
* 📋 Create your own workout plan
* 💾 Save exercises for later
* 🗑️ Remove exercises from saved plans
* 🔔 Toast notifications for user actions
* 📱 Fully responsive design
* 🧭 Responsive navigation bar
* ⏳ Loading and skeleton UI
* ❌ Custom 404 Not Found page
* 🧩 Context API for workout state management
* ♻️ Reusable React components
* ⚡ Built with Next.js App Router

---

## 🛠️ Technologies

| Technology           | Purpose                       |
| -------------------- | ----------------------------- |
| **Next.js**          | React framework               |
| **React**            | UI development                |
| **JavaScript / JSX** | Application logic             |
| **Tailwind CSS**     | Styling and responsive design |
| **React Icons**      | Icons                         |
| **React Toastify**   | Toast notifications           |
| **Context API**      | Global state management       |

---

## 📄 Pages

### 🏠 Home

The homepage introduces FitLog and provides users with quick access to workout and exercise-related features.

### 💪 Exercises

Users can explore different exercises and choose workouts according to their needs.

### 📖 Exercise Details

Each exercise has a dedicated details page where users can see more information about that particular workout.

### 📋 My Plan

Users can create and manage their personal workout plan from this page.

### 💾 Saved Plan

Users can keep their preferred exercises in their saved workout list and access them later.

### ❌ Not Found

A custom Not Found page is provided for invalid routes and unavailable pages.

---

## 🧠 State Management

FitLog uses **React Context API** to manage workout-related data globally.

The workout context handles:

* Today's workout plan
* Saved workout plan
* Adding exercises
* Removing exercises
* Updating workout lists

This allows different components and pages to access the workout state without passing props through multiple levels.

---

## 📁 Project Structure

```text
fitlog/
│
├── app/
│   ├── page.jsx
│   ├── exercises/
│   │   └── [exerciseId]/
│   ├── my-plan/
│   ├── saved/
│   ├── not-found.jsx
│   └── ...
│
├── components/
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── WorkoutCard.jsx
│   └── ...
│
├── context/
│   └── WorkOutProvider.jsx
│
├── lib/
│   └── workOuts.js
│
├── types/
│   └── workOut.js
│
├── public/
│   └── ...
│
├── assets/
│   └── ...
│
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jubail-dev/fit-log
```

### 2. Navigate to the project

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Now open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 📱 Responsive Design

FitLog is designed to provide a consistent experience across:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

The layout uses responsive Tailwind CSS utilities to adapt the interface to different screen sizes.

---

## 🎨 UI Highlights

The application includes:

* Modern fitness-focused interface
* Responsive navbar
* Exercise cards
* Workout planning interface
* Responsive buttons and controls
* Skeleton loading states
* Custom error page
* Toast notifications
* Mobile navigation menu

---

## 🔮 Future Improvements

The project can be extended with several additional features:

* 🔐 User authentication
* 👤 User profile
* 📊 Workout progress tracking
* 🔥 Calories tracking
* 📈 Progress statistics
* 🗓️ Workout history
* 🗄️ Backend database
* ☁️ Cloud data storage
* 🤖 Personalized workout recommendations
* 📊 Fitness dashboard


## 👨‍💻 Developer

### JR Jubail

Frontend / Full Stack Web Development Learner

Built with ❤️ using **Next.js, React, and Tailwind CSS**.

---

## 📜 License

This project was created for educational purposes as part of a web development learning assignment.

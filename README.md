# 🌐 Corporate Intranet Platform

A **dynamic, interactive corporate intranet web application** built with **React.js (JavaScript)** to enhance internal communication, employee engagement, and organizational transparency.

This platform acts as a **centralized engagement and communication layer** across departments, helping organizations **break silos, celebrate achievements, and align teams**—without focusing on traditional HR operations like attendance or payroll.

---

## 🚀 Project Vision

The goal of this platform is to:

* Provide a **single source of truth** for company-wide communication
* Improve **visibility across teams and departments**
* Strengthen **organizational culture and engagement**
* Encourage **collaboration and recognition**
* Serve as a **foundation layer** for future enterprise integrations

---

## ✨ Key Features

### 📊 Smart Dashboard

* Personalized and prioritized content feed
* Displays:

  * Leadership vision & updates
  * Announcements & project wins
  * Recognitions
  * Upcoming events
* Designed for **clarity without overwhelming users**

---

### 🔐 Authentication System (HR & Employee)

* Role-based login system:

  * 👨‍💼 HR/Admin
  * 👨‍💻 Employees
* Features:

  * Login with email & password
  * New user registration
  * Session persistence using `localStorage`
* HR account is **predefined and restricted from registration**

---

### 📢 Announcements & Leadership Communication

* Global & department-specific posts
* Categories:

  * Vision
  * Project Wins
  * Announcements
* Engagement:

  * Likes 👍
  * Comments 💬

---

### 🏆 Recognition & Appreciation

* Peer-to-peer recognition system
* Highlights employee contributions
* Builds a **positive work culture**

---

### 🎉 Engagement & Culture

* Welcome posts for new joiners
* Celebration posts (festivals, milestones)
* Interactive discussions & replies

---

### 🧑‍🤝‍🧑 Employee Directory

* Explore employees across departments
* View:

  * Roles
  * Departments
  * Profiles & avatars
* Encourages **cross-team collaboration**

---

### 🏢 Department Visibility

* Each department includes:

  * Name
  * Description
  * Members
* Helps understand organizational structure

---

### 🗓️ Events & Calendar

* Company-wide and department events
* Examples:

  * Townhalls
  * Team meetings
  * Cultural celebrations
* Engagement-based participation

---

### 🔔 Notifications

* Real-time-like updates (mock-based)
* Tracks:

  * Recognitions
  * Announcements
  * Reminders
* Read/Unread states

---

### 🎮 Gamification

* Points-based engagement system
* Encourages participation
* Leaderboard-ready structure

---

### 🧠 Knowledge Hub (Extensible)

* Designed for:

  * Policies
  * Handbooks
  * Documents
* Can evolve into:

  * Forum system
  * Two-way knowledge sharing

---

### 🔐 Multi-Tenancy (Conceptual)

* Department-based visibility control
* Global vs restricted access design
* Scalable architecture for enterprise use

---

## 📱 Mobile APK (Planned / Limited)

* View announcements
* View recognitions
* Notifications
* Basic profile access

---

## 🏗️ Tech Stack

* **Frontend:** React.js (JavaScript)
* **State Management:** React Context API
* **Authentication:** Custom Auth using Context + LocalStorage
* **Data Source:** Mock Data (Static JSON)
* **UI Philosophy:** Minimal, modern, engagement-focused

---

## 📂 Project Structure

```bash
src/
│── components/
│── pages/
│── auth/
│   └── AuthContext.js
│── data/
│   └── mockData.js
│── App.jsx
│── main.jsx
│── App.css
│── index.css
```

---

## 🧪 Mock Data

This project uses mock data to simulate a real corporate environment.

### Includes:

* 👤 Users
* 🏢 Departments
* 📢 Announcements
* 🏆 Recognitions
* 📅 Events
* 🔔 Notifications

Example:

```js
export const currentUser = {
  id: 'u1',
  name: 'Alex Rivera',
  role: 'Product Designer',
  departmentId: 'd1',
  points: 1450,
};
```

---

## 🔐 Authentication Details

### 👨‍💼 Default HR Login

```bash
Email: hr@corporate.com
Password: hrpassword
```

> ⚠️ HR email cannot be used for registration.

---

### 👨‍💻 Sample Employee Login

```bash
Email: alex@corporate.com
Password: password123
```

---

### 🆕 Register New User

* Enter:

  * Name
  * Email
  * Password
* Automatically logged in after registration
* Role assigned: `employee`

---

### ⚙️ Auth Features

* LocalStorage persistence
* Unique email validation
* Role-based access (`hr` vs `employee`)
* Logout support

---

## ▶️ How to Run the Project

### 1. Clone Repository

```bash
git clone https://github.com/shuvomdhar/Employee-Management.git
cd Employee-Management
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm start
```

---

### 4. Open in Browser

```
http://localhost:5173
```

---

## 🧑‍💻 How to Use the Application

### 🔑 Step 1: Login / Register

* Login using HR or employee credentials
* Or register as a new employee

---

### 🏠 Step 2: Explore Dashboard

* View:

  * Announcements
  * Recognitions
  * Events
* Interact via likes/comments

---

### 👥 Step 3: Discover Employees

* Browse employee directory
* Understand roles and departments

---

### 🏆 Step 4: Engage & Recognize

* Appreciate peers
* View recognition feed

---

### 📅 Step 5: Track Events

* Stay updated with meetings & celebrations

---

### 🔔 Step 6: Check Notifications

* Monitor updates and reminders

---

## 🎯 Design Principles

* ✅ Simple yet powerful UX
* ✅ Clean and minimal UI
* ✅ Content prioritization
* ✅ Modular architecture
* ✅ Engagement-first approach

---

## 🔮 Future Enhancements

* Backend integration (Node.js / Firebase)
* Secure authentication (JWT, OAuth)
* Role-based access control (RBAC)
* Real-time updates (WebSockets)
* Full mobile app (React Native)
* AI-driven content prioritization

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork and enhance the project.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 👨‍💻 Author

**Shuvom Dhar**
B.Tech CSE | Aspiring Software Engineer
Passionate about building impactful real-world applications

---

⭐ If you found this useful, consider giving it a star!

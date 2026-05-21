# 🌐 Corporate Intranet Platform

A **dynamic, interactive, and modern corporate intranet web application** built using **React.js (JavaScript)** to enhance internal communication, engagement, and organizational visibility.

This platform serves as a **centralized engagement layer** for employees across departments, helping break silos while maintaining controlled visibility through modular design.

---

## 🚀 Overview

The Corporate Intranet is designed to:

* Improve **organizational transparency**
* Promote **employee engagement & collaboration**
* Highlight **company vision, achievements, and updates**
* Build a **strong recognition and celebration culture**
* Provide a **lightweight knowledge-sharing ecosystem**

> ⚠️ Note: This platform focuses on engagement and communication — not HR transactional systems like attendance or payroll.

---

## 🧩 Key Features

### 📊 1. Smart Dashboard (Core Experience)

* Personalized feed based on user role & department
* Highlights:

  * Leadership vision & updates
  * Announcements & project wins
  * Recognitions & celebrations
  * Upcoming events
* Prioritized content layout for **clarity over clutter**

---

### 📢 2. Announcements & Leadership Communication

* Company-wide and department-specific posts
* Categories:

  * Vision
  * Project Wins
  * General Announcements
* Interactive:

  * 👍 Likes
  * 💬 Comments
* Timestamp-based activity tracking

---

### 🏆 3. Recognition & Appreciation System

* Peer-to-peer recognition
* Highlight achievements publicly
* Encourages positive culture

Features:

* Recognition messages
* Timeline-based display
* Contribution visibility

---

### 🎉 4. Engagement & Culture Layer

* New joinee welcome posts
* Celebration announcements (festivals, milestones)
* Employee experience sharing
* Interactive replies & discussions

---

### 🧑‍🤝‍🧑 5. Employee Directory (Collaboration Layer)

* Discover colleagues across departments
* View:

  * Roles
  * Departments
  * Profiles & bios
* Helps **break organizational silos**

---

### 🏢 6. Department & Vertical Visibility

* Each department has:

  * Identity
  * Description
  * Associated members
* Enables cross-functional awareness

---

### 🗓️ 7. Events & Engagement Calendar

* Company-wide and department-level events
* Visual representation of:

  * Townhalls
  * Team syncs
  * Cultural celebrations
* Attendance tracking (mock-based)

---

### 🧠 8. Knowledge Hub (Pluggable)

* Designed for:

  * Policies
  * Handbooks
  * Documentation
* Extendable into:

  * Forum-based discussions
  * Two-way knowledge exchange

---

### 🔔 9. Notification System

* Real-time-like notifications (mock)
* Tracks:

  * Recognitions
  * Announcements
  * Reminders
* Read/Unread states

---

### 🎮 10. Gamification (Lightweight)

* Points-based system
* Leaderboard-ready architecture
* Encourages participation and ownership

---

### 🔐 11. Multi-Tenancy & Visibility Control (Conceptual)

* Department-level isolation
* Global vs restricted content visibility
* Designed for scalability into real enterprise systems

---

## 📱 Mobile APK (Limited Features)

A lightweight mobile version can support:

* View announcements
* View recognitions
* Notifications
* Basic profile access

---

## 🏗️ Tech Stack

* **Frontend:** React.js (JavaScript)
* **State/Data:** Mock Data (Static JSON)
* **UI Approach:** Component-based modular architecture
* **Design Philosophy:** Simple, clean, and engagement-focused UX

---

## 🧪 Mock Data Usage

This project uses **mock data** to simulate a real corporate environment.

### Includes:

* 👤 Users & Current User
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

## ▶️ How to Run the Project

### 1. Clone the Repository

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

### 👋 Login (Mock)

* The app assumes a default logged-in user (`currentUser`)

---

### 🏠 Dashboard

* View:

  * Announcements
  * Recognitions
  * Events
* Interact via likes/comments (UI-based)

---

### 🔍 Explore Employees

* Navigate to directory
* View profiles and departments

---

### 🏆 Recognize Peers

* Browse recognition feed
* Add new recognitions (if UI implemented)

---

### 📅 Check Events

* Stay updated with upcoming meetings & celebrations

---

### 🔔 Notifications

* View recent activity updates
* Track unread alerts

---

## 🎯 Design Principles Followed

* ✅ **Simple yet powerful UX**
* ✅ **Content prioritization over overload**
* ✅ **Modular and scalable architecture**
* ✅ **Engagement-driven interactions**
* ✅ **Cross-department visibility with control**

---

## 🔮 Future Enhancements

* Backend integration (Node.js / Firebase / Supabase)
* Real authentication system
* Role-based access control (RBAC)
* Real-time updates (WebSockets)
* Full mobile app (React Native / Flutter)
* AI-based content prioritization

---

## 🤝 Contribution

Feel free to fork this project and enhance it further.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 👨‍💻 Author

**Shuvom Dhar**
B.Tech CSE | Software Engineer
Passionate about building impactful, real-world applications

---

⭐ If you like this project, consider giving it a star!

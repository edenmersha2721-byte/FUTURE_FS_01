# Eden Mersha — Developer Portfolio

A modern, dark-themed full-stack developer portfolio for **Eden Mersha** — Full-Stack Developer & Grade 12 student.

Built with a **React + Vite + Tailwind CSS + shadcn-style** frontend and a **Node.js + Express + PostgreSQL** backend that powers the contact form (saves messages to the database **and** emails them via Gmail).

---

## ✨ Features

**Single-page experience** — every section lives on one page and is reached by smooth-scrolling via the navbar (`Home · About · Skills · Projects · Certificates · Contact`).

- **Hero** — animated intro with name, role and call-to-action buttons.
- **About** — professional intro + profile card, mission/vision/values, and a "HTML/CSS → full-stack" journey timeline with future goals.
- **Skills** — technologies grouped by stack (frontend, backend, database, tools & architecture) with proficiency bars.
- **Projects** — featured project cards with live links and status badges.
- **Certificates** — achievement cards (image or styled placeholder).
- **Contact** — validated form wired to a real Node.js backend (PostgreSQL storage + email notifications).
- Dark UI with blue/purple gradients, glassmorphism cards, smooth Framer Motion animations, fully responsive.

---

## 🗂️ Project Structure

```
Portofolio intern/
├── client/                     # React + Vite frontend
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── certificates/       # ← drop certificate images here
│   │   └── Eden-Mersha-CV.pdf  # ← drop your CV here (see site.js)
│   └── src/
│       ├── components/
│       │   ├── ui/             # shadcn-style primitives (button, card, input…)
│       │   ├── layout/         # Navbar, Footer, ScrollToTop
│       │   ├── shared/         # Reveal, SectionHeading, AmbientBackground
│       │   └── sections/       # Hero, About, Skills, Projects, Certificates, Contact
│       ├── data/               # site.js, skills.js, projects.js, certificates.js
│       ├── lib/                # utils.js (cn), api.js (fetch helper)
│       ├── pages/              # Home (assembles all sections), NotFound
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── server/                     # Node.js + Express backend
    └── src/
        ├── config/             # env.js, db.js (pg pool)
        ├── controllers/        # contactController.js
        ├── routes/             # contactRoutes.js
        ├── services/           # mailer.js (Nodemailer)
        ├── utils/              # validateContact.js
        ├── db/                 # schema.sql, init.js
        └── index.js            # app entry
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **PostgreSQL** running locally (or a hosted instance)
- A **Gmail App Password** for sending email (see below)

### 1) Frontend (client)

```bash
cd client
npm install
cp .env.example .env      # optional in dev (Vite proxies /api automatically)
npm run dev               # http://localhost:5173
```

### 2) Backend (server)

```bash
cd server
npm install
cp .env.example .env      # then edit it (DB + email credentials)
npm run db:init           # creates the contact_messages table
npm run dev               # http://localhost:5000
```

The Vite dev server proxies `/api/*` to `http://localhost:5000`, so just run both and the contact form works end-to-end.

---

## ⚙️ Configuration

### Database
Create a database and point the server at it:

```sql
CREATE DATABASE eden_portfolio;
```

Set `DATABASE_URL` (or the individual `PG*` vars) in `server/.env`, then run:

```bash
npm run db:init
```

### Email (Gmail)
1. Enable **2-Step Verification** on the Gmail account.
2. Create an **App Password**: <https://myaccount.google.com/apppasswords>
3. In `server/.env` set:
   ```
   MAIL_USER=edenmersha2721@gmail.com
   MAIL_PASS=your_16_char_app_password
   MAIL_TO=edenmersha2721@gmail.com
   ```

> If email isn't configured, the server still works — messages are saved to the database and the form reports success.

---

## 🧩 Customizing Content

| What | Where |
|------|-------|
| Name, role, socials, CV path | `client/src/data/site.js` |
| Skills & proficiency levels | `client/src/data/skills.js` |
| Projects (links, status, tags) | `client/src/data/projects.js` |
| Certificates | `client/src/data/certificates.js` + images in `client/public/certificates/` |
| Your CV | place `Eden-Mersha-CV.pdf` in `client/public/` |

---

## 📡 API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/health` | Health check + DB status |
| `POST` | `/api/contact` | Submit a contact message → DB + email |

**POST /api/contact** body:
```json
{ "name": "Jane", "email": "jane@example.com", "subject": "Hi", "message": "Loved your work!" }
```

Rate-limited to 8 submissions per 15 minutes per IP.

---

## 🏗️ Build for Production

```bash
# Frontend
cd client && npm run build      # outputs to client/dist

# Backend
cd server && npm start
```

Deploy the static `client/dist` (Vercel / Netlify) and the Node server (Render / Railway). Set `VITE_API_URL` on the frontend to the deployed backend URL, and add the frontend origin to `CLIENT_ORIGIN` on the backend.

---

## 🛠️ Tech Stack

**Frontend:** React, Vite, Tailwind CSS, shadcn-style components, Framer Motion, lucide-react, React Router
**Backend:** Node.js, Express, PostgreSQL (`pg`), Nodemailer, express-rate-limit

---

Made with care by **Eden Mersha** — INSA Weekend Development Program.

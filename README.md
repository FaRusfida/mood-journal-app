# 🌸 Mood Journal – Mental Wellness & Mindfulness Tracker

A beautiful, calming **React Single Page Application (SPA)** designed to help users track daily moods, reflect through wellness prompts, and build better mental health habits.

![Mood Journal Hero](/screenshots/image.png)

## ✨ Key Features

- Browse 10+ curated **mental wellness prompts** (gratitude, mindfulness, self-care, etc.)
- Record daily mood with **5-point scale + emoji visualization**
- Personal journal with **chronological entries**, mood trends & statistics
- Simple **simulated authentication** (login/register – frontend only)
- **Feedback** form with star rating
- **Contact Us** page with email copy feature
- Fully **responsive** design (mobile + tablet + desktop)
- All data saved in **browser localStorage** (persists between sessions)

## 🎨 Design & Feel

- Soft pastel **lavender-purple-blue** color palette
- Smooth hover animations & fade-in effects
- Material UI + Bootstrap for modern, clean components
- Calming gradient background
- Emoji-enhanced mood visualization

![Prompts Page](/screenshots/image-1.png)

![Journal Page](/screenshots/image-2.png)

## 🛠️ Tech Stack

| Technology          | Purpose                              |
|---------------------|--------------------------------------|
| React 18            | UI library with Hooks & Context API  |
| React Router v6     | Client-side routing                  |
| @mui/material       | Beautiful Material Design components |
| @emotion/react      | CSS-in-JS styling                    |
| Bootstrap 5         | Responsive grid & utilities          |
| LocalStorage        | Persistent data storage (no backend) |

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd mood-journal-app

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

App opens at: **http://localhost:3000**

## 📱 How to Use the App

1. **Home** → See welcome overview  
2. **Register / Login** → Simulated (any credentials work)  
3. **Browse Prompts** → Choose wellness activities  
4. Click **Add to Journal** → Rate mood (1–5) + write notes  
5. **My Journal** → View all entries + mood statistics  
6. **Feedback** → Rate the app & leave comment  
7. **Contact Us** → Send message (saved in localStorage)

![Add Entry Dialog](/screenshots/image-3.png)

## Project Folder Structure (2025 version)

```
mood-journal-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── context/
│   │   └── UserContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── PromptsList.js
│   │   ├── MyJournal.js
│   │   ├── Feedback.js
│   │   └── ContactUs.js
│   ├── App.js
│   ├── App.css
│   ├── data.js
│   ├── index.js
│   └── index.css
├── screenshots/
├── package.json
└── README.md
```

## 🎯 Learning Outcomes / Educational Value

- React Hooks & Context API for global state
- Protected routes simulation
- CRUD operations in localStorage
- Responsive design (mobile-first thinking)
- Component composition & reusability
- Form handling & validation (client-side)
- Modern UI/UX practices with MUI + custom styling

## 📸 Screenshots 

1. Home page (welcome + feature cards)

![Home page (welcome + feature cards)](/screenshots/image-11.png)

2. Prompts list (grid of wellness cards)

![Prompts list (grid of wellness cards)](/screenshots/image-7.png)

3. Add-to-journal dialog (mood rating + notes)

![Add-to-journal dialog (mood rating + notes)](/screenshots/image-6.png)
   
4. My Journal page (entries + stats + trend)

![My Journal page (entries + stats + trend)](/screenshots/image-5.png)

5. Feedback page (with rating stars)

![Feedback page (with rating stars)](/screenshots/image-8.png)

6. Login / Register forms

![Login ](/screenshots/image-9.png)

![Register forms](/screenshots/image-13.png)

7. Contact Us page

![Contact Us page](/screenshots/image-10.png)

## ⚠️ Important Notes

- **Frontend-only** project – no real backend or database
- Authentication is **simulated** (no real security)
- Data is stored in **browser localStorage** → clearing browser data = losing journal

## 🔧 Troubleshooting

**App not starting? Try this sequence:**

```bash
# Remove old files
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Start
npm start
```

**Port 3000 in use?**  
Run: `PORT=3001 npm start` (Linux/Mac) or `set PORT=3001 && npm start` (Windows)

**Still issues?** Check Node version (`node -v` → should be 16+ / 18+ / 20+)

## 📄 License

Educational project – MIT License

Made with 💜 by **Fathimathu Rusfida**



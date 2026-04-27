# Getting Started Guide

## Project Overview

Your premium portfolio is now organized with:
- **Frontend**: Separate HTML, CSS, JS files
- **Backend**: Professional Node.js/Express API with authentication, database, and email

## Quick Start (Windows)

### 1. Backend Setup

```bash
cd backend
setup.bat
```

Then edit the `.env` file with your settings.

### 2. Start Backend

```bash
npm run dev
```

You should see: `Server running on port 5000`

### 3. Open Frontend

Open `frontend/index.html` in your browser.

---

## Quick Start (Mac/Linux)

### 1. Backend Setup

```bash
cd backend
chmod +x setup.sh
./setup.sh
```

Then edit the `.env` file with your settings.

### 2. Start Backend

```bash
npm run dev
```

### 3. Open Frontend

Open `frontend/index.html` in your browser.

---

## Required Configuration

### MongoDB

You need a MongoDB database. Options:
- **Local**: Install MongoDB locally
- **MongoDB Atlas**: Free cloud database at https://www.mongodb.com/cloud/atlas

Update `MONGODB_URI` in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### Email (Gmail)

To enable contact form emails:

1. Enable 2-Factor Authentication on Gmail
2. Create App Password at https://myaccount.google.com/apppasswords
3. Add to `.env`:
```
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### JWT Secret

Generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add to `.env`:
```
JWT_SECRET=your_generated_secret_here
```

---

## File Structure

```
portfolio-professional/
├── frontend/
│   ├── index.html          (Main page)
│   ├── css/styles.css      (All styling)
│   ├── js/app.js           (All JavaScript)
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── server.js       (Main entry)
│   │   ├── controllers/    (Business logic)
│   │   ├── models/         (Database schemas)
│   │   ├── routes/         (API endpoints)
│   │   ├── middleware/     (Auth, etc)
│   │   └── utils/          (Email, etc)
│   ├── .env                (Configuration)
│   ├── package.json        (Dependencies)
│   └── README.md
│
└── README.md               (This file)
```

---

## API Endpoints

### Projects
```
GET    /api/projects          - List all projects
GET    /api/projects/:id      - Get single project
POST   /api/projects          - Create (admin)
PUT    /api/projects/:id      - Update (admin)
DELETE /api/projects/:id      - Delete (admin)
```

### Contact
```
POST   /api/contact           - Submit form
GET    /api/contact           - Get all (admin)
PATCH  /api/contact/:id/read  - Mark read (admin)
DELETE /api/contact/:id       - Delete (admin)
```

### Auth
```
POST   /api/auth/register     - Register user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user
```

### Admin
```
GET    /api/admin/stats       - Dashboard stats (admin)
```

---

## Development

### Add Projects via API

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "category": "SaaS",
    "technologies": ["React", "Node.js"],
    "emoji": "🚀",
    "link": "https://project.com",
    "github": "https://github.com/user/repo"
  }'
```

### Test Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message",
    "phone": "+1234567890",
    "subject": "Test Subject"
  }'
```

---

## Deployment

### Frontend Deployment
- Vercel: Drag & drop the frontend folder
- Netlify: Connect your GitHub repo
- GitHub Pages: Push frontend to gh-pages branch

### Backend Deployment
- Heroku: Push to heroku git remote
- Railway: Connect GitHub repo
- DigitalOcean: Deploy Node.js app
- AWS: Use Elastic Beanstalk

---

## Troubleshooting

**Backend won't start:**
- Check if port 5000 is available
- Check `.env` configuration
- Ensure MongoDB is running

**Frontend can't reach backend:**
- Check if backend is running on port 5000
- Check CORS settings in `.env`
- Check browser console for errors

**Emails not sending:**
- Verify Gmail app password
- Check SMTP settings in `.env`
- Ensure 2FA is enabled on Gmail account

---

## Support

For issues:
1. Check the README files in each folder
2. Check console logs for errors
3. Verify `.env` configuration
4. Ensure all dependencies are installed

---

**Happy coding! 🚀**

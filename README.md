# Portfolio Project Setup

## Project Structure

```
portfolio-professional/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── assets/
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── projectController.js
│   │   │   ├── contactController.js
│   │   │   └── authController.js
│   │   ├── models/
│   │   │   ├── Project.js
│   │   │   ├── Contact.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── projects.js
│   │   │   ├── contact.js
│   │   │   ├── auth.js
│   │   │   └── admin.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── utils/
│   │   │   └── email.js
│   │   └── server.js
│   ├── uploads/
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── README.md (this file)
```

## Quick Start

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` with your configuration

5. Start backend:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Open `index.html` in a browser (or use Live Server)

The frontend will automatically connect to the backend at `http://localhost:5000/api`

## Features

### Frontend
- ✅ Dark luxury design
- ✅ Smooth animations
- ✅ Responsive layout
- ✅ Custom cursor
- ✅ Scroll animations
- ✅ Project showcase
- ✅ Contact form
- ✅ Testimonials slider

### Backend
- ✅ Project management API
- ✅ Contact form handling
- ✅ Email notifications
- ✅ User authentication
- ✅ Admin dashboard
- ✅ MongoDB integration
- ✅ JWT authentication

## Requirements

- Node.js (v14+)
- MongoDB
- npm or yarn
- Modern web browser

## Configuration

### Backend (.env)

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key_here
CORS_ORIGIN=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
SMTP_FROM=noreply@portfolio.com
```

### Frontend

Update `API_URL` in `js/app.js` if needed:
```javascript
const API_URL = 'http://localhost:5000/api';
```

## Deployment

### Frontend
- Deploy to Vercel, Netlify, or GitHub Pages
- Update `API_URL` to production backend

### Backend
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables on hosting platform
- Use MongoDB Atlas for database

## Support

For issues or questions, contact Ahmed Amine Belkfif

# Ahmed Amine Belkfif - Portfolio Backend

Professional backend API for the elite portfolio.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update environment variables with your settings

4. Start the server:
```bash
npm run dev  # Development with nodemon
npm start   # Production
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id/read` - Mark as read (admin)
- `DELETE /api/contact/:id` - Delete contact (admin)

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Admin
- `GET /api/admin/stats` - Get dashboard stats

## Environment Variables

- `PORT` - Server port
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `CORS_ORIGIN` - CORS origin URL
- `SMTP_HOST` - Email SMTP host
- `SMTP_PORT` - Email SMTP port
- `SMTP_USER` - Email address
- `SMTP_PASS` - Email password
- `SMTP_FROM` - From email address

## Directory Structure

```
backend/
├── src/
│   ├── controllers/  - Business logic
│   ├── models/       - Database models
│   ├── routes/       - API routes
│   ├── middleware/   - Express middleware
│   ├── utils/        - Utility functions
│   ├── config/       - Configuration files
│   └── server.js     - Entry point
├── uploads/          - File uploads
├── .env.example      - Example env file
└── package.json      - Dependencies
```

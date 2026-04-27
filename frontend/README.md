# Frontend - Portfolio

Professional frontend for the elite portfolio.

## Features

- Dark futuristic luxury design
- Smooth animations and transitions
- Responsive design
- API integration with backend
- Contact form
- Project showcase
- Testimonials slider
- Timeline experience
- Custom cursor
- Scroll progress indicator

## File Structure

```
frontend/
├── index.html         - Main HTML file
├── css/
│   └── styles.css     - All styles
├── js/
│   └── app.js         - All JavaScript logic
├── assets/            - Images and assets
└── README.md          - This file
```

## Development

The frontend connects to the backend API at `http://localhost:5000/api`

### API Integration

- Projects are loaded from `/api/projects`
- Contact form submits to `/api/contact`
- Fallback projects if API is unavailable

## Opening the Frontend

1. Open `index.html` in a modern web browser
2. The site will try to connect to the backend API
3. If backend is unavailable, default content is displayed

## Browser Support

- Chrome/Brave (recommended)
- Firefox
- Safari
- Edge

All modern browsers with ES6 support.

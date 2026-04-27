const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { auth, adminOnly } = require('../middleware/auth');

// Public route
router.post('/', contactController.submitContact);

// Admin routes
router.get('/', auth, adminOnly, contactController.getContacts);
router.patch('/:id/read', auth, adminOnly, contactController.markAsRead);
router.delete('/:id', auth, adminOnly, contactController.deleteContact);

module.exports = router;

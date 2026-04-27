const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { auth, adminOnly } = require('../middleware/auth');

// Public routes
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);

// Admin routes
router.post('/', auth, adminOnly, projectController.createProject);
router.put('/:id', auth, adminOnly, projectController.updateProject);
router.delete('/:id', auth, adminOnly, projectController.deleteProject);

module.exports = router;

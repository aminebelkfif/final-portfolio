const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Contact = require('../models/Contact');

// Get dashboard stats
router.get('/stats', auth, adminOnly, async (req, res) => {
    try {
        const totalContacts = await Contact.countDocuments();
        const unreadContacts = await Contact.countDocuments({ read: false });

        res.json({
            totalContacts,
            unreadContacts
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

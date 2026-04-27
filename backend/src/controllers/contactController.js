const Contact = require('../models/Contact');
const { sendEmail, contactEmailTemplate, confirmationEmailTemplate } = require('../utils/email');

// Submit contact form
exports.submitContact = async (req, res) => {
    try {
        const { name, email, message, phone, subject } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save contact to database
        const contact = new Contact({
            name,
            email,
            message,
            phone,
            subject: subject || 'New Contact'
        });

        await contact.save();

        // Send email to admin
        await sendEmail(
            process.env.SMTP_USER,
            `New Contact: ${subject || 'New Contact'}`,
            contactEmailTemplate(name, email, message)
        );

        // Send confirmation to user
        await sendEmail(
            email,
            'Thank You for Contacting Me',
            confirmationEmailTemplate(name)
        );

        res.json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Get all contacts (admin only)
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark contact as read
exports.markAsRead = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete contact
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

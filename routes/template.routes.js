const express = require('express');
const router = express.Router();
const Template = require('../models/Template');

// Show all templates
router.get('/templates', async (req, res) => {
    const templates = await Template.find();
    res.render('pages/templates', { templates });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const File = require('../models/file');
const cloudinary = require('cloudinary').v2;
const { nanoid } = require('nanoid');
const { invalidHandler } = require('../middlewares')

router.post('/upload', invalidHandler, async (req, res) => {
    try {
        const file = req.files.file;
        await cloudinary.uploader.upload(file.tempFilePath, async (err, res) => {
            await File.create({
                originalLink: res.url,
                shortLink: nanoid()
            })
        });
        req.flash('success', 'File added successfully!');
        res.redirect('/');
    }

    catch (e) {
        res.render('error', { err: `Sorry, Something went Wrong!, ${e.message}` });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const file = await File.findOne({ shortLink: id });
        if (!file) {
            return res.render('error', { err: 'Sorry, file does not exist!' });
        }
        res.redirect(file.originalLink);
    }
    catch (e) {
        res.render('error', { err: `Sorry, Something went Wrong!, ${e.message}` });
    }
})

module.exports = router;
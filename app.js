require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const File = require('./models/file');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const session = require('express-session');
const flash = require('connect-flash');

app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    useTempFiles: true
}));

// configuring cloudinary
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mongodb connection
const dbURL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/fileUpload';
mongoose.connect(dbURL)
    .then(() => { console.log('DB connected!') })
    .catch(e => console.log(e));


// initializing session for flash
app.use(session({
    secret: '938rsdjhf',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// ------------------ routes
const uploadRoutes = require('./routes/upload');
app.use(uploadRoutes);

app.get('/', async (req, res) => {
    try {
        const files = await File.find({});
        res.render('home', { files });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
})

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT)
})
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

dotenv.config();

// Import Routes 
const authRoutes = require('./routes/auth.router');
const templateRoutes = require('./routes/template.routes');

const app = express();
const PORT = process.env.PORT || 8000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'resume_secret_key',
    resave: false,
    saveUninitialized: true
}));

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// static files
app.use(express.static('public'));

// Use Routes
app.use('/', authRoutes);
app.use('/', templateRoutes);

// Routes
app.get('/', (req,res) => {
    res.render('pages/home');
})

// DataBase Connection
const connectDB = require('./config/db');
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
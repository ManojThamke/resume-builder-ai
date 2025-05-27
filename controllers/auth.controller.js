const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.renderSignup = (req, res) => {
    res.render('pages/signup');
};

exports.renderLogin = (req, res) => {
    res.render('pages/login');
};

exports.signupUser = async (req, res) =>{
    const { name, email, password } = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.send('User already exists');

        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedpassword });
        await newUser.save();

        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.send('Invalid Email');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.send('Invalid Password');

        req.session.user = user;
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.logoutUser = (req, res) => {
    req.session.destroy(() =>{
        res.redirect('/login');
    });
};
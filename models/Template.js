const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type:String
    },
    category: {
        type: String,
        enum: ['free', 'standard', 'premium'],
        default: 'free'
    },
    thumbnailUrl: {
        type:String
    },
    htmlFile: {
        type: String
    }
});

module.exports = mongoose.model('Template', templateSchema);
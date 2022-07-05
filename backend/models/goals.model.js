const mongoose = require('mongoose');

const goalsSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Goal text is required']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goals', goalsSchema);
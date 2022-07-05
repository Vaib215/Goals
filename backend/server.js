const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000
const app = express();
const { errorHandler } = require('./middlewares/error.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goals.routes'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
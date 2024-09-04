const mongoose = require('mongoose');

const mongo=process.env.MONGO_URI;
mongoose.connect(mongo)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
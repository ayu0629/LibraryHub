const mongoose = require('mongoose');
const url='mongodb+srv://ayushiagarwal969:ayu06@cluster0.mfep6.mongodb.net/'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;
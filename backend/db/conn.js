const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GoFood')
     .then( ()=> console.log('Connection Successful.......'))
     .catch(()=> console.log('Connection Failed.'))


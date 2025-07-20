//const mongoose = require('mongoose')
//mongoose.connect(
    //'mongodb+srv://dwrigley1:P%40ssword123@songdb.inwjyep.mongodb.net/?retryWrites=true&w=majority&appName=SongDB',
  //  {useNewUrlParser: true}
//)

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


module.exports = mongoose
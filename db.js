const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://dwrigley1:P%40ssword123@songdb.inwjyep.mongodb.net/?retryWrites=true&w=majority&appName=SongDB',
    {useNewUrlParser: true}
)

module.exports = mongoose
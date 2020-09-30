const mongoose = require('mongoose');

// Crea la conexion con la base de datos
mongoose.connect('mongodb://localhost/mean-employees',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.error(err))
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://db_mongo_user:Abc1234@cluster0.gz8r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(()=>console.log('conexion exitosa!') )
        .catch((err) => console.log(err))

const mongo = require('mongoose');

mongo.connect("mongodb://localhost:27017/tp_mean", { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    ()=>{
       console.log('mongo connecté')
    }
);

module.exports = mongo;
let mongo = require('../myMongo')

users = new mongo.Schema({
    nom:{type: String},
    pass:{type: String},
});

let userCol = mongo.model('users', users);
module.exports = userCol;
let mongo = require('../myMongo')

tasks = new mongo.Schema({
    nom:{type: String},
    detail:{type: String},
    etat:{type: Number},
    idUser:{type: mongo.ObjectId}
});

let taskCol = mongo.model('tasks', tasks);
module.exports = taskCol;
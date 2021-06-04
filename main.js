const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongo = require('mongoose')
let app = new express()
let taskRout = require('./router/tasks.router')
let userRout = require('./router/users.router')
app.set('views', './vue')
app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static('./front'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/users",userRout);
app.use("/api/tasks",taskRout);
app.get("/", (req, res) => {
    res.send('coucou');
})
app.listen(8080)
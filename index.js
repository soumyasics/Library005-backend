const express = require('express')
const app = express();

const db = require('./DBConnection')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require('cors')
app.use(cors())

const route = require('./Route/route')
app.use('/',route)

app.use(express.static(`${__dirname}/upload`))

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`port connected on server ${PORT}`);
})

app.use(express.static(`${__dirname}/upload`))


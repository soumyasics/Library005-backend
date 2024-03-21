const express = require('express')
const app = express();

const db = require('./DBConnection')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require('cors')
app.use(cors())

const route = require('')
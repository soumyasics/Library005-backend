const express = require('express')
const app = express();

const db = require('./DBConnection')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

const route = require('')
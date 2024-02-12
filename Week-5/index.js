const express = require('express')
const bluebird = require('bluebird')
const mongoose - require('mongoose')
const app = express()
const port = 3000

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/Filesync")

const adapter = new FileSync("db.json")
const db = low(adapter)
    
db.defaults({ person: [] }).write()

const app = express()

app.db = db;

app.us(cors())
app.use(express.json())
app.use(morgan("dev"))

app.listen(PORT, () => console.log('The server is running on port ${PORT}'))
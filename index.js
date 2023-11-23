const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config({path: "./.env"})
const PORT = process.env.PORT || 8080
const app = express()
const AuthRoutes = require('./routes/auth.routes')
const DataRoutes = require('./routes/data.routes')

express.urlencoded({extended: true})
app.use(cors())
app.use(express.json())

app.use('/api', AuthRoutes)
app.use('/api', DataRoutes)

app.listen(PORT, () => console.log(`server has been started on port ${PORT}`))

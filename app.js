const express = require ('express');
const app = express()
const port = 5000;
const router = require('./routers');
const morgan = require('morgan');

app.use(router)

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(logger)

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/inierror', (req, res) => {
    iniError
})

// untuk menghandle kesalahan server
app.use(function(err, req, res, next){
    console.log(err);
    res.status(500).json({
        status: false,
        massage: err.message
    })
})

// untuk menghandle endpoint tersebut tidak ada
app.use(function (err, req, res, next) {
    res.status(404).json({
        status: 'false',
        massage: 'Are you lost?'
    })
})

app.listen(5000, () => {
    console.log("localhost", port);
})


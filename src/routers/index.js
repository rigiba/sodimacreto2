const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send("aca esta el acerca de")
    res.render('index')
})

router.post('/add', (req, res) => {
    res.send("proveedor agregado....")
})


module.exports = router
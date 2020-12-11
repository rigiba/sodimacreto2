const express = require('express')
const task = require('../models/task')
const router = express.Router()
const Task = require('../models/task')


router.get('/', async(req, res) => {
    // res.send("aca esta el acerca de")
    const tasks = await Task.find()
    console.log(tasks)
    res.render('index', {tasks})
})

router.post('/add', async(req, res)=>{
    const task = new Task(req.body)
    await task.save()
    res.send('Guardado correctamente')
    res.redirect('/')
})

module.exports = router
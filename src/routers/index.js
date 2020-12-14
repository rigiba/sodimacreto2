const express = require('express')
const router = express.Router()
const Task = require('../models/task')


router.get('/', async(req, res) => {
    // res.send("aca esta el acerca de")
    const tasks = await Task.find()
    //console.log(tasks)
    res.render('index', {tasks})
})

//para agregar un registro

router.post('/add', async(req, res)=>{
    const task = new Task(req.body)
    await task.save()
    res.redirect('/')
})

//para cambiar el status de un registro

router.get('/done/:id', async (req,res) => {
    // console.log(req.params)
    const { id } = req.params
    const task = await Task.findById(id)
    console.log(task.status)
    task.status = !task.status
    await task.save()
    // res.send("recibido")
    res.redirect('/')

})


//para borrar  o remover un registro
router.get('/delete/:id', async(req, res) => {
    //console.log(req.params)
    const {id}= req.params
    await Task.remove({_id: id})
    res.redirect('/')
})


//para modificar un registro
router.get('/edit/:id', async (req,res) => {
    const {id}=req.params
    const task = await Task.findById(id)
    res.render('edit', {
        task
    })

}) 

router.post('/update/:id', async (req, res) => {
    const {id}=req.params
    await Task.update({_id: id}, req.body)
    res.redirect('/') 
})



module.exports = router
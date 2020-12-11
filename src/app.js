const express = require('express')
const path = require('path') //modulo para unir las rutas windows o linux en los srv / o \
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

/*
motor de plantillas ejs
*/
//conexion base de datos
mongoose.connect("mongodb+srv://adminmongo:4DM1Nmongo.@clusterdatabases.nj2ti.mongodb.net/SodimacReto?retryWrites=true&w=majority")
    .then(db => console.log('Conexión a la Base de datos satisfactoria......'))
    .catch(err => console.log('Algo salio mal con la Base de datos.......'))

//imports
const indexRoutes = require('./routers/index')

//configuraciones
app.set('port', process.env.PORT || 3000)
//vistas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs') //llamando el motor de plantillas que ya esta en express , todos los archivos con extension ejs


//inicio serves


//midelware de express, aquello que voy a procesar antes de pasarlo al server (interpretar los verbos HTTP)
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))


//rutas
app.use('/', indexRoutes)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'home.html'))
// })

app.listen(app.get('port'), () => {
    console.log(`Server iniciando ... en el puerto ${app.get('port')}`)
})
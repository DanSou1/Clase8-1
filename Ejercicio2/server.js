/* IMPORTAR NUESTRO MIDDLEWARES */

import express from 'express'
import multer from 'multer'

/* DEFINIMOS RUTAS Y CONSTANTES */

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

/* CONFIGURAR MULTER */

const storage = multer.diskStorage({destination: function(req, file, cb){
    cb(null, 'uploads')
},
filename: function(req, file, cb){
    cb(null, `${Date.now()}-${file.originalname}`)
}
})
const uploads = multer({storage: storage});

//-------------------------------------------------

/* RUTAS */

app.post('/subir', uploads.single('miArchivo'), (req, res, next)=>{
    const file = req.file
    if (!file) {
        const error = new Error('Error subiendo el archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(`Archivo <b>${file.originalname}</b> Subido exitosamente!`)
})

/* CONFIGURACION DE SERVIDOR */

const PORT = 8080
const server = app.listen(PORT,() =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error=>{console.log(`Error en el servidor ${error}`)})
import express from 'express';
const app = express();
const routerMascotas = express.Router();
const routerPersonas = express.Router();


app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

/* /---------/ */

/* Mascotas */

const mascotas = []
routerMascotas.get('/listar', (req, res)=>{
    res.json(mascotas)
})
routerMascotas.post('/gurdar', (req, res)=>{
    mascotas.push(req.body)
    res.json(req.body)
})
/*  Personas */
const personas = []
routerPersonas.get('/listar',(req, res)=>{
    res.json(personas)
})
routerPersonas.post('/guardar',(req, res)=>{
    personas.push(req.body)
    res.json(req.body)
})
/* /---------/ */

/* Conectar servidor */

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto ${server.address().port}`)
})
server.on(`error`, (error)=>console.error(`Error en el servidor ${error}`))
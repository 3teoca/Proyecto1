const express = require ("express")
const path = require ("path")
const app = express()

app.use(express.static("public"))

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,"./views/home.html"))
    })

app.get('/login.html', function(req,res) {
    res.sendFile(path.join(__dirname,"./views/login.html"))
    })

app.get('/registro.html', function(req,res) {
    res.sendFile(path.join(__dirname,"./views/registro.html"))
    })


/* app.listen(3000, ()=> console.log("Funcionando en el puerto 3000")) */

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log("Funcionando en el puerto ${port}"));

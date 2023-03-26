const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('<html><head><title>Home</title></head><body><h1>Bienvenido al sistema de alumnos</h1><p>Por favor, visita la siguiente página para agregar un estudiante:</p><a href="/student">Agregar alumno</a></body></html>');
});


app.get('/student', (req, res) => {
    let t=req.params.id;
    res.render('student');
});


app.post('/addStudent', (req, res) => {
    res.render('displayData', { 
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre,
    });
});

app.listen(PORT);
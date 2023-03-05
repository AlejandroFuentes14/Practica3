var express = require('express'); //Importamos express
var app = express();//Creamos una instancia de express

var port = process.env.PORT || 3000;// Creamos una variable que escuche el servidor

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public')); //Creacion de la ruta para los assets
app.use('/', function(req, res, next) { //Creamos un middleware 
    console.log('Request Url: ' + req.url); //Imprimimos la url que se solicita
    next(); //Ejecutamos el siguiente middleware
});

app.get('/', function(req, res) { 
    res.render('index');
});

app.get('/person/:id', function(req, res) { 
    res.render('person', {ID: req.params.id});
});

app.get('/api', function(req, res) { 
    res.json({ firstname: 'John', lastname: 'Doe' });
});


app.listen(port);
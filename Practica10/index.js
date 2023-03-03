var express = require('express'); //Importamos express
var app = express();//Creamos una instancia

var port = process.env.PORT || 3000;

app.get('/', function(req, res) { //Creamos una ruta para home desde la raiz
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res) { //Creamos una ruta para el api regresando un json
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.get('/person/:id', function(req, res) { //Creamos una ruta para el person
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port);
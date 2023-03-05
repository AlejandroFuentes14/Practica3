var express = require('express'); //Importamos express
var app = express();//Creamos una instancia de express

var port = process.env.PORT || 3000;// Creamos una variable que escuche el servidor

app.use('/assets', express.static(__dirname + '/public')); //Creacion de la ruta para los assets
app.use('/', function(req, res, next) { //Creamos un middleware 
    console.log('Request Url: ' + req.url); //Imprimimos la url que se solicita
    next(); //Ejecutamos el siguiente middleware
});

app.get('/', function(req, res) { 
    cad = `<!DOCTYPE html> <html lang="en"> 
    <head> 
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/style.css" type="text/css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body> Hello world, desde la ruta root </body>
    </html>`;
    res.send(cad);
});

app.get('/person/:id', function(req, res) { 
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) { 
    res.json({ firstname: 'John', lastname: 'Doe' });
});


app.listen(port);
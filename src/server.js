const express = require('express');
const app=express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var myConnection = require('express-myconnection');
app.use(myConnection(mysql,{

      'host':'localhost',
      'user':'root',
      'password':'12345',
      'database':'calgary_park'
    },'request')
);
app.set('json spaces', 4);
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());  //"use" nos permite ejercutar middleware

const rutas= require('./routes/rutas');

app.use('/',rutas)

app.listen('9600',()=>{
  console.log('Aplicacion iniciada en el puerto 9600');
})

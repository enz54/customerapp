var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req,res,next){
//     console.log('Logging ...');
//     next();
// }

// app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Body-Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    { 
        id:1,
        first_name: 'John',
        last_name: 'Doe',
        email:'johndoe@mail.com'
    },
    { 
        id:2,
        first_name: 'Mary',
        last_name: 'Black',
        email:'maryblack@mail.com'
    },
    { 
        id:3,
        first_name: 'James',
        last_name: 'Ebony',
        email:'jamesebony@mail.com'
    }
]

app.get('/', function(req,res){
    res.render('index', {
        title:'Customers',
        users:users
    });
});

app.listen(3000, function(){
    console.log('Server started on Port 3000 ...');
});
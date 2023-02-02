const bodyParser = require('body-parser');
const express =require('express');
const exphbs =require('express-handlebars');
const mysql = require('mysql');
const handlebars = exphbs.create({extname: '.hbs'})

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005 ;

// Parsing middleware
//  Parse application

app.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
app.use(bodyParser.json());

// static Files
app.use(express.static('public'));

// Templating engine
app.engine('.hbs', handlebars.engine)
app.set('view engine' , '.hbs')

// Connection Pool

const pool = mysql.createPool({
    connectionLimit : 100,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    // password : process.env.DB_PASS,
    database : process.env.DB_NAME

})


// connextion to database
pool.getConnection((err,connection)=>{
    if (err)throw err; //not connected!
    console.log (`connection as ID `+ connection.threadId)
})



const routes=require('./server/routes/user')
app.use('/', routes) 




app.listen(port,()=>console.log(`listening on port ${port}`));
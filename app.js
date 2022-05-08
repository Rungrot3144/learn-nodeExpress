const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT||4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // res.send('Hello');
    // res.render ( "index" );
    // res.render ( "homepage" );
    // res.render('index',{username:'Artery111'});
    res.render('index',{username:'Artery111',customers:['kitti','kittikorn','kitty']});
})

app.listen(PORT,()=>{
    debug("Listening on port"+chalk.green(" : "+PORT));
})
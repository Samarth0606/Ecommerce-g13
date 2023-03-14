const express = require('express');
const app = express();
let path = require('path');
const mongoose = require('mongoose');
let seedDB = require('./seed');
let productRoutes = require('./routes/products/productsRoutes')
let ejsMate = require('ejs-mate');
mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/shopping-g13-app')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})


app.engine('ejs' , ejsMate);
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public'))); //static files
app.use(productRoutes);
// seedDB();


let port = 5000;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})
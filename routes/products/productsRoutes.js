let express = require('express');
const Product = require('../../models/product');
let router = express.Router();

// display all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find();
    res.render('product/index' , {products} )
})

// to get the form to add new producrt
router.get('/products/new' , (req,res)=>{
    res.render('product/new');
})

// toactually show a product in dbv
router.post('/products' , async(req,res)=>{
    let {name , img, price , desc} = req.body;
    await Product.create({name , img, price , desc});
    res.redirect('/products');
})

module.exports = router;
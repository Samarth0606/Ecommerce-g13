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

// to display a particular product
router.get('/products/:id' , async(req,res)=>{
    let {id} =  req.params;
    let foundProduct = await Product.findById(id);
    res.render('product/show' , {foundProduct})
})

// to display an edit form
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} =  req.params;
    let foundProduct = await Product.findById(id);
    res.render('product/edit' , {foundProduct});
})

// to actually chnegthe poduct in db
router.patch('/products/:id' , async (req,res)=>{
    let {id} =  req.params;
    let {name , price, img , desc} = req.body;
    await Product.findByIdAndUpdate(id , {name , price, img , desc} )
    res.redirect('/products');
})

module.exports = router;
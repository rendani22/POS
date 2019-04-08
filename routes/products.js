const express = require('express');
const router = express.Router();
//const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Product = require('../models/product');



//Get all the products
router.get('/product',(req,res,next) => {

	 Product.find().exec(function(err,pro){
	 	var hold = {};
	 	hold = pro;
	 	res.send(hold);
	 });
		


});


//Get Product based on the catogary selected
router.get('/productCategory',(req,res,next)=>{

	const category = req.body.category;

	Product.getProductByCategory(category, (err, name)=>{
		 
		// if(err) throw err;

		// if(!name){
		// 	return res.json({
		// 		 success:false,
		// 		 msg:'Category has not products'});
		// }

		if(err)
			throw err;

		if(name.length == 0){
			res.send("NO data")
		}else{
			res.send(name);
		}
		

	});
});

//Add a new product to the database 
router.post('/newproduct',(req,res,next) => {
	let newProduct = new Product({
		productCode: req.body.productCode,
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		category: req.body.category,
		picture: req.body.picture
	});

	Product.addProduct(newProduct,(err,product) =>{
		if(err){
			res.json({
				success: false,
				msg: 'Failed to insert product'
			});
		} else {
			res.json({
				success: true,
				msg: 'Product has been inserted'
			});
		}
	});
});


module.exports = router;

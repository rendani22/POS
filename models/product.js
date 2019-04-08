const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Product schema
const ProductSchema = mongoose.Schema({
	productCode:{
		type:Number,
		require:true
	},
	name: {
		type: String,
		require : true
		},
	description:{
	 	type: String
	 },
	 price:{
	 	type: Number,
	 	require : true
	 },
	 category:{
	 	type: String,
	 	require: true
	 },
	 picture:{
	 	type:String
	 }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.getProductById = function(id, callback) {
	Product.findById(id,callback);
}

module.exports.getProductByCategory = function(name, callback) {
	const query = {category:name}
	Product.find(query,callback);
}

module.exports.addProduct = function(newProduct, callback) {
	//if(err) throw err
	newProduct.save(callback);
}
	
module.exports.showAll = function() {
	// body...
	Product.find();
}


module.exports.getProdByName = function(name,callback){
	const query = {name : name}
	Product.findOne(query,callback);
}
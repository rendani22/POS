const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//inventory schema
const SalesSchema = mongoose.Schema({
	productCode:{
		type:Number,
		require:true
	},
	 saleDate:{
	 	type:Date,
	 	require:true
	 },
	 qauntitySold:{
	 	type:Number,
	 	require:true
	 },
	 userName:{
	 	type:String,
	 	require:true
	 }
});


const Sales = module.exports = mongoose.model('Sales', SalesSchema);

module.exports.getSaleById = function(id, callback) {
	Product.findById(id,callback);
}

// module.exports.getProductByName = function(name, callback) {
// 	const query = {name:name}
// 	Product.findOne(query,callback);
// }

module.exports.addSale = function(newSale, callback) {
	newSale.save(callback);
}
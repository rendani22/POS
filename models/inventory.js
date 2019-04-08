const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//inventory schema
const InventorySchema = mongoose.Schema({
	productCode:{
		type:Number,
		require:true
	},
	 lastUpdate:{
	 	type:Date,
	 	require:true
	 },
	 qauntity:{
	 	type:Number,
	 	require:true
	 },
	 userName:{
	 	type:String,
	 	require:true
	 }
});

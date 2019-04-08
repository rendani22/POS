const express = require('express');
const router = express.Router();
//const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Sale = require('../models/sale');

router.get('/sale',(req,res,next) => {
	
	
	res.send('../public/index.html');

	res.json({
		user: req.user
	});
});

router.post('/sold',(req,res,next) => {
	let sold = new Sale({
		productCode: req.body.productCode,
		saleDate: req.body.saleDate,
		qauntitySold: req.body.qauntitySold,
		userName: req.body.userName
	});

	Sale.addSale(sold,(err,sale) =>{
		if(err){
			res.json({
				success: false,
				msg: 'Failed to insert sale'
			});
		} else {
			res.json({
				success: true,
				msg: 'Sale has been inserted'
			});
		}
	});
});




module.exports = router;
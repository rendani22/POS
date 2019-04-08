const express = require('express');
const router = express.Router();
//const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Inventory = require('../models/inventory');

router.get('/inven',(req,res,next) => {
	
	
	res.send('Did it on my own');

	res.json({
		user: req.user
	});
});


module.exports = router;


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')


//Database connection
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database' + config.database);
});

//On error
mongoose.connection.on('error', (error) => {
	console.log('Databse error:' + error);
})

const app = express();

const users = require('./routes/users');
const products = require('./routes/products');
const sales = require('./routes/sales');
const inventorys = require('./routes/inventorys');

//Port number
const port  = 3001;

//Cors midleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//
app.use('/users', users);

app.use('/products', products);

app.use('/sales', sales);

app.use('/inventorys', inventorys);

//Index Router
app.get('/', (req, res) =>{
	res.send('Invalid endpoint')
})

//Start Server
app.listen(port, () => {
	console.log('Server stated on port: ' + port);
});

const express = require('express');
const sequelize = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Expenses = require('./models/Expenses');
const User = require('./models/User');
app.use(routes);


// sets up server and db using sequelize
sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log('app is listening')
  })
})
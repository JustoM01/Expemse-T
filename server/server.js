const express = require('express');
const sequelize = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


const User = require('./models/User');
app.use(routes);

sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log('app is listening')
  })
})
const router= require('express').Router();

const User = require('../../models/User');



router.post('/', async (req,res)=>{
    try{
    const newUser = await User.create(req.body)
   return res.json(newUser)
    } catch (err){
        res.status(400).json(err);
    }
})



module.exports= router;
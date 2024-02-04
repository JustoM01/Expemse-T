const router= require('express').Router();

const sequelize = require('../../config/connection');
const User = require('../../models/User');
const Expenses = require('../../models/Expenses')



// route for adding new use  using sequelize and my User model
router.post('/', async (req,res)=>{
    try{
    const newUser = await User.create(req.body)
   return res.json(newUser)
    } catch (err){
        res.status(400).json(err);
    }
})



router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ where: { username } });

        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored password
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If the username and password are valid, user is logged in
        return res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json(err);
    }
});

















// route for retrieving all users using sequelize and my User model
router.get('/', async (req,res)=>{
    try{
        const users = await User.findAll({})
        return res.json(users)
    } catch (err){
        res.status(500).json(err);
    }
})





router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Check if the user with the specified ID exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete associated expenses first (to trigger CASCADE)
        await Expenses.destroy({
            where: {
                user_id: userId
            }
        });

        // Now delete the user
        await User.destroy({
            where: {
                id: userId
            }
        });

        return res.json({ message: 'User and associated expenses deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});



router.put('/:id', async(req,res)=>{
    try{
 const userId = req.params.id;

 const userData = await User.findByPk(userId);
 if(!userId){res.json({message:"user id not foud"})};

 await User.update({
    username: req.body.username,
    email:req.body.email,
    password:req.body.password
 },
    {
    where:{id:userId}
 })
return res.json(userData)

    } catch(err){
        res.status(500).json(err);
    }

})






module.exports= router;
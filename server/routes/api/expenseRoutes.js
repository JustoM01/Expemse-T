const router = require('express').Router();
const Expenses = require('../../models/Expenses');


// route to create new expense using sequelize and my epense model
router.post('/', async(req,res)=>{
    try{
        const expenseData = await Expenses.create(req.body)
        return res.json(expenseData);
    }  catch (err) {
        res.status(500).json(err);
    }
})


// route to get all  expense data using sequelize and my epense model
router.get('/', async(req,res)=>{
    try{
        const expenseData = await
        Expenses.findAll({})
        return res.json(expenseData)
    } catch (err){
        res.status(500).json(err);
    }
})




router.delete('/:id', async(req,res)=>{
    try{


   // setting up var for id param
        const expenseId = req.params.id

// setting var for deleted expense after finding by id or findbyPK method
    const deletedExpense =    await Expenses.findByPk(expenseId)
        if(!expenseId){res.json('no expense found')}

// then after finding by id i want to destroy method using that id 
await Expenses.destroy({
    where:{
        id:expenseId
    }
})

return res.json(deletedExpense);
    }catch (err){
        res.status(500).json(err);
    }
})




router.put('/:id', async (req, res) => {
    try {
        const expenseId = req.params.id;

        // Check if the expense with the specified ID exists
        const expense = await Expenses.findByPk(expenseId);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Update the expense
        await Expenses.update(
            {
                // Specify the fields you want to update
                amount: req.body.amount, // Update amount with the request body data
                user_id:req.body.user_id
            },
            {
                where: {
                    id: expenseId
                }
            }
        );

        return res.json( expense );
        
    } catch (err) {
        res.status(500).json(err);
    }
});

















module.exports = router;
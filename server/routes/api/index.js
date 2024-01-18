const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');
// Prefix all routes defined in `userRoutes.js` with `/user
router.use('/user', userRoutes);
// Prefix all routes defined in `expenseRoutes.js` with `/expense
router.use('/expense', expenseRoutes);


module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Prefix all routes defined in `userRoutes.js` with `/user
router.use('/user', userRoutes);

module.exports = router;

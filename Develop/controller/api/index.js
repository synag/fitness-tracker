const router = require('express').Router();
const workOutRoutes = require('apiRoutes');



router.use('/workouts', workOutRoutes);



module.exports = router;
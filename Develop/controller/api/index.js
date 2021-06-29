const router = require('express').Router();
const apiRoute = require('./apiRoute');


router.use('/workouts', apiRoute);



module.exports = router;
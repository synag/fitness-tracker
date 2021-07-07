
const router = require("express").Router();
const {Workout} = require("../../models");


// NEED TO FIX
//GET workout routes
  router.get("/", (req, res) => {
    // WorkOut.find({})
         //TASK 1: Sum up all document fields and find totals
         Workout.aggregate( [
          {
            $addFields: {
              totalDuration: { $sum: "$exercises.duration" } ,
              
              
            }
          },
          
       ] )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  



 




//TASK 2 UPDATE - update workout routes 

router.put("/:id", async (req, res) => {
   await Workout.updateOne(
      {
        _id:req.params.id
      },
      {$push:{"exercises":req.body}}
   )
       
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });





//TASK 3 CREATE - create workout routes

router.post("/", (req, res) => {
  Workout.collection.insertOne([
   { "day":null,
  "exercises":[req.body],
  }
    
]).then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



//TASK 4 GET  workout in range

router.get("/range", (req, res) => {
  Workout.find(

    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;
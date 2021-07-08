const router = require("express").Router();
const { Workout } = require("../../models");

//GET workout routes
router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//TASK 2 UPDATE - update workout routes

router.put("/:id", async (req, res) => {
  await Workout.updateOne(
    {
      _id: req.params.id,
    },
    { $push: { exercises: req.body } }
  )

    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//TASK 3 CREATE - create workout routes

router.post("/", (req, res) => {
  Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
      // console.log(dbWorkouts)
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  console.log(req.body);
});

//TASK 4 GET  workout in range

router.get("/range", (req, res) => {

  Workout.aggregate([
  
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]).sort({ _id: -1 }).limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

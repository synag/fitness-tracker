
const router = require("express").Router();
const WorkOut = require("../../models/workout");



//GET workout routes
  router.get("/", (req, res) => {
    WorkOut.find({})
    //   .sort({ d: -1 })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  




//UPDATE workout update routes

router.put("/id", async (req, res) => {
   await WorkOut.Update(
       
   )
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });





//CREATE workout create workout routes

router.post("/", (req, res) => {
    WorkOut.create(req.body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



//GET  workout in range

router.get("/range", (req, res) => {
    WorkOut.find(

    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
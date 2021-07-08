const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { 
  type: Date,
  default:() => new Date(new Date().setDate(new Date().getDate())),
  },
  exercises:[{
  
  type: {
    type: String,
    trim: true,
    required: "Enter type of workout",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name",
  },
  duration: {
    type:Number,
    required: true,
  },
  weight: {
    type:Number,
    required: false,
  },
  reps: {
    type:Number,
    required: false,
  },
  sets: {
    type:Number,
    required: false,
  },
  distance: {
    type:Number,
    required: false,
  }

  }]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

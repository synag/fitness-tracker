const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { 
  type: Date,
  default: new Date(new Date().setDate(new Date().getDate())),
  },
  exercises:{ 
    typeof: {
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
    required: true,
  },
  reps: {
    type:Number,
    required: true,
  },
  sets: {
    type:Number,
    required: true,
  }
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

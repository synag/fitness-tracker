const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  typeof: {
    type: String,
    trim: true,
    required: "Enter type of workout"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name"
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
});

const Transaction = mongoose.model("workout", workoutSchema);

module.exports = Transaction;

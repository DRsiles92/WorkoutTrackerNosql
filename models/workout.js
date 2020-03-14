const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter if this is a resistence or cardio exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the exercise"
        },
        duration: {
            type: Number,
            required: "Enter number of minutes you did this exercise"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
);
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;

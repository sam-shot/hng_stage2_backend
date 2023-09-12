import mongoose, { Mongoose } from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})


export default mongoose.model('Person', personSchema)
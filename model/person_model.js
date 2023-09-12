import mongoose, { Mongoose } from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})


export default mongoose.model('Person', personSchema)
import mongoose from "mongoose";
import validator from  "validator";

const reservationSchema= new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        minLength: [3, "First name must contain atleast 2 characters"],
        maxLength: [12,"First name cannot exceed 12 characters"],


    },
    lastName: {
        type:String,
        required: true,
        minLength: [3, "Last name must contain atleast 2 characters"],
        maxLength: [20,"Last name cannot exceed 20 characters"],


    },
    email :{
        type:String,
        required:true,
        validate:[validator.isEmail, "Provide a valid email"],
    },
    phone:{
        type:String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits"],
        maxLength: [10,"Phone number must contain only 10 digits"],

    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})

export const Reservation= mongoose.model("Reservation",reservationSchema);

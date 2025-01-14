import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [20, "First name should not exceed 20 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [20, "Last name should not exceed 20 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, "Provide a valid phone number"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});


export const Reservation = mongoose.model("Reservation", reservationSchema);
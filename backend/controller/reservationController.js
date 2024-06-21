import ErrorHandler from '../error/error.js';

import {Reservation} from '../models/reservationSchema.js';

export const sendReservation = async(req,res,next)=>{
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler(400, "Please fill all the fields" ));
    }

    try {
       await Reservation.create({firstName, lastName, email, phone, date, time});

       res.status(200).json({
        success: true,
        message: "Reservation sent successfully",
       })
    } catch (error) {
        const newError = new ErrorHandler(400, `Failed to send Reservation____${error.message}`);

        return next(newError);
    }
}
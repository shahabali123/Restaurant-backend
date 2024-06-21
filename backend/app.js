import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import  resevationRouter  from './routes/reservationRoute.js'

const app = express();
dotenv.config({path: './config/config.env'});

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", resevationRouter);

dbConnection();


app.use(errorMiddleware);

export default app;
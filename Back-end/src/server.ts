import dotenv from 'dotenv';
dotenv.config();
process.env.MONGO_URL;

import bodyParser from 'body-parser';
import express from "express";
import cors from "cors";
import food from './router/food';
import user from './router/user';
import order from './router/order';
import { dbConnect } from './config/db.config';

dbConnect();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.use(express.json());


app.use("/api/foods", food);
app.use("/api/users", user);
app.use("/api/orders", order);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Welcome to the http://localhost:" + port);
    
}); 

  
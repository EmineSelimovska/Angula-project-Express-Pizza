import { Router } from "express";
import { sample_users } from "../data";
import 'dotenv/config';
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from "../models/User";
import bcrypt from 'bcryptjs';
import { Types } from "mongoose";
import { ObjectId } from "bson";



const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
      const usersCount = await UserModel.countDocuments();
      if(usersCount> 0){
         res.send('Seed is already done!');
         return;
      }
      await UserModel.create(sample_users);
      res.send('Seed is done!');
     }
 ))
router.post("/login", asyncHandler(
 async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({email});
 
 //&& (await bcrypt.compare(password,user.password))
    if (user && (await bcrypt.compare(password,user.password))) {
      res.send(generateToken(user))
    } else {
      res.status(400).send("User or password is not valid!");
    }
  }
));

router.post("/register", asyncHandler(
  async (req, res) => {
    const {name, email, password, address} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
      res.status(400).send('User is already exist, please login!');
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
 
  
    const newUser:User = {
      id:'',
      name,
      email: email.toLowerCase(),
      password: hashPassword,
      address,
      isAdmin: false,
     
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateToken(dbUser));
  }
))

const generateToken = (user: User) => {
  
  const token = jwt.sign(
    {
     id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET!,{
      expiresIn: "30d",
    }
);

 
return {
id: user.id,
  email: user.email,
  name: user.name,
  address: user.address,
  isAdmin: user.isAdmin,
  token: token
};
};

export default router;
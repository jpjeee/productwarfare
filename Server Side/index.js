import express from "express";
import cors from "cors";
import axios from "axios";
import pg from 'pg';
import env from "dotenv";  

const app=express();
env.config();
app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

app.post("/data",async(req,res)=>{
    const name=req.body.inptname;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const countryCode=req.body.countryCode;
    res.send("Data recieved successfully");
    await db.query("INSERT INTO clients(email,name,countrycode,phonenumber) VALUES ($1,$2,$3,$4)",[email,name,countryCode,phoneNumber])
})

app.listen(3000,()=>{console.log("The backend is running on port 3000")})


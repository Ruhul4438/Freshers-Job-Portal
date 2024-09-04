import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from 'path'


dotenv.config({})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected TO MongoDb');
})
.catch((err)=>{
    console.log(err)
});

const __dirname = path.resolve();

const app = express();

// app.get("/home",(req, res)=> {
//     return res.status(200).json({
//         message: "Iam coming from backend",
//         success: true
//     })
// })

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
  //  origin:  'http://localhost:5173',
    origin: process.env.URL ,
    credentials: true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(__dirname,'/frontend/dist')));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'frontend', 'dist','index.html'))
})

app.listen(PORT, ()=> {
  console.log(`Server running at port ${PORT}`)
})


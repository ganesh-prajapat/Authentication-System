import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true}));

app.use("/auth" , authRouter);

app.get("/" , (req,res) =>{
  res.send("Hello From the server");
})


const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is Started at Port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
  }
};

startServer();
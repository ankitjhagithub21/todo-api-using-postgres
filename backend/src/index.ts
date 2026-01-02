import "dotenv/config"
import express, { Request, Response } from 'express';
import cors from "cors"
import cookieParser from "cookie-parser";
import todoRoutes from "./routes/todoRoutes"
import userRoutes from "./routes/userRoutes"


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN,
  credentials:true
}))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.json({message:"Api working"});
});



app.use("/api/todos",  todoRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

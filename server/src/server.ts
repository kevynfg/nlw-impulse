import express from "express";
import { routes } from "./routes";
import cors from 'cors'
const app = express();

app.use(cors({
    origin: '*',
    methods: ["GET", "PUT", "POST", "DELETE"]
}))
app.use(express.json());

app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333");
});

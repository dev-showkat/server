import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/users`, userRoutes);
app.use(`/api/items`, itemRoutes);

app.use("*", (req, res) => {
  return res.status(200).json({
    message: "invalid path",
  });
});

app.use((err, req, res, next) => {
  const { message, statusCode } = err;
  return res.status(500).json({ message, statusCode });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

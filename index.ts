import express from "express";
import connectDB from "./src/infrastructure/database";
import adsRoutes from "./src/api/routes/ads.routes";

const app = express();
app.use(express.json());

connectDB();

app.use("/api", adsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
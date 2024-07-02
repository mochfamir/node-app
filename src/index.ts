// src/index.ts
import express from "express";

const app = express();

app.use(express.json());

app.use("/api", (req, res) => {
  res.status(200).json({ data: "halo" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

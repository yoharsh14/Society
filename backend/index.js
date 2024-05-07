import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(8080, async () => {
  console.log("Listening to port 8080");
});

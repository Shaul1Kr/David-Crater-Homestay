import express from "express";
const app = express();
const port = process.env.PORT;
import RoomsRouter from "./Rooms/routes";

app.use("/Rooms", RoomsRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

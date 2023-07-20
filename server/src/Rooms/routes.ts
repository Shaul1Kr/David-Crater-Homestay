import { Router } from "express";
import { getAvailableRooms, getAllRooms } from "./controller";
import bodyParser from "body-parser";

const router = Router();

router.post("/NotAvailableRooms", bodyParser.json(), getAvailableRooms);
router.get("/AllRooms", bodyParser.json(), getAllRooms);

export default router;

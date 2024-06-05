// set up routes (GET "/", POST "/", GET "/:id", PUT "/:id", DELETE "/:id")
import express from "express";
const router = express.Router();

import { todoAll, todoCreate, todoDetails, todoUpdate, todoDelete } from "../controllers/todo.js";

router.get("/", todoAll);

router.post("/", todoCreate);

router.get("/:id", todoDetails);

router.put("/:id", todoUpdate);

router.delete("/:id", todoDelete);

export default router;
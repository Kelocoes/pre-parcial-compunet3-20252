import express from "express";
import { boardController } from "../controllers/board.controller";

export const router = express.Router();

router.post("/", boardController.create);
router.get("/", boardController.getAll);
router.get("/:id", boardController.getById);
router.delete("/:id", boardController.deleteById);
router.put("/:id", boardController.updateById);
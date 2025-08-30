import express from "express";
import { threadController } from "../controllers/thread.controller";

export const router = express.Router();

router.post("/", threadController.create);
router.get("/:id", threadController.findById);
router.get("/board/:boardId", threadController.findByBoardId);
router.delete("/:id", threadController.delete);
router.post("/reply", threadController.createReply);
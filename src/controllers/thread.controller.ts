import { Request, Response } from "express";
import { threadService } from "../services/thread.service";

class ThreadController {
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const thread = await threadService.create(req.body);
            res.status(201).json(thread);
        } catch (error) {
            console.log(error);
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: error });
            }
        }
    }

    public async findById(req: Request, res: Response): Promise<void> {
        try {
            const thread = await threadService.findById(req.params.id || "");
            if (!thread) {
                res.status(404).json({ message: "Thread not found" });
            } else {
                res.status(200).json(thread);
            }
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async findByBoardId(req: Request, res: Response): Promise<void> {
        try {
            const threads = await threadService.findByBoardId(req.params.boardId || "");
            res.status(200).json(threads);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const thread = await threadService.delete(req.params.id || "");
            if (!thread) {
                res.status(404).json({ message: "Thread not found" });
            } else {
                res.status(200).json({ message: "Thread deleted successfully" });
            }
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async createReply(req: Request, res: Response): Promise<void> {
        try {
            const thread = await threadService.createReply(req.body);
            if (!thread) {
                res.status(404).json({ message: "Thread not found" });
            } else {
                res.status(200).json(thread);
            }
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }
}

export const threadController = new ThreadController();
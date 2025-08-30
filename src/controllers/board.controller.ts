import { Request, Response } from "express";
import { boardService } from "../services/board.service";

class BoardController {
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const board = await boardService.create(req.body);
            res.status(201).json(board);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const boards = await boardService.getAll();
            res.status(200).json(boards);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async getById(req: Request, res: Response): Promise<void> {
        try {
            const board = await boardService.getById(req.params.id || "");
            if (!board) {
                res.status(404).json({ message: "Board not found" });
            } else {
                res.status(200).json(board);
            }
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async deleteById(req: Request, res: Response): Promise<void> {
        try {
            const board = await boardService.deleteById(req.params.id || "");
            if (!board) {
                res.status(404).json({ message: "Board not found" });
            } else {
                res.status(200).json({ message: "Board deleted successfully" });
            }
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unexpected error occurred" });
            }
        }
    }

    public async updateById(req: Request, res: Response): Promise<void> {
        try {
            const board = await boardService.updateById(req.params.id || "", req.body);
            if (!board) {
                res.status(404).json({ message: "Board not found" });
            } else {
                res.status(200).json(board);
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

export const boardController = new BoardController();
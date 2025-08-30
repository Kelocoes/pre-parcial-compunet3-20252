import { BoardInput } from "../interfaces";
import { BoardDocument, BoardModel } from "../model";

class BoardService {

    public async create(boardInput: BoardInput): Promise<BoardDocument> {
        try {
            const boardCreated = BoardModel.create(boardInput);
            return boardCreated;
        } catch (error) {
            throw new Error(`Unable to create board: ${error}`);
        }
    }

    public async getAll(): Promise<BoardDocument[]> {
        try {
            const boards = BoardModel.find();
            return boards;
        } catch (error) {
            throw new Error(`Unable to get boards: ${error}`);
        }
    }

    public async getById(id: string): Promise<BoardDocument | null> {
        try {
            const board = BoardModel.findById(id);
            return board;
        } catch (error) {
            throw new Error(`Unable to get board by id: ${error}`);
        }
    }

    public async deleteById(id: string): Promise<BoardDocument | null> {
        try {
            const boardDeleted = BoardModel.findByIdAndDelete(id);
            return boardDeleted;
        } catch (error) {
            throw new Error(`Unable to delete board by id: ${error}`);
        }
    }

    public async updateById(id: string, boardInput: BoardInput): Promise<BoardDocument | null> {
        try {
            const boardUpdated = BoardModel.findByIdAndUpdate(id, boardInput, { new: true });
            return boardUpdated;
        } catch (error) {
            throw new Error(`Unable to update board by id: ${error}`);
        }
    }
}

export const boardService = new BoardService();
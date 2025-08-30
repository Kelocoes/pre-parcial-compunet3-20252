import mongoose from "mongoose";

export interface BoardDocument extends mongoose.Document {
    name: string;
    description: string;
    createdAt: Date;
}

const boardSchema = new mongoose.Schema<BoardDocument>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

export const BoardModel = mongoose.model<BoardDocument>('Board', boardSchema);
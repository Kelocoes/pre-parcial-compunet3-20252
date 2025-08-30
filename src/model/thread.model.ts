// models/thread.model.ts
import mongoose from "mongoose";

export interface Reply {
    message: string;
    createdAt: Date;
}

export interface ThreadDocument extends mongoose.Document {
    title: string;
    content: string;
    createdAt: Date;
    boardId: mongoose.Types.ObjectId;
    replies: Reply[];
}

const ReplySchema = new mongoose.Schema<Reply>({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const ThreadSchema = new mongoose.Schema<ThreadDocument>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    replies: { type: [ReplySchema], default: [] },
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true },
});

export const ThreadModel = mongoose.model<ThreadDocument>("Thread", ThreadSchema);

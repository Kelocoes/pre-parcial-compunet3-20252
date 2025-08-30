import { ReplyInput } from "../interfaces/reply.interface";
import { ThreadInput } from "../interfaces/thread.interface";
import { ThreadDocument, ThreadModel } from "../model";

class ThreadService {

    public async create(threadInput: ThreadInput): Promise<ThreadDocument> {
        try {
            const threadCreated = await ThreadModel.create(threadInput);
            return threadCreated;
        } catch (error) {
            throw new Error(`Unable to create thread: ${error}`);
        }
    }

    public async findById(threadId: string): Promise<ThreadDocument | null> {
        try {
            const thread = await ThreadModel.findById(threadId).exec();
            return thread;
        } catch (error) {
            throw new Error(`Unable to find thread by ID: ${error}`);
        }
    }

    public async findByBoardId(boardId: string): Promise<ThreadDocument[]> {
        try {
            const threads = await ThreadModel.find({ boardId }).exec();
            return threads;
        } catch (error) {
            throw new Error(`Unable to find threads by board ID: ${error}`);
        }
    }

    public async delete(threadId: string): Promise<ThreadDocument | null> {
        try {
            const threadDeleted = await ThreadModel.findByIdAndDelete(threadId).exec();
            return threadDeleted;
        } catch (error) {
            throw new Error(`Unable to delete thread: ${error}`);
        }
    }

    public async createReply(replyInput: ReplyInput): Promise<ThreadDocument | null> {
        try {
            const thread = await ThreadModel.findById(replyInput.threadId).exec();
            if (!thread) {
                throw new Error('Thread not found');
            }
            thread.replies.push({
                message: replyInput.message,
                createdAt: new Date()
            });
            const threadSaved = await thread.save();
            return threadSaved;
        } catch (error) {
            throw new Error(`Unable to create reply: ${error}`);
        }
    }
}

export const threadService = new ThreadService();
// src/models/Thought.ts
import { Schema, model, Document } from 'mongoose';

interface IReaction extends Document {
    reactionBody: string;
    username: string;
    createdAt: Date;
}

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
}

const reactionSchema = new Schema<IReaction>({
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const thoughtSchema = new Schema<IThought>({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema]
});

const Thought = model<IThought>('Thought', thoughtSchema);
export default Thought;

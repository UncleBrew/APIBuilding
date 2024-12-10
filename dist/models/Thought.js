"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Thought.ts
const mongoose_1 = require("mongoose");
const reactionSchema = new mongoose_1.Schema({
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const thoughtSchema = new mongoose_1.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema]
});
const Thought = (0, mongoose_1.model)('Thought', thoughtSchema);
exports.default = Thought;

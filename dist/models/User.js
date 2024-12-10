"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/User.ts
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/.+@.+\..+/, 'Must match an email address format'] },
    thoughts: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }]
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;

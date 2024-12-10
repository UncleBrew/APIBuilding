"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/thoughtRoutes.ts
const express_1 = require("express");
const Thought_1 = __importDefault(require("../models/Thought"));
const router = (0, express_1.Router)();
router.get('/thoughts', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thoughts = yield Thought_1.default.find();
        res.json(thoughts);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}));
router.post('/thoughts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newThought = yield Thought_1.default.create(req.body);
        res.json(newThought);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}));
router.put('/thoughts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedThought = yield Thought_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}));
router.delete('/thoughts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Thought_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Thought deleted' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}));
exports.default = router;

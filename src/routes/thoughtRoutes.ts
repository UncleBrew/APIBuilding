// src/routes/thoughtRoutes.ts
import { Router, Request, Response } from 'express';
import Thought from '../models/Thought';

const router = Router();

router.get('/thoughts', async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

router.post('/thoughts', async (req: Request, res: Response) => {
    try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

router.put('/thoughts/:id', async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

router.delete('/thoughts/:id', async (req: Request, res: Response) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.json({ message: 'Thought deleted' });
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

export default router;

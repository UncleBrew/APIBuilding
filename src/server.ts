// src/server.ts
import express from 'express';
import db from './config/connection.js';
import userRoutes from './routes/userRoutes.js';
import thoughtRoutes from './routes/thoughtRoutes.js';

const cwd = process.cwd();
const PORT = 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities') ? cwd.split('01-Activities')[1] : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', thoughtRoutes);
app.use('/api', userRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});

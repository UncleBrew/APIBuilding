"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const connection_js_1 = __importDefault(require("./config/connection.js"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const thoughtRoutes_js_1 = __importDefault(require("./routes/thoughtRoutes.js"));
const cwd = process.cwd();
const PORT = 3001;
const app = (0, express_1.default)();
// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities') ? cwd.split('01-Activities')[1] : cwd;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', thoughtRoutes_js_1.default);
app.use('/api', userRoutes_js_1.default);
connection_js_1.default.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});

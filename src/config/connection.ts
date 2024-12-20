// src/config/connection.ts
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default db;

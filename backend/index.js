import express from "express";
import router from "./router/routes.js";
import cors from "cors";
import DBconnection from "./Database/db.js";
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/api', authRoutes);  // Add this line to use the auth routes

const PORT = process.env.PORT || 8000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URI=process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@file.hng0fkz.mongodb.net/?retryWrites=true&w=majority&appName=file`
DBconnection(URI);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
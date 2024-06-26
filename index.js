import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import assistantRouter from './routes/assistantRouter.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/assistants', assistantRouter);  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// DEPENDENCIES 
// Because I referenced an older example and configured for ES Modules instead of CommonJS so I will be using import rather than require(). 
import express from 'express';
import dotenv from 'dotenv';
import movieRouter from './routes/movieRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.json());
app.use('/api', movieRouter);

// PORT 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
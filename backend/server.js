import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // Add js extension when we use import
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config(); // must be in the beginning

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server stared on port ${port}`.rainbow));

import express from 'express';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(8800, () => {
  console.log('Connected!');
});

import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(8800, () => {
  console.log('Connected!');
});

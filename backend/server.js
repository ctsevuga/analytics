import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import questionRoutes from './routes/questionRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import practiceRoutes from './routes/practiceRoutes.js';
import topicRoutes from './routes/topicRoutes.js';
import subjectsExamRoutes from './routes/subjectsExamRoutes.js';
import practicesExamRoutes from './routes/practicesExamRoutes.js';
import userRoutes from './routes/userRoutes.js';
import resultRoutes from './routes/resultRoutes.js';
// import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/practices', practiceRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/subjectExams', subjectsExamRoutes);
app.use('/api/practicesExams', practicesExamRoutes);
app.use('/api/results', resultRoutes);
// app.use('/api/upload', uploadRoutes);

// app.get('/api/config/paypal', (req, res) =>
//   res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
// );

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }


  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );


app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);

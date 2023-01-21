import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import apiRoutes from './routes/api/index.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Define Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@syncup.jv1usdq.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch((err) => console.log(err));

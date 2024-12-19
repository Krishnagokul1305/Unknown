// index.js
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compilerRoutes from './route/javaRoute.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev')); // Log requests
app.use(bodyParser.json());

// Routes
app.use('/api/compiler', compilerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

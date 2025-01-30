import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import errorHandler from './middlewares/errorMiddleware.js';
import cors from 'cors';

// Import Routes
import router from './routes/authRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDB();
// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors({
    origin: '*', // Replace with your actual frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],         // Allowed HTTP methods
    credentials: true                                  // Allow cookies, tokens, etc.
  }));

// Routes
app.use('/api/auth', router);          
app.use('/certificate',certificateRoutes);
app.use('/api/course',courseRoutes);
app.use(errorHandler);

// Base route
app.get('/', (req, res) => {
    res.send('Welcome to the Learning Platform API!');
});

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack.red);
    res.status(500).json({
        success: false,
        message: 'Server error',
        error: err.message,
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow.bold);
});

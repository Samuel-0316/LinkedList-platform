// errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Server Error';
    
    // Log the error for internal tracking
    console.error(err);

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Show stack trace in non-production environments
    });
};

export default errorHandler;

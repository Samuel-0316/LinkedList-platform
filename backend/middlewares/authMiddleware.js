import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
    let token;

    try {
        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]; // Extract token

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user and attach to request
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            next(); // Pass control to the next middleware or route
        } else {
            return res.status(401).json({ message: 'Not authorized, no token provided' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, invalid token', error });
    }
};

export { protect };

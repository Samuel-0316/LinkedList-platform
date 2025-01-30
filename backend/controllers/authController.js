import bcrypt from 'bcrypt';
import User from '../models/User.js';
import sendResponse from '../utils/responseHandler.js';
import generateToken from '../utils/generateToken.js';

// Signup
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return sendResponse(res, 400, 'User already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 5);

        // Create new user
        const user = await User.create({ username, email, password: hashedPassword });
        sendResponse(res, 201, 'User registered successfully', user);
    } catch (error) {
        sendResponse(res, 500, 'Error signing up', error);
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return sendResponse(res, 404, 'User not found');
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return sendResponse(res, 401, 'Invalid credentials');
        }

        // Generate token
        const token = generateToken(user._id);
        sendResponse(res, 200, 'Login successful', { token, username:user.username });
    } catch (error) {
        sendResponse(res, 500, 'Error logging in', error);
    }
};


export { signup, login };

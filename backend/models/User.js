import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  quizzesTaken: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    },
  ],
  course1Completed: { type: Boolean, default: false },
  course2Completed: { type: Boolean, default: false },
  course3Completed: { type: Boolean, default: false },
  course4Completed: { type: Boolean, default: false },
  course5Completed: { type: Boolean, default: false },
  course6Completed: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update isCompleted when all courses are marked completed
userSchema.pre('save', function (next) {
  const allCourses = [
    this.course1Completed,
    this.course2Completed,
    this.course3Completed,
    this.course4Completed,
    this.course5Completed,
    this.course6Completed,
  ];
  this.isCompleted = allCourses.every((course) => course === true);
  next();
});

const User = mongoose.model('User', userSchema);

export default User;

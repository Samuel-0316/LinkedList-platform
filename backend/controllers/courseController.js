import User from '../models/User.js';

export const completeCourse = async (req, res) => {
    try {
      const { courseId } = req.body; // Expecting courseId as 1, 2, 3, ...
      const userId = req.user.id; // Assuming user authentication is handled
  
      if (!courseId || courseId < 1 || courseId > 6) {
        return res.status(400).json({ message: 'Invalid course ID. Must be between 1 and 6.' });
      }
  
      const courseKey = `course${courseId}Completed`; // Dynamically generate field name
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Update the corresponding course field
      user[courseKey] = true;
      await user.save();
  
      // Check if all courses are completed
      const allCoursesCompleted = ['course1Completed', 'course2Completed', 'course3Completed', 'course4Completed', 'course5Completed', 'course6Completed']
        .every(course => user[course]);
  
      if (allCoursesCompleted) {
        user.isCompleted = true;
        await user.save();
      }
  
      res.status(200).json({ 
        message: `Course ${courseId} marked as completed.`,
        isCompleted: user.isCompleted,
      });
    } catch (error) {
      console.error('Error marking course as completed:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };

  export const getUserProgress = async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user authentication is handled
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      const progress = {
        username: user.username,
        isCompleted: user.isCompleted,
        coursesCompleted: {
          course1: user.course1Completed,
          course2: user.course2Completed,
          course3: user.course3Completed,
          course4: user.course4Completed,
          course5: user.course5Completed,
          course6: user.course6Completed,
        }
      };
  
      res.status(200).json(progress);
    } catch (error) {
      console.error('Error fetching user progress:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  
  
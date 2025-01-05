import Leaderboard from '../models/Leaderboard.js';

const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find({})
            .populate('user', 'username')
            .populate('quiz', 'title')
            .sort({ score: -1 });

        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
};

export { getLeaderboard };

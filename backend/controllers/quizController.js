import Quiz from '../models/Quiz.js';

const createQuiz = async (req, res) => {
    try {
        const { title, topic, questions } = req.body;

        const quiz = await Quiz.create({ title, topic, questions });
        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        res.status(500).json({ message: 'Error creating quiz', error });
    }
};

const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({});
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error });
    }
};

export { createQuiz, getQuizzes };

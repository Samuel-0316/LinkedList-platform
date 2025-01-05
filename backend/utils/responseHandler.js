const sendResponse = (res, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        message: message,
        data: data,
    });
};

export default sendResponse;

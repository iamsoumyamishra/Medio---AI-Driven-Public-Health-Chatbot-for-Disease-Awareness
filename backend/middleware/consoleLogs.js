const consoleLogs = (req, res, next) => {
    console.log(`Request URL: ${req.url} - Time: ${new Date().toISOString()}`);
    next();
};

export default consoleLogs;
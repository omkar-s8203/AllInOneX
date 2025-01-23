module.exports = (req, res, next) => {
    console.log('Auth middleware');
    next();  // Allow request to proceed
};

const validateUsername = (username) => {
    return username && username.length >= 3;
};

module.exports = {
    validateUsername
};

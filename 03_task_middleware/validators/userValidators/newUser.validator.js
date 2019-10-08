module.exports = userObj => {
    const {email, name, password} = userObj;

    if (!email || !password || !name) {
        throw new Error('User object is not valid');
    }

}
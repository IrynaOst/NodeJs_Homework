module.exports = (userId, id) => {
    
    if (+userId !== id) {
        throw new Error('It not your user');
    }
}
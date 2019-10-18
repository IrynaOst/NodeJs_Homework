const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try { 
        const {userId} = req.params;
        const isUserPresent = await userService.getById(userId);

        if (!isUserPresent) {
            throw new Error(`User with ID ${userId} is not present`);
        }

        req.user = isUserPresent;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }

}
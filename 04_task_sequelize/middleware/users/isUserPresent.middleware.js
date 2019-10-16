const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try { 
        const {userId} = req.params;
        const UserModel = dataBase.getModel('User');

        let isUserPresent = await UserModel.findByPk(userId);

        if (!isUserPresent) {
            throw new Error(`User with ID ${userId} is not present`);
        }

        req.user = isUserPresent.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }

}
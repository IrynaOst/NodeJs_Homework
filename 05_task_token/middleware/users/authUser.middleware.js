const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const UserModel = dataBase.getModel('User');

        const foundUser = await UserModel.findOne({ 
            where: {
                email,
                password
            },
            attributes: ['id', 'name', 'email']
        })
        
        if (!foundUser) {
            throw new Error ('Invalid email or password');
        }

        req.user = foundUser.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}
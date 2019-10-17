const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const UserModel = dataBase.getModel('User');

        const results = await UserModel.create(userToCreate);
        let userId = results.dataValues.id;

        res.redirect(`users/${userId}`);
    } catch (e) {
        res.json(e.message);
    }
    
}
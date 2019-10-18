const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {userId} = req.params;
        const UserModel = dataBase.getModel('User');
        const HouseModel = dataBase.getModel('House');

        const users = await HouseModel.findAll({
            where: {
                user_id: userId
            },
            include: [{
                model: UserModel,
                attributes: ['name', 'email', 'id']
            }]
        });

        res.json(users);
    } catch (e) {
        res.json(e.message)
    }
} 
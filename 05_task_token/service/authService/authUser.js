const dataBase = require('../../dataBase').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    const user = await UserModel.findOne({ 
        where: {
            email,
            password
        },
        attributes: ['id']
    })
    
    return user && user.dataValues;
}
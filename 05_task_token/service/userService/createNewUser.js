const dataBase = require('../../dataBase').getInstance();

module.exports = async newUser => {
    const UserModel = dataBase.getModel('User');
    
    const newUserObj = await UserModel.create(newUser); 

    return newUserObj && newUserObj.dataValues && newUserObj.dataValues.id;
}
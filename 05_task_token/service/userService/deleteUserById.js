const dataBase = require('../../dataBase').getInstance();
  
module.exports = async userById => {
    const UserModel = dataBase.getModel('User');
    
    await UserModel.destroy({
        where: {
           id: userById  
        } 
    }); 
}
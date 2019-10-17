const dataBase = require('../../dataBase').getInstance();
  
module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body; 
        const {userId} = req.params;
        const UserModel = dataBase.getModel('User');
        
        await UserModel.update(userToUpdate, {
            where: {
                id: userId 
            }
        });

        res.redirect(`/users/${userId}`);
    } catch (e) {
        res.json(e.message);
    }
}

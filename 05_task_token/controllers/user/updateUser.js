const {userService} = require('../../service');
const {userValidator} = require('../../validators');
  
module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body; 
        const {userId} = req.params;
        const {id} = req.user;

        userValidator.isUseIdVeritableValidator(userId, id);

        await userService.updateUserByParams({id: userId}, userToUpdate);

        res.redirect(`/users/${userId}`);
    } catch (e) {
        res.json(e.message);
    } 
}

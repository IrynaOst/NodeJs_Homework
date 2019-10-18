const {userService} = require('../../service');
  
module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body; 
        const {userId} = req.params;

        await userService.updateUserByParams({id: userId}, userToUpdate);

        res.redirect(`/users/${userId}`);
    } catch (e) {
        res.json(e.message);
    } 
}

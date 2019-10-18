const {userService} = require('../../service');
  
module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body; 
        const {userId} = req.params;
        const {id} = req.user;

        if (+userId !== id) {
            throw new Error('It not your user')
        }

        await userService.updateUserByParams({id: userId}, userToUpdate);

        res.redirect(`/users/${userId}`);
    } catch (e) {
        res.json(e.message);
    } 
}

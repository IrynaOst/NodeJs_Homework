const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userId} = req.params;
        const {id} = req.user;

        if (+userId !== id) {
            throw new Error('It not your user');
        }

        await userService.deleteUserById(userId);
      
        res.json(`User with id ${userId} is deleted`);
    } catch (e) {
        res.json(e.message);
    }
}
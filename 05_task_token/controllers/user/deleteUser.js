const {userService} = require('../../service');
const {userValidator} = require('../../validators')

module.exports = async (req, res) => {
    try {
        const {userId} = req.params;
        const {id} = req.user;

        userValidator.isUseIdVeritableValidator(userId, id);

        await userService.deleteUserById(userId);
      
        res.json(`User with id ${userId} is deleted`);
    } catch (e) {
        res.json(e.message);
    }
}
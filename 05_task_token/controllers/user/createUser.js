const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        const results = await userService.createNewUser(userToCreate);
        const userId = results;

        res.redirect(`users/${userId}`);
    } catch (e) {
        res.json(e.message);
    }
}
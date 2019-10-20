const {userService, emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        const results = await userService.createNewUser(userToCreate);
        const userId = results;

        await emailService.sendEmail(userToCreate.email);

        res.redirect(`users/${userId}`);

    } catch (e) {
        res.json(e.message);
    }
}
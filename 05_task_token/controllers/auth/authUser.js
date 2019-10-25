const {tokinazer} = require('../../helpers');

module.exports = (req, res) => {
    try {
        const user = req.user;
        const token = tokinazer(user);

        res.render('success-login', token);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

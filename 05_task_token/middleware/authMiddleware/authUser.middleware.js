const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const foundUser = await authService.authUser(email, password);
        
        if (!foundUser) {
            throw new Error ('Invalid email or password');
        }

        req.user = foundUser;
        //global.userName = foundUser.name;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}
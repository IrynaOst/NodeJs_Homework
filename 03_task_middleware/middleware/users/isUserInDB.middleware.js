const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;
        const [foundUser] = await provider.promise().query(query);

        if (!foundUser.length) {
            throw new Error ('Invalid email or password');
        }

        [req.user] = foundUser;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}
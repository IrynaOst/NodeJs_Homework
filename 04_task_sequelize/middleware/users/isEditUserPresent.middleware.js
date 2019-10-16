const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try { 
        const {id} = req.body;
        const query = `SELECT * FROM user WHERE id = ${id}`;
        const [isUserPresent] = await provider.promise().query(query);

        if (!isUserPresent.length) {
            throw new Error(`User with ID ${id} is not present`);
        }

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }

}
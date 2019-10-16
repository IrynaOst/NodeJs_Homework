const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {houseId} = req.params;
        const query = `SELECT * FROM house WHERE id = ${houseId}`;
        const [isHousePresent] = await provider.promise().query(query);

        if (!isHousePresent.length) {
            throw new Error(`User with ID ${houseId} is not present`);
        }

        [req.house] = isHousePresent;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}


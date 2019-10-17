const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {houseId} = req.params;
        const HouseModel = dataBase.getModel('House');

        const isHousePresent = await HouseModel.findByPk(houseId);

        if (!isHousePresent) {
            throw new Error(`User with ID ${houseId} is not present`);
        }

        req.house = isHousePresent.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}


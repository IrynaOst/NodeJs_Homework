const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try { 
        const {houseId} = req.params;
        const isHousePresent = await houseService.getHouseById(houseId);

        if (!isHousePresent) {
            throw new Error(`House is not present`);
        }

        req.house = isHousePresent;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }

}


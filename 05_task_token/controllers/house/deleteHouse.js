const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {houseId} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        if (+user_id !== id) {
            throw new Error('It not your house');
        }

        await houseService.deleteHouseById(houseId);
      
        res.json(`House with id ${houseId} is deleted`);
    } catch (e) {
        res.json(e.message);
    }
}
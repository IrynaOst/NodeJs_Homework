const {houseService} = require('../../service');
const {userValidator} = require('../../validators');

module.exports = async (req, res) => {
    try {
        const {houseId} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        userValidator.isUseIdVeritableValidator(user_id, id);

        await houseService.deleteHouseById(houseId);
      
        res.json(`House with id ${houseId} is deleted`);
    } catch (e) {
        res.json(e.message);
    }
}
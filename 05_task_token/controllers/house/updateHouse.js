const {houseService} = require('../../service');
const {userValidator} = require('../../validators');
  
module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body; 
        const {houseId} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        userValidator.isUseIdVeritableValidator(user_id, id);

        await houseService.updateHouseByParams({id: houseId}, houseToUpdate);

        res.redirect(`/houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    } 
}
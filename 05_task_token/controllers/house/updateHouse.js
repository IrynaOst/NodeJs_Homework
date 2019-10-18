const {houseService} = require('../../service');
  
module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body; 
        const {houseId} = req.params;

        await houseService.updateHouseByParams({id: houseId}, houseToUpdate);

        res.redirect(`/houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    } 
}
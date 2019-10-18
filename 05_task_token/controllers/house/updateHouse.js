const {houseService} = require('../../service');
  
module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body; 
        const {houseId} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        if (+user_id !== id) {
            throw new Error('It not your house. Go out!');
        }

        await houseService.updateHouseByParams({id: houseId}, houseToUpdate);

        res.redirect(`/houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    } 
}
const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body; 
        const {houseId} = req.params;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(houseToUpdate, {
            where: {
                id: houseId 
            }
        });

        res.redirect(`/houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}
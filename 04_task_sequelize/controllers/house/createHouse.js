const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const HouseModel = dataBase.getModel('House');
        
        const results = await HouseModel.create(houseToCreate);
        let houseId = results.dataValues.id;

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
    
}

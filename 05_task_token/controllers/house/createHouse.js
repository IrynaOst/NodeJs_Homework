const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const {id} = req.user;

        const results = await houseService.createNewHouse(houseToCreate, id);
        const houseId = results;

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}

const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const {id} = req.user;

        const {houseId} = await houseService.createNewHouse(houseToCreate, id);

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}

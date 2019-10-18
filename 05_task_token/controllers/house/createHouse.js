const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;

        const results = await houseService.createNewHouse(houseToCreate);
        const houseId = results;

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}

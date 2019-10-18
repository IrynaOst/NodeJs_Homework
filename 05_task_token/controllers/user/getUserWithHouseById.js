const {userService, houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userId} = req.params;

        const houses = await houseService.getHousesByUserId(userId);
        const user = await userService.getById(userId);

        user.houses = houses;

        res.json(user);
    } catch (e) {
        res.json(e.message)
    }
} 
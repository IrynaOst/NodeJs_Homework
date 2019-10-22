const {resolve} = require('path');
const fs = require('fs');
const uuid = require('uuid');

const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const {id} = req.user;
        const photos = req.photos;
        const appRoot = global.appRoot;

        const houseId = await houseService.createNewHouse(houseToCreate, id);

        if (!houseId) {
            throw new Error('House is not created');
        }

        const photoDir = `user/${id}/house/${houseId}/photos`;
        await fs.mkdirSync(resolve(appRoot, 'static', photoDir), {recursive: true});
        
        for (let i = 0; i < photos.length; i++) {
            const photoExtension = photos[i].name.split('.').pop();
            const roundomName = uuid();
            const photoName = `${roundomName}.${photoExtension}`;

            await photos[i].mv(resolve(appRoot, 'static', photoDir, photoName));
            await houseService.uploadHousePhotos({house_id: houseId, path: `${photoDir}/${photoName}`})
        }

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}

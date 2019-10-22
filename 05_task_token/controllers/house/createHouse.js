const {resolve} = require('path');
const fs = require('fs');
const uuid = require('uuid');

const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const {id} = req.user;
        const photos = req.photos;
        const docs = req.docs;
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

        const docDir = `user/${id}/house/${houseId}/docs`;
        await fs.mkdirSync(resolve(appRoot, 'static', docDir), {recursive: true});
        
        for (let i = 0; i < docs.length; i++) {
            const docExtension = docs[i].name.split('.').pop();
            const roundomName = uuid();
            const docName = `${roundomName}.${docExtension}`;

            await docs[i].mv(resolve(appRoot, 'static', docDir, docName));
            await houseService.uploadHouseDocs({house_id: houseId, path: `${docDir}/${docName}`})
        }

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
}

const {resolve} = require('path');
const fs = require('fs');
const uuid = require('uuid').v1();

const {userService, emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const [photo] = req.photos;
        const appRoot = global.appRoot;
        
        const userId = await userService.createNewUser(userToCreate);
        
        if (!userId) {
            throw new Error('User is not created');
        }

        const photoDir = `user/${userId}/photos`;
        const photoExtension = photo.name.split('.').pop();
        const photoName = `${uuid}.${photoExtension}`;

        await fs.mkdirSync(resolve(appRoot, 'static', photoDir), {recursive: true});

        await photo.mv(resolve(appRoot, 'static', photoDir, photoName));

        await userService.updateUserByParams({id: userId}, {photo_path: `${photoDir}/${photoName}`});

        await emailService.sendEmail(userToCreate.email);
       
        res.redirect(`users/${userId}`);
    } catch (e) {
        res.json(e.message);
    }
}
const {filesCheck} = require('../../constant');
const ErrorHendler = require('../../error/ErrorHendler');

module.exports = (req, res, next) => {

    req.photos = [];
    req.docs = [];

    if(!(req.files)) {
        next();
    }

    const files = Object.values(req.files);

   for (let i = 0; i < files.length; i++) {
        const {mimetype, size, name} = files[i];
         
        if (filesCheck.PHOTO_MIMETYPES.includes(mimetype)) {

           if (filesCheck.MAX_PHOTO_SIZE < size) {
                return next(new ErrorHendler(
                    `Max file size is ${filesCheck.MAX_PHOTO_SIZE}mb`, 
                    400, 
                    'photoFileChecker')
                );
            }
            req.photos.push(files[i]);
        }
        else if (filesCheck.DOC_MIMETYPES.includes(mimetype)) {

            if (filesCheck.MAX_DOC_SIZE < size) {
                return next(new ErrorHendler(
                    `Max file size is ${filesCheck.MAX_DOC_SIZE / (1024 * 1024)}mb`, 
                    400, 
                    'fileChecker')
                );
            }
            req.docs.push(files[i]);

        } else {
            next(new ErrorHendler(`File ${name} is not valid`, 400, 'fileChecker'));
        }   
    }
    next();
}
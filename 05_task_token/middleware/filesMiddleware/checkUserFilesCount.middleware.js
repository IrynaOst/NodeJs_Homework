const ErrorHendler = require('../../error/ErrorHendler')

module.exports = (req, res, next) => {
    const photos = req.photos;
    const docs = req.docs;

    if (docs.length) {
        return next(new ErrorHendler(`You can't upload documents to user`, 400, 'checkUserFilesCount'));
    }

    if (photos.length > 1) {
        return next(new ErrorHendler(`You can upload just one photo`, 400, 'checkUserFilesCount'));
    }

    next();
}
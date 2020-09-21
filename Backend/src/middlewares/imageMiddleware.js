const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const path = require('path');
const multerConfig = require('../config/multerConfig');

exports.upload = multer(multerConfig).single('photo');

exports.resize = async (req, res, next) => {
    if (!req.file) return next();

    const ext = req.file.mimetype.split('/')[1];
    const filename = `${uuid.v4()}.${ext}`;

    req.body.photo = filename;

    const photo = await jimp.read(req.file.buffer);
    // tamanho do resize
    await photo.resize(600, jimp.AUTO);
    await photo.write(
        path.resolve(__dirname, '..', '..', 'public', 'uploads', filename)
    );

    return next();
};

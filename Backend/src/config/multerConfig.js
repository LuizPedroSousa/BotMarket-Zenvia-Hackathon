const multer = require('multer');

module.exports = {
    storage: multer.memoryStorage(),
    fileFilter: (req, file, next) => {
        const allowed = ['image/jpeg', 'image/png', 'image/jpg'];

        if (allowed.includes(file.mimetype)) return next(null, true);

        next({ message: 'Arquivo não suportado' }, false);
    },
};

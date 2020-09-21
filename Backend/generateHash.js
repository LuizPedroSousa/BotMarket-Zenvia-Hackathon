const crypto = require('crypto');
const bcrypt = require('bcrypt');

async function generateHash() {
    const hash = await bcrypt.hash(crypto.randomBytes(4).toString(), 8);

    console.log(hash);
}

generateHash();
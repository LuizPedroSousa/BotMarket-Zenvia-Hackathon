const db = require('../Database/connection');
const jwt = require('jsonwebtoken');

exports.index = async (req, res) => {
    const { page = 0, category = '', name = '' } = req.query;
    const perPage = 10;

    const products = await db('products')
        .where('category', 'like', `%${category}%`)
        .andWhere('name', 'like', `%${name}%`)
        .limit(perPage)
        .offset(page);
    const productsCount = await db('products').count({ count: '*' });
    const lastPage = Math.floor(productsCount[0].count / perPage);

    return res.json({
        products,
        page,
        perPage,
        lastPage,
    });
}

exports.recents = async (req, res) => {
    const products = await db('products')
        .limit(10)
        .orderBy('id', 'desc');

    return res.json({
        products,
    });
}

exports.find = async (req, res) => {
    const { term = '' } = req.query;

    const product = await db('products')
        .where('code', 'like', `${term}`)
        .orWhere('name', 'like', `${term}`)
        .first();

    return res.json({
        product
    });
}

exports.create = async (req, res) => {
    const { name, image, code, category, price } = req.body;
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({
        error: 'You need to send a authorization token. Verify your login!',
    });
    const payload = jwt.verify(authorization, process.env.SECRET_KEY);

    const employer = await db('employees')
        .where('id', payload.id ? payload.id : '')
        .first();

    if (!employer) res.status(401).json({
        error: 'You\'re not authorized to make this proccess',
    });

    const product = await db('products').where('code', '=', code).first();
    if (product) return res.json({
        error: 'Already exists a product with this code'
    })

    await db('products').insert({
        name, code, image, category, price
    });
    return res.status(201).send();
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, image, code, category, price } = req.body;
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({
        error: 'You need to send a authorization token. Verify your login!',
    });
    const payload = jwt.verify(authorization, process.env.SECRET_KEY);

    const employer = await db('employees')
        .where('id', payload.id ? payload.id : '')
        .first();

    if (!employer) res.status(401).json({
        error: 'You\'re not authorized to make this proccess',
    });

    const product = await db('products').where('code', code).first();
    if (product && product.id != Number(id)) return res.json({
        error: 'Already exists a product with this code',
    })

    await db('products').update({
        name, code, image, category, price
    }).where('id', id);
    return res.status(200).send();
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({
        error: 'You need to send a authorization token. Verify your login!',
    });
    const payload = jwt.verify(authorization, process.env.SECRET_KEY);

    const employer = await db('employees')
        .where('id', payload.id ? payload.id : '')
        .first();

    if (!employer) res.status(401).json({
        error: 'You\'re not authorized to make this proccess',
    });

    await db('products').delete().where('id', id);
    return res.status(200).send();
}
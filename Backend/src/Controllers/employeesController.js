const db = require('../Database/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const fetch = require('node-fetch');

exports.index = async (req, res) => {
  const { page = 0 } = req.query;
  const perPage = 10;

  const employees = await db('employees')
    .select(['id', 'name', 'email', 'avatar', 'status'])
    .limit(perPage)
    .offset(page);
  const employeesCount = await db('employees').count({ count: '*' });
  const lastPage = Math.floor(employeesCount[0].count / perPage);

  return res.json({
    employees,
    page,
    perPage,
    lastPage,
  });
}

exports.find = async (req, res) => {
  const { id } = req.params;
  const { authorization = '' } = req.headers;

  const payload = {
    id: ''
  };

  if (authorization) {
    payload.id = jwt.verify(authorization, process.env.SECRET_KEY).id;
  }

  const employee = await db('employees')
    .where('id', id)
    .orWhere('id', payload.id)
    .select(['id', 'name', 'email', 'avatar', 'status'])
    .first();

  return res.json({
    employee
  });
}

exports.create = async (req, res) => {
  const { name, email, avatar, status = false } = req.body;
  const { authorization } = req.headers;

  if (!authorization) return res.status(400).json({
    error: 'You need to send a authorization token. Verify your login!',
  });
  const payload = jwt.verify(authorization, process.env.SECRET_KEY);

  const employer = await db('employees')
    .where('id', payload.id ? payload.id : '')
    .andWhere('status', 1)
    .first();

  if (!employer) res.status(401).json({
    error: 'You\'re not authorized to make this proccess',
  });

  const id = uuid.v4();

  await db('employees').insert({
    id,
    name,
    email,
    password: await bcrypt.hash(email, 8),
    avatar,
    status
  });
  fs.readFile(path.resolve(__dirname, '..', 'Utils', 'Email', 'email.html'), 'utf-8', async (err, data) => {
    if (err) throw err;
    const emailInfo = {
      email_from: 'luan.farias_bvs@outlook.com',
      email_to: email,
      user_from: 'Luan',
      user_to: name,
      subject: "Olá, você foi cadastrado na plataforma",
      message: data.replace('$$user', name),
    };
    await fetch('https://send-mail-api.000webhostapp.com/', {
      method: 'post',
      body: JSON.stringify(emailInfo),
    });
    return res.status(201).json({
      token: jwt.sign(
        { id },
        process.env.SECRET_KEY
      ),
    });
  });

}

exports.update = async (req, res) => {
  const { name, avatar, password } = req.body;
  const { authorization } = req.headers;

  if (!authorization) return res.status(400).json({
    error: 'You need to send a authorization token. Verify your login!',
  });
  const payload = jwt.verify(authorization, process.env.SECRET_KEY);

  const employee = await db('employees')
    .where('id', payload.id ? payload.id : '')
    .first();

  if (!employee) res.status(401).json({
    error: 'You\'re not authorized to make this proccess',
  });

  await db('employees').update({
    name,
    avatar: avatar ? avatar : employee.avatar,
    password: password ? await bcrypt.hash(password, 8) : employee.password
  }).where('id', payload.id);

  return res.send();

}

exports.auth = async (req, res) => {
  const { email, password } = req.body;
  const employee = await db('employees')
    .where('email', email).first();

  const isPasswordCorrect = await bcrypt.compare(password, employee.password);
  if (!isPasswordCorrect) return res.status(401).json({
    error: 'Email and/or password are wrong',
  });

  return res.json({
    token: jwt.sign({
      id: employee.id,
    }, process.env.SECRET_KEY),
  });
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
    .andWhere('status', 1)
    .first();

  if (!employer) res.status(401).json({
    error: 'You\'re not authorized to make this proccess',
  });

  await db('employees').delete().where('id', id);

  return res.send();
}
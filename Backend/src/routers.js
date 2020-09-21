const express = require('express');
const Router = express.Router();

const productsController = require('./Controllers/productsController');
const employeesController = require('./Controllers/employeesController');

const imageMiddleware = require('./middlewares/imageMiddleware');

//Products
Router.get('/products', productsController.index);
Router.get('/products/find', productsController.find);
Router.get('/products/recents', productsController.recents);
Router.post(
    '/products',
    // imageMiddleware.upload,
    // imageMiddleware.resize,
    productsController.create
);
Router.put(
    '/products/:id',
    //imageMiddleware.upload,
    //imageMiddleware.resize,
    productsController.update
);
Router.delete('/products/:id', productsController.delete);

//Employees
Router.get('/employees', employeesController.index);
Router.post(
    '/employees',
    //imageMiddleware.upload,
    //imageMiddleware.resize,
    employeesController.create
);
Router.put(
    '/employees',
    //imageMiddleware.upload,
    //imageMiddleware.resize,
    employeesController.update
);
Router.delete('/employees/:id', employeesController.delete);
Router.post('/employees/login', employeesController.auth);
Router.get('/employees/:id', employeesController.find);

module.exports = Router;
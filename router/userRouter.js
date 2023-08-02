const express = require('express');
const userController = require('../controller/userController');
const app = express();

app.get('/home', userController.home);

app.get('/singup', userController.singup);

app.post('/singup', userController.insertuser);

app.get('/login', userController.login);

app.post('/login', userController.loginauth);

app.get('/create', userController.create);

app.get('/create_product', userController.create_product);

app.post('/create_product', userController.insert_pro);

app.get('/delete', userController.delete);

app.get('/logout', userController.logout);

app.get('/userlist', userController.userlist);

app.get('/deleteuser', userController.deleteuser);

app.get('/edituser', userController.edituser);

app.post('/update', userController.update);

app.get('/groce', userController.groce);










module.exports = app;
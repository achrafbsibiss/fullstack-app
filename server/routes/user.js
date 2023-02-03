const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');


// Create,find, update,delete

// to see the users and find users
router.get('/adminepage', userControllers.view);
router.post('/adminepage', userControllers.find);

// home page to user recte and register
router.get('/',userControllers.home)
router.post('/', userControllers.registeruser)
// to see the price
router.get('/price',userControllers.price)


// to add users in admine page
router.get('/adduserinadmine',userControllers.adduserinadmine)
router.post('/adduserinadmine', userControllers.adduser)

// to edete users
router.get('/edituser/:id',userControllers.edituser)
router.post('/edituser/:id',userControllers.edituserconfirme)

// to delete user
router.get('/delete/:id',userControllers.delete)
router.get('/:id',userControllers.confirmede)


module.exports=router


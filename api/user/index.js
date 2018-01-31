const express = require('express');
const router = express.Router();
const controller = require('./user-controller');

router.post('/create', controller.createUser);
router.post('/login', controller.userLogin);
router.post('/forgotPassword', controller.forgotPassword);
router.put('/resetPassword', controller.resetPassword);
router.put('/findUser', controller.findUser);
router.get('/listStudentsFinished', controller.studentsWhoFinished);

module.exports = router;
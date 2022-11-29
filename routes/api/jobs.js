const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', jobsCtrl.create);
// router.post('/login', jobsCtrl.login);
// router.get('/check-token', ensureLoggedIn, jobsCtrl.checkToken);

module.exports = router;

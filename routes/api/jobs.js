const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, jobsCtrl.create);
router.get('/', ensureLoggedIn, jobsCtrl.index);
router.delete('/', ensureLoggedIn, jobsCtrl.delete);
router.post('/:id',ensureLoggedIn,jobsCtrl.updateStatus)

// router.get('/check-token', ensureLoggedIn, jobsCtrl.checkToken);

module.exports = router;

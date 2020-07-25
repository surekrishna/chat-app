var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/all', (req, res) => {
	try {
		Message.getAllMessage().then(result => {
		res.send(result.rows);
		})
	}catch(err) {
		throw err;
	}
});

router.get('/:user', (req, res) => {
	try {
		Message.getAllByUser(req.params.user).then(result => {
		res.send(result.rows);
		})
	}catch(err) {
		throw err;
	}
});

module.exports = router;


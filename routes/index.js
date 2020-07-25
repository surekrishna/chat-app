var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', (req, res, next) => {
	res.render('chatRoom', {title: 'SOCKET.IO ChatRoom'});
})

module.exports = router;

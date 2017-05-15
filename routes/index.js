var express = require('express');
var router = express.Router();
var game = require('./game');

//Landing Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Registration Page
router.get('/registration', function(req, res, next) {
  res.render('registration.jade', { title: 'Registration'});
});

//Lobby Page
router.get('/lobby', function(req,res, next) {
	game.getGameList(function(err, gameList) {
		if (err) throw err;
		if (!gameList) console.log('Error: No data returned.');
		else {
			//console.log('Gamelist:', gameList);
			res.render('lobby.jade', {title: 'Lobby', games: gameList});
		}

	});
});

router.get('/game', function(req, res, next) {
	res.render('game.jade', { title: 'Game'});
});

//Create Game Page
router.get('/createGame', function(req,res,next){
	res.render('createGame.jade', {title: 'Create Game'});
});

module.exports = router;

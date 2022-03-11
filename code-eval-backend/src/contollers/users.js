const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user');
const validator = require('email-validator');

router.get('/', async (req, res) => {
	const users = await User
		.find({});
	res.json(users.map(u => u.toJSON()));
});

router.get('/:id', async (req, res) => {
	const user = await User
		.findById(req.params.id);
	res.json(user.toJSON());
});

router.get('/:id/:mail', async (req, res) => {
	console.log(req.params);
	const mail = req.params.mail;
	const user = await User.findOne({ mail: mail});
	console.log('mail: ', mail);
	console.log('user: ', user);
	res.json(user.toJSON());
});


router.post('/', async(req, res) => {
	const { username, mail, password } = req.body;
	// Jos bodyssa annetaan kelvoton salasana
	if (!password || password.length < 5) {
		return res.status(400).send({
			error: 'password min length 5'
		});
	}
	if (!validator.validate(mail)) {
		return res.status(400).send({
			error: 'give valid email-address'
		});
	}
    
	// salataan salasana bcryptin avulla
	const saltRounds = 12;
	const passwordHash = await bcrypt.hash(password, saltRounds);
	// Luodaan uusi käyttäjä bodyssa annetuilla arvoilla
	const user = new User({
		username,
		mail,
		passwordHash
	});
	// Tallennetaan luotu käyttäjä tietokantaan
	const savedUser = await user.save();
	res.json(savedUser);

});


module.exports = router;
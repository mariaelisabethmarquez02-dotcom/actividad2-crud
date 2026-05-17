const express = require('express');

const router = express.Router();

const {getAllUser} = require('../controlllers/usersControllers');

router.get('/', getAllUser);

module.exports= router;
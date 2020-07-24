const router = require('express').Router();
const cors = require('cors');
const bodyParser = require('body-parser');
require('config');

// 1. Configure CORS to allow requests from browsers
router.use(cors());

// 2. Configure body-parser to allow routerlication/json
router.use(bodyParser.json());

router.use('/api/v1', require('./routes/index'));

module.exports = router

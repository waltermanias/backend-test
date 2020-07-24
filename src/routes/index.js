const router = require('express').Router()

// Add the default route
router.use('/dog-breeds', require('./dogBreedRoute'))

module.exports = router

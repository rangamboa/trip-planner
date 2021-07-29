const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travelers', travelerRoutes);
router.use('/trips', tripdRoutes);
router.use('/locations', locationRoutes);

module.exports = router;

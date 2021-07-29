const router = require('express').Router();
const { Traveler, Location, Trip } = require('../../models');

// GET all travelers
router.get('/', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// GET all traveler
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// POST one traveler
router.post('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// DELETE one traveler
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

module.exports = router;
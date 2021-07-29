const router = require('express').Router();
// Include the Book model with the other imports
const { Traveler, Location, Trip } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// GET one trip
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// POST one trip
router.post('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// DELETE one trip
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

module.exports = router;

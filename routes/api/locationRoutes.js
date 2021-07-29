const router = require('express').Router();
// Include the Book model with the other imports
const { Traveler, Location, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// GET one location
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// POST one location
router.post('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

// DELETE one location
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json(locationData);
  } catch (err) { };
});

module.exports = router;
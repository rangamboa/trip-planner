const Traveler = require('./Traveler');
const Trip = require('./Trip');
const Location = require('./Location');

Traveler.hasMany(Trip, {
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE',
});

Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Trip.belongsTo(Traveler, {
  foreignKey: 'trip_id',
  onDelete: 'CASCADE',
});

Traveler.belongsTo(Location, {
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE',
});

module.exports = { Traveler, Trip, Location };


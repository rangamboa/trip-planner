const Traveler = require('./Traveler');
const Trip = require('./Trip');
const Location = require('./Location');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// A reader can have many books
Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// A book belongs to a single reader
Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

module.exports = { Traveler, Trip, Location };
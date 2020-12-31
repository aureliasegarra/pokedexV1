const Pokemon = require('./pokemon');
const Type = require('./type');

/* Associations  */
// NN : belongsToMany

Pokemon.belongsToMany(Type, {
    as: 'types',
    through: 'pokemon_type',
    foreignKey: 'pokemon_number',
    otherKey: 'type_id'
});

Type.belongsToMany(Pokemon, {
    as: 'pokemons',
    through: 'pokemon_type',
    foreignKey: 'type_id',
    otherKey: 'pokemon_number'
});

module.exports = { Pokemon, Type };

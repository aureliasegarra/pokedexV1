const { Pokemon } = require('../models');

const mainController = {
    homePage: async (req, res) => {
        try{
            const pokemons = await Pokemon.findAll({});
            res.render('list', { pokemons });
        } catch (err) {
            console.trace(err);
            res.status(500).send(err);
        }
    }

};

module.exports = mainController;
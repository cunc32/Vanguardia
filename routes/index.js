var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", async function (req, res, next) {
  var pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/charizard");
  console.log(pokemon.data);
  res.render("pokemon", { pokemon: pokemon.data });
});

module.exports = router;

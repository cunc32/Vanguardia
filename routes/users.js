var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=15.56&lon=-88.02&APPID=${process.env.WEATHER_API}`
  );
  console.log(weather.data);
  res.send("respond with a resource");
});

module.exports = router;

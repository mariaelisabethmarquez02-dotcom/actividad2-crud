


const express = require("express");


const router = express.Router();




router.get("/", (req, res) => {
    //Responde texto simple para comprobar que el servidor corre
    res.status(200).send("API Express funcionando");
});

//Exporta el router para montarlo en app.js
module.exports = router;
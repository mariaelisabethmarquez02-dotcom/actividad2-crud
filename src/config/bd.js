const mongoose = require ("mongoose");

async function connectBD(uri) {
    await mongoose.connect(uri);
    console.log("Conectado a la base de datos");
    
}

module.exports = {connectBD};
const {Sequelize} = require("sequile");


requie("dotenv").config();

const sequelize = new Sequelize(
    procees.env.BD_NAME,
    procees.env.BD_USER,
    procees.env.BD_PASSWORD,
    {
        host:procees.env.BD_HOST, 
        port:procees.env.BD_PORT,
        dialect: 'postgres',
        logging: false
    }

);

module.exports = sequelize;
const user = require('../models/user');

const getAllUsers = async (req, res) => {
    try{
        const users = await user.findAll();

       res.status(200).json(users);    
    } catch(error){
        res.status(500).json({
            message:'Error al obtener todos los usuarios',
            error: error.message
        });
    }
}

module.exports={
    getAllUsers
};
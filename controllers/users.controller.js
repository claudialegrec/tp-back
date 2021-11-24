const User = require('../models/users.model')

async function getAllUsers(req, res){

    try{
        var response = await User.find();
        console.log('conecta')

        
        if(res.statusCode != 200){
            return res.json({"Services": "No services found"})
        } else {
            return res.json({response})
        }
    }catch(err){
        console.log(err)
    }
}
 module.exports = {
    getAllUsers
 }

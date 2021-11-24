const Apt = require('../models/apts.model')

async function showAllApts(req, res){

    try{
        var response = await Apt.find();
        console.log(response)
        return res.json({"response": Response})
    }catch(err){
        console.log(err)
    }

}

async function addNewAppointment (req, res){

    const { service, client_name, date, turn } = req.body


    try{

        let addingAppointnment = new Apt(req.body);
        await addingAppointnment.save();

        return res.json({ "Success": true, "Message": "Saved the incoming appointment"})

    } catch (err){
        console.log(err)
    }
}



module.exports = {
    showAllApts, 
    addNewAppointment
}
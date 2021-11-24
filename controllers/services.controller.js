const Service = require('../models/services.model')


async function showAllServices(req, res){

    try {
        const serviceList  = `serviceList`
        var r1 = await client.get(serviceList)
        console.log(r1)
        const listOfServices = JSON.parse(r1)
        if(r1){
            return res.json({"success":true, "bd":"redis", "response": listOfServices })
        } else {
            try{
                var response = await Service.find();
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
    } catch (err) {
        console.log(err)
    }

}

async function addNewService (req, res){

    const { service_name } = req.body


    try{

        let addingService = new Service(req.body);
        await addingService.save();

        if(res.statusCode != 200){
            return res.json({ "Status": "Something definitely went wrong"});
        } else {
            return res.json({ "Success": true, "Message": "Saved the incoming service"})
        }

    } catch (err){
        console.log(err)
    }
}

async function updateService(req, res){

    const id = req.body._id
    const new_name = req.body.new_name

    console.log(id)
    try {
        var response = await Service.findOneAndUpdate({
            _id: id
        }, {
            $set:{
               service_name: new_name 
            }
        }, {new: true})
        
        return res.json({"success":true, "response": response})
    } catch (err) {
        console.log(err)
    }
    
    
}

async function deleteService(req, res) {
    const id = req.body._id

    try{
        var response = await Service.deleteOne({
            _id: id
        })

        return res.json({"response": response})

    } catch (err){
        console.log(err)
    }
}

module.exports = {
    showAllServices,
    addNewService,
    updateService, 
    deleteService
}
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
                
                if(res.statusCode != 200){
                    return res.json({"Services": "No services found"})
                } else {
                    return res.json({response})
                }
            }catch(err){
                console.log('%c⧭', 'color: #733d00', err);
            }
        
        }
    } catch (err) {
        console.log('%c⧭', 'color: #00bf00', err);
    }

}

async function addNewService (req, res){

    const { title } = req.body
    const { description } = req.body


    try{

        let addingService = new Service(req.body);
        await addingService.save();

        if(res.statusCode != 200){
            return res.json({ "Status": "Something definitely went wrong"});
        } else {
            return res.json({ "Success": true, "Message": "Saved the incoming service"})
        }

    } catch (err){
        console.log('%c⧭', 'color: #0088cc', err);
    }
}

async function updateService(req, res){

    const id = req.body._id
    const title = req.body.title
    const description = req.body.description

    console.log(id)
    try {
        var response = await Service.findOneAndUpdate({
            _id: id
        }, {
            $set:{
               title: title,
               description: description
            }
        }, {new: true})
        
        return res.json({"success":true, "response": response})
    } catch (err) {
        console.log('%c⧭', 'color: #917399', err);
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
        console.log('%c⧭', 'color: #e50000', err);
    }
}

module.exports = {
    showAllServices,
    addNewService,
    updateService, 
    deleteService
}
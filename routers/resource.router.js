const { createResourceController } = require("../controllers/create-resource.controller")
const { deleteResourceController } = require("../controllers/delete-resource.controller")
const { getResourcesController } = require("../controllers/get-resources.controller")
const { updateResourceController } = require("../controllers/update-resource.controller")
const { notFoundError } = require("../errors/not-found.error")

const resourceValues = []

const resourceRouter = (req, res) => {

    req.resourceValues = resourceValues

    switch(req.method){
        case 'GET':{
            return getResourcesController(req, res)
        }
        case 'POST':{
            return createResourceController(req, res)
        }
        case 'PATCH':{
            return updateResourceController(req, res)
        }
        case 'DELETE':{
            return deleteResourceController(req, res)
        }
        default:
            notFoundError(res)
    }
}

module.exports = {resourceRouter}
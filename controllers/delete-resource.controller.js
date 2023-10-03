const { jsonResponseFormatter } = require("../middleware/json-response-formatter.middleware")
const { deleteResource } = require("../services/resource.service")

const deleteResourceController = (req, res) => {
    deleteResource(req, res)


    jsonResponseFormatter({ statusCode: 200, res})
}

module.exports = {deleteResourceController}
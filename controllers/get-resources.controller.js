const { jsonResponseFormatter } = require('../middleware/json-response-formatter.middleware');
const {getResources} = require('../services/resource.service')

const getResourcesController = (req, res) => {
    const resourceValues = getResources(req);

    jsonResponseFormatter({ statusCode: 200, data:{items: resourceValues}, res})
}

module.exports = {getResourcesController}
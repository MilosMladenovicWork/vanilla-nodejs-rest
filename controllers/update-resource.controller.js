const { bodyParserMiddleware } = require('../middleware/body-parser.middleware');
const { jsonResponseFormatter } = require('../middleware/json-response-formatter.middleware');
const { updateResource } = require('../services/resource.service');


const updateResourceController = async (req, res) => {
    await bodyParserMiddleware(req, res)

    const resourceValues = updateResource(req,res)

    jsonResponseFormatter({data: {items: resourceValues}, statusCode: 200, res})
}

module.exports = {updateResourceController}
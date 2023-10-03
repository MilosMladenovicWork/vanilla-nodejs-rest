
const { bodyParserMiddleware } = require('../middleware/body-parser.middleware');
const { jsonResponseFormatter } = require('../middleware/json-response-formatter.middleware');
const {createResource} = require('../services/resource.service')

const createResourceController = async (req, res) => {
        await bodyParserMiddleware(req, res);
        
        const resourceValue = createResource(req, res)
    
        jsonResponseFormatter({data: resourceValue, statusCode: 201, res})
}

module.exports = {createResourceController}
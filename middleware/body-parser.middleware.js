const { resourceValidationError } = require("../errors/resource-validation.error");

const bodyParserMiddleware = async (req, res) => {
    return new Promise((resolve) => {
        let bodyString = '';
        req.on('data', buffer => {
            bodyString += buffer.toString()
        })
    
        req.on('end', () => {
            try{
                const body = JSON.parse(bodyString)
                req.body = body;
                resolve()
            }catch(e){
                return resourceValidationError(res)
            }
        })
    })
}

module.exports = {bodyParserMiddleware}
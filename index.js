const http = require('http')
const {notFoundError} = require('./errors/not-found.error')
const {resourceRouter} = require('./routers/resource.router')

http.createServer((req, res) =>{
    switch(req.url){
        case '/resource':
            resourceRouter(req, res)
            break;
        default:
            notFoundError(res)
    }
}).listen(3000)

const jsonResponseFormatter = ({data, statusCode, res}) => {
    res.statusCode = statusCode;
    
    res.setHeader('Content-Type', 'application/json')

    if(data){
        res.end(JSON.stringify({data}))
    }

    res.end()
}

module.exports = {jsonResponseFormatter}
const notFoundError = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({message: 'Not Found'}))
}

module.exports = {
    notFoundError
}
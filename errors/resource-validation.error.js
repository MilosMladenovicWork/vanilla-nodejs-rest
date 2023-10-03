const resourceValidationError = (res) => {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({message: 'Invalid input type'}))
}

module.exports = {
    resourceValidationError
}
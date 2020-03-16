const path = require('path');

module.exports = class HttpServerController {
    static index (req, res) {
        res.sendFile(path.join(__dirname+'index.html'))
    }
}
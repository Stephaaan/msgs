const StatusCodes = require("../enums/StatusCodes")
const Messages = require("../enums/Messages")
module.exports = class NotificationController {
    static ping (req, res) {
        res.status(StatusCodes.OK).json(Messages.ping) 
    }
}

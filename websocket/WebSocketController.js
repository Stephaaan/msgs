const WebSocket = require('ws');
const generator = require("../helpers/NotificationGenerator")
const NotificationDAO = require("../dao/NotificationDAO")
module.exports = class WebSocketController {
    static connectionHandler(ws) {
        setInterval(() => {
            const message = generator.generate()
            NotificationDAO.insertNotification(message)
            ws.send(JSON.stringify(message));
        }, Math.random()*5000 + 20000)
    }
}
const knex = require("../config/knex")

const NOTIFICATION_TABLE = "notifications"

module.exports = class NotificationDAO {
    static insertNotification(notification) {
        knex(NOTIFICATION_TABLE)
            .insert(notification).then(res => console.log(res)).catch(err => console.log(err))
    }
}
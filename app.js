require('dotenv').config()
const express = require("express")
const app = express();
const router = require("./router");
const http = require('http');
const WebSocket = require('ws');
const WebSocketController = require('./websocket/WebSocketController')

const webSocketPath = "/ws"

const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

const webSocketServer = new WebSocket.Server({server, path: webSocketPath})
webSocketServer.on("connection", WebSocketController.connectionHandler)

app.use(router)

server.listen(process.env.APP_PORT)
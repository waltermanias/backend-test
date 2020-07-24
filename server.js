const express = require('express');
const server = express();
const app = require('./src/app')

server.use(app);
const connect = require('./database')

connect().then(() => {
    server.listen(3000, () => {
        console.log("The server is up and running on port 3000...")
    })
}).catch(err => {
    console.error("Something went wrong...", err.message, err.trace)
})


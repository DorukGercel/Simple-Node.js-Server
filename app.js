const http = require("http");
const appController = require("./controllers");

http.createServer(appController).listen(8080, () => {
    console.log('App listens 8080!');
});
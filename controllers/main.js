const htmlService = require("../services/html_service");

const mainController = (res) => {
    res.writeHead(200, {'Content-Type': 'text/html, '});
    res.write(htmlService.pageFormer("Ana"));
    res.end();
}

module.exports = mainController;
const htmlService = require("../services/html_service");

const contactController = (res) => {
    res.writeHead(200, {'Content-Type': 'text/html, '});
    res.write(htmlService.pageFormer("İletişim"));
    res.end();
}

module.exports = contactController;
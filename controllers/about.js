const htmlService = require("../services/html_service");

const aboutController = (res) => {
    res.writeHead(200, {'Content-Type': 'text/html, '});
    res.write(htmlService.pageFormer("Hakkımızda"));
    res.end();
}

module.exports = aboutController;
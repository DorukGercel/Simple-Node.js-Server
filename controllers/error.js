const errors = require("../definitions/errors");
const htmlService = require("../services/html_service");

const errorController = (res, code) => {
    res.writeHead(code, {'Content-Type': 'text/html'});
    res.write(htmlService.errorFormer(code, errors[code]));
    res.end();
}

module.exports = errorController;
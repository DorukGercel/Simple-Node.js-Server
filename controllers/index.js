const moment = require("moment");
const aboutController = require("./about");
const contactController = require("./contact");
const errorController = require("./error");
const mainController = require("./main");
const paths = require("../definitions/paths");
const fsService = require("../services/fs_service");

const appController = (req, res) => {
    const reqTime = moment().format("YYYY-MM-DD-HH:mm:ss")
    handleControllerError(req, res);
    routePath(req, res);
    fsService.log(req, reqTime);
}

const handleControllerError = (req, res) => {
    req.on('error', err => {
        errorController(res, 400);
        return;
    });

    res.on('error', err => {
        errorController(res, 400);
        return;
    });
}

const routePath = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(req.method !== "GET") {
        errorController(res, 400);
        return;
    }
    if(url === paths.Root || url === paths.Main){
        mainController(res);
        return;
    } else if(url === paths.About){
        aboutController(res);
        return;
    } else if(url === paths.Contact){
        contactController(res);
        return;
    } else {
        errorController(res, 404);
        return;
    }
}

module.exports = appController;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontEndMiddleware = void 0;
const path = require("path");
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.webmanifest',
];
const resolvePath = (file) => path.resolve(`../dist/nhlapi/${file}`);
function FrontEndMiddleware(req, res, next) {
    const { originalUrl } = req;
    if (originalUrl.indexOf('/api/') === 0) {
        next();
    }
    else if (allowedExt.filter(ext => originalUrl.indexOf(ext) > 0).length > 0) {
        res.sendFile(resolvePath(originalUrl));
    }
    else {
        res.sendFile(path.resolve(`../dist/nhlapi/index.html`));
    }
}
exports.FrontEndMiddleware = FrontEndMiddleware;
//# sourceMappingURL=angular-front-end.middleware.js.map
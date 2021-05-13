"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hello = function (name) { return console.log('hello', name); };
hello('Nanami');
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// CORSの許可
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var router = express_1.default.Router();
router.get('/test', function (req, res) {
    res.send('get');
});
router.post('/test', function (req, res) {
    res.send('post');
});
router.put('/test', function (req, res) {
    res.send('put');
});
router.delete('/test', function (req, res) {
    res.send('delete');
});
app.use(router);
// app.listen(3000, function () { console.log('Example app listening on port 3000!'); });

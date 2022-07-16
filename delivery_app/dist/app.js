"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const router_1 = require("./router");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
global.appRoot = path_1.default.resolve(process.cwd(), '../');
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.resolve(global.appRoot, 'public')));
app.use(router_1.apiRouter);
// @ts-ignore
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
        message: err.message,
        data: err.data,
    });
});
const { PORT } = config_1.config;
app.listen(PORT, async () => {
    console.log(`Server has started on port:${PORT}`);
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map
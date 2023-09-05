"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PublicRouter_1 = __importDefault(require("./routers/PublicRouter"));
const app = (0, express_1.default)();
const env = process.env;
app.use(express_1.default.json());
app.use(PublicRouter_1.default);
app.listen(env.SERVER_PORT, () => {
    console.log('server started');
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const db = new sequelize_1.Sequelize('db_usersts', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map
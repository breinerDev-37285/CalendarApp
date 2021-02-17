"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const database_1 = require("@config/database");
class Database {
    constructor() {
        const { DB_URL } = process.env;
        this.url = String(DB_URL);
    }
    static init() {
        if (!Database.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
    Connect() {
        return mongoose_1.connect(this.url, database_1.config);
    }
    Disconnect() {
        return mongoose_1.disconnect();
    }
}
exports.default = Database;

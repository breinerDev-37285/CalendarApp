"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("@routes/auth"));
const events_1 = __importDefault(require("@routes/events"));
const endPoint = [auth_1.default, events_1.default];
exports.default = endPoint;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_1 = require("@services/event");
const jwt_1 = require("@middlewares/jwt");
const events_1 = require("@middlewares/validations/events");
const isValid_1 = __importDefault(require("@middlewares/validations/isValid"));
const router = express_1.Router();
const path = '/events';
router.use(jwt_1.validarToken);
router.route(`${path}`)
    .post([...events_1.eventVal(), isValid_1.default], event_1.createEvent)
    .get(event_1.getEvents);
router.route(`${path}/:id`)
    .put([...events_1.eventVal(), isValid_1.default], event_1.updateEvent)
    .delete(event_1.deleteEvent);
exports.default = router;

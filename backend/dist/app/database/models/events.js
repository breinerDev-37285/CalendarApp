"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        refer: 'User',
        required: true
    }
}, {
    collection: 'eventos',
    timestamps: true
});
exports.default = mongoose_1.model('Event', eventsSchema);

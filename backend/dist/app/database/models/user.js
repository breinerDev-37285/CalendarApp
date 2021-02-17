"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    collection: 'usuarios',
    timestamps: true
});
userSchema.plugin(mongoose_unique_validator_1.default, { message: '{VALUE} ya registrado' });
userSchema.pre('save', function () {
    const user = this;
    const salt = bcryptjs_1.genSaltSync();
    user.password = bcryptjs_1.hashSync(user.password, salt);
});
userSchema.on('index', function (err) {
    if (err)
        return;
});
exports.default = mongoose_1.model('User', userSchema);

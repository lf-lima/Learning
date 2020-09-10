"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var dynamoose_1 = __importDefault(require("dynamoose"));
var schema = new dynamoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        hashKey: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.User = dynamoose_1.default.model('User', schema);
//# sourceMappingURL=user.js.map
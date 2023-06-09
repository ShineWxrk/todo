"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
const react_1 = __importDefault(require("react"));
require("./TodoItem.css");
const TodoItem = ({}) => {
    return (react_1.default.createElement("div", { className: "todo" }));
};
exports.TodoItem = TodoItem;

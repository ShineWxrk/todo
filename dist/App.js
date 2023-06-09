"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const TodoItem_1 = require("./components/TodoItem");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("label", { className: "logo" }, "todos"),
            react_1.default.createElement("input", { className: "input", type: "text", placeholder: 'Todo name' }),
            react_1.default.createElement("div", { className: "todos" },
                react_1.default.createElement(TodoItem_1.TodoItem, null),
                react_1.default.createElement(TodoItem_1.TodoItem, null),
                react_1.default.createElement(TodoItem_1.TodoItem, null)))));
}
exports.default = App;

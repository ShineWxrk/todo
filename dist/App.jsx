"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const TodoItem_1 = require("./components/TodoItem");
function App() {
    return (<div className="App">
      <div className="container">
        <label className="logo">todos</label>
        <input className="input" type="text" placeholder='Todo name'></input>
        <div className="todos">
          <TodoItem_1.TodoItem></TodoItem_1.TodoItem>
          <TodoItem_1.TodoItem></TodoItem_1.TodoItem>
          <TodoItem_1.TodoItem></TodoItem_1.TodoItem>
        </div>
      </div>
    </div>);
}
exports.default = App;

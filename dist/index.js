"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
// import './index.css';
const App_1 = __importDefault(require("./App"));
// import reportWebVitals from './reportWebVitals';
//Author Name: Md Wahiduzzaman Emon
//Author GitHub URL: https://github.com/MdWahiduzzamanEmon
//Author LinkedIn URL: https://www.linkedin.com/in/md-wahiduzzaman-emon-5b1b3b1b3/
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(App_1.default, null)));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

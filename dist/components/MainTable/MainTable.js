"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MianTableModule = _interopRequireDefault(require("./MianTable.module.css"));
var _textFormatterJs = _interopRequireDefault(require("text-formatter-js"));
const _excluded = ["align", "titles", "data", "filter", "tableHeaderDesign", "style"]; //Author Name: Md Wahiduzzaman Emon
//Author GitHub URL: https://github.com/MdWahiduzzamanEmon
//Author LinkedIn URL: https://www.linkedin.com/in/md-wahiduzzaman-emon-5b1b3b1b3/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const MainTable = _ref => {
  var _Object$keys;
  let {
      align,
      titles,
      data,
      filter,
      tableHeaderDesign,
      style
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: _MianTableModule.default.table
  }, rest, {
    style: style
  }), /*#__PURE__*/_react.default.createElement("thead", {
    style: tableHeaderDesign
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: _MianTableModule.default.tableHeaderCell
  }, filter ? Object === null || Object === void 0 || (_Object$keys = Object.keys(data === null || data === void 0 ? void 0 : data[0])) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map((key, i) => /*#__PURE__*/_react.default.createElement("th", {
    className: "header-column",
    key: i
  }, (0, _textFormatterJs.default)(key))) : titles === null || titles === void 0 ? void 0 : titles.map((title, id) => /*#__PURE__*/_react.default.createElement("th", {
    key: id
  }, title)))), /*#__PURE__*/_react.default.createElement("tbody", null, data && (data === null || data === void 0 ? void 0 : data.map((item, i) => {
    var _Object$keys2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i,
      className: _MianTableModule.default.tableCell,
      style: {
        backgroundColor: i % 2 === 0 ? "#fff" : "#f5f5f5",
        textAlign: align ? align : "left"
      }
    }, Object === null || Object === void 0 || (_Object$keys2 = Object.keys(item)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.map((key, i) => /*#__PURE__*/_react.default.createElement("td", {
      key: i
    }, item[key] ? item[key] : "N/A")));
  }))));
};
var _default = MainTable;
exports.default = _default;
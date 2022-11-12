"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const FilterTableColumn = _ref => {
  let {
    isShowTableColumn,
    setIsShowTableColumn,
    setTableTitles,
    titles,
    tableTitles,
    handlePostData
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    title: "Filter Table Column"
  }, titles === null || titles === void 0 ? void 0 : titles.map((title, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      id: index,
      name: title,
      defaultChecked: isShowTableColumn === null || isShowTableColumn === void 0 ? void 0 : isShowTableColumn[title === null || title === void 0 ? void 0 : title.replace(/\s/g, "")],
      onChange: e => {
        const replaceSpaceInTitle = title === null || title === void 0 ? void 0 : title.replace(/\s/g, "");
        if (e.target.checked) {
          setIsShowTableColumn(_objectSpread(_objectSpread({}, isShowTableColumn), {}, {
            [replaceSpaceInTitle]: true
          }));
          handlePostData(_objectSpread(_objectSpread({}, isShowTableColumn), {}, {
            [replaceSpaceInTitle]: true
          }));
          setTableTitles([...tableTitles, title]);
        } else {
          setIsShowTableColumn(_objectSpread(_objectSpread({}, isShowTableColumn), {}, {
            [replaceSpaceInTitle]: false
          }));
          handlePostData(_objectSpread(_objectSpread({}, isShowTableColumn), {}, {
            [replaceSpaceInTitle]: false
          }));
          setTableTitles(tableTitles === null || tableTitles === void 0 ? void 0 : tableTitles.filter(item => item !== title));
        }
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: index
    }, title));
  }));
};
var _default = FilterTableColumn;
exports.default = _default;
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ink = require('ink');
var PropTypes = require('prop-types');
var figures = require('figures');
var Spinner = require('ink-spinner');
var spinners = require('cli-spinners');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var figures__default = /*#__PURE__*/_interopDefaultLegacy(figures);
var Spinner__default = /*#__PURE__*/_interopDefaultLegacy(Spinner);
var spinners__default = /*#__PURE__*/_interopDefaultLegacy(spinners);

const TaskList = ({ children }) => /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
  flexDirection: "column"
}, children);
TaskList.propTypes = {
  children: PropTypes__default["default"].oneOfType([
    PropTypes__default["default"].arrayOf(PropTypes__default["default"].node),
    PropTypes__default["default"].node
  ]).isRequired
};

const possibleSpinnerNames = Object.keys(spinners__default["default"]).filter((spinnerName) => spinnerName !== "default");
const getSymbol = (state) => {
  if (state === "warning") {
    return /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
      color: "yellow"
    }, figures__default["default"].warning);
  }
  if (state === "error") {
    return /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
      color: "red"
    }, figures__default["default"].cross);
  }
  if (state === "success") {
    return /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
      color: "green"
    }, figures__default["default"].tick);
  }
  if (state === "pending") {
    return /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
      color: "gray"
    }, figures__default["default"].squareSmallFilled);
  }
  return " ";
};
const getPointer = (state) => /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
  color: state === "error" ? "red" : "yellow"
}, figures__default["default"].pointer);
const Task = ({
  label,
  state,
  status,
  output,
  spinnerType,
  isExpanded,
  children
}) => {
  const childrenArray = React.Children.toArray(children);
  const listChildren = childrenArray.filter((node) => React.isValidElement(node));
  let icon = state === "loading" ? /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
    color: "yellow"
  }, /* @__PURE__ */ React__default["default"].createElement(Spinner__default["default"], {
    type: spinnerType
  })) : getSymbol(state);
  if (isExpanded) {
    icon = getPointer(state);
  }
  return /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
    flexDirection: "column"
  }, /* @__PURE__ */ React__default["default"].createElement(ink.Box, null, /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
    marginRight: 1
  }, /* @__PURE__ */ React__default["default"].createElement(ink.Text, null, icon)), /* @__PURE__ */ React__default["default"].createElement(ink.Text, null, label), status ? /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
    marginLeft: 1
  }, /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
    dimColor: true
  }, "[", status, "]")) : void 0), output ? /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
    marginLeft: 2
  }, /* @__PURE__ */ React__default["default"].createElement(ink.Text, {
    color: "gray"
  }, `${figures__default["default"].arrowRight} ${output}`)) : void 0, isExpanded && listChildren.length > 0 && /* @__PURE__ */ React__default["default"].createElement(ink.Box, {
    flexDirection: "column",
    marginLeft: 2
  }, listChildren));
};
Task.propTypes = {
  children: PropTypes__default["default"].oneOfType([
    PropTypes__default["default"].arrayOf(PropTypes__default["default"].element),
    PropTypes__default["default"].element
  ]),
  label: PropTypes__default["default"].string.isRequired,
  state: PropTypes__default["default"].oneOf(["pending", "loading", "success", "warning", "error"]),
  status: PropTypes__default["default"].string,
  output: PropTypes__default["default"].string,
  spinnerType: PropTypes__default["default"].oneOf(possibleSpinnerNames),
  isExpanded: PropTypes__default["default"].bool
};
Task.defaultProps = {
  state: "pending",
  spinnerType: "dots"
};

exports.Task = Task;
exports.TaskList = TaskList;

import React, { Children, isValidElement } from 'react';
import { Box, Text } from 'ink';
import PropTypes from 'prop-types';
import figures from 'figures';
import Spinner from 'ink-spinner';
import spinners from 'cli-spinners';

const TaskList = ({ children }) => /* @__PURE__ */ React.createElement(Box, {
  flexDirection: "column"
}, children);
TaskList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const possibleSpinnerNames = Object.keys(spinners).filter((spinnerName) => spinnerName !== "default");
const getSymbol = (state) => {
  if (state === "warning") {
    return /* @__PURE__ */ React.createElement(Text, {
      color: "yellow"
    }, figures.warning);
  }
  if (state === "error") {
    return /* @__PURE__ */ React.createElement(Text, {
      color: "red"
    }, figures.cross);
  }
  if (state === "success") {
    return /* @__PURE__ */ React.createElement(Text, {
      color: "green"
    }, figures.tick);
  }
  if (state === "pending") {
    return /* @__PURE__ */ React.createElement(Text, {
      color: "gray"
    }, figures.squareSmallFilled);
  }
  return " ";
};
const getPointer = (state) => /* @__PURE__ */ React.createElement(Text, {
  color: state === "error" ? "red" : "yellow"
}, figures.pointer);
const Task = ({
  label,
  state,
  status,
  output,
  spinnerType,
  isExpanded,
  children
}) => {
  const childrenArray = Children.toArray(children);
  const listChildren = childrenArray.filter((node) => isValidElement(node));
  let icon = state === "loading" ? /* @__PURE__ */ React.createElement(Text, {
    color: "yellow"
  }, /* @__PURE__ */ React.createElement(Spinner, {
    type: spinnerType
  })) : getSymbol(state);
  if (isExpanded) {
    icon = getPointer(state);
  }
  return /* @__PURE__ */ React.createElement(Box, {
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Box, {
    marginRight: 1
  }, /* @__PURE__ */ React.createElement(Text, null, icon)), /* @__PURE__ */ React.createElement(Text, null, label), status ? /* @__PURE__ */ React.createElement(Box, {
    marginLeft: 1
  }, /* @__PURE__ */ React.createElement(Text, {
    dimColor: true
  }, "[", status, "]")) : void 0), output ? /* @__PURE__ */ React.createElement(Box, {
    marginLeft: 2
  }, /* @__PURE__ */ React.createElement(Text, {
    color: "gray"
  }, `${figures.arrowRight} ${output}`)) : void 0, isExpanded && listChildren.length > 0 && /* @__PURE__ */ React.createElement(Box, {
    flexDirection: "column",
    marginLeft: 2
  }, listChildren));
};
Task.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  label: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["pending", "loading", "success", "warning", "error"]),
  status: PropTypes.string,
  output: PropTypes.string,
  spinnerType: PropTypes.oneOf(possibleSpinnerNames),
  isExpanded: PropTypes.bool
};
Task.defaultProps = {
  state: "pending",
  spinnerType: "dots"
};

export { Task, TaskList };

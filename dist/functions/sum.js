"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;
function sum(_ref) {
  var _ref$parameters = _ref.parameters,
      a = _ref$parameters.a,
      b = _ref$parameters.b,
      body = _ref.body;

  return {
    parameters: {},
    body: { result: a + b }
  };
}
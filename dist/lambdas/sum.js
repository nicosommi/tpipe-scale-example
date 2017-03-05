'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = sumLambda;

var _sum = require('../functions/sum.js');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function massageAWSRequest(input, event, context) {
  return _extends({}, input, {
    parameters: _extends({}, input.parameters, {
      a: Number(event.params.queryString.a),
      b: Number(event.params.queryString.b)
    })
  });
}

function massageAWSResponse(o, i, event, context, callback) {
  callback(null, o);
}

function sumLambda(event, context, callback) {
  var input = {
    parameters: {},
    body: {}
  };
  massageAWSResponse((0, _sum2.default)(massageAWSRequest(input, event, context, callback)), input, event, context, callback);
}
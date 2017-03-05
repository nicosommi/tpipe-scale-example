'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sum = require('../functions/sum.js');

var _sum2 = _interopRequireDefault(_sum);

var _tpipe = require('tpipe');

var _sumMappers = require('../mappers/sum.mappers.js');

var _sumMappers2 = _interopRequireDefault(_sumMappers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function massageAWSRequest(input, event, context) {
  return _extends({}, input, {
    parameters: _extends({}, input.parameters, event.params, {
      query: {
        a: Number(event.params.queryString.a),
        b: Number(event.params.queryString.b)
      }
    })
  });
}

function massageAWSResponse(o, i, event, context, callback) {
  callback(null, o.body);
}

var sumPipe = (0, _tpipe.piper)(_sum2.default).incorporate({
  inputMappings: [massageAWSRequest]
}).input(_sumMappers2.default).finally(massageAWSResponse).pipe;

exports.default = sumPipe.getHandler();
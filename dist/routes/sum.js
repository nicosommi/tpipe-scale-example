'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sum = require('../functions/sum.js');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

function massageExpressRequest(input) {
  return _extends({}, input, {
    parameters: _extends({}, input.parameters, {
      a: Number(input.parameters.query.a),
      b: Number(input.parameters.query.b)
    })
  });
}

function massageExpressResponse(output, input, req, res, next) {
  res.status(200).send(output);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  var input = {
    parameters: {
      query: req.query
    },
    body: {}
  };
  massageExpressResponse((0, _sum2.default)(massageExpressRequest(input)), input, req, res, next);
});

module.exports = router;
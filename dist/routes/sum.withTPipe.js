'use strict';

var _sum = require('../functions/sum.js');

var _sum2 = _interopRequireDefault(_sum);

var _tpipe = require('tpipe');

var _tpipeExpress = require('tpipe-express');

var _tpipeExpress2 = _interopRequireDefault(_tpipeExpress);

var _sumMappers = require('../mappers/sum.mappers.js');

var _sumMappers2 = _interopRequireDefault(_sumMappers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

var sumPipe = (0, _tpipe.piper)(_sum2.default).incorporate(_tpipeExpress2.default).input(_sumMappers2.default).pipe;

router.get('/', sumPipe.getHandler());

module.exports = router;
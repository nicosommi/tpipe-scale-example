var express = require('express');
var router = express.Router();

import sum from '../functions/sum.js';
import { piper } from 'tpipe';
import tPipeExpress from 'tpipe-express';
import sumInputMapper from '../mappers/sum.mappers.js';

const sumPipe = piper(sum)
  .incorporate(tPipeExpress)
  .input(sumInputMapper)
  .pipe;

router.get('/', sumPipe.getHandler());

module.exports = router;

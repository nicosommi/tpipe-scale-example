var express = require('express');
var router = express.Router();

import sum from '../functions/sum.js';

function massageExpressRequest(input) {
  return {
    ...input,
    parameters: {
      ...input.parameters,
      a: Number(input.parameters.query.a),
      b: Number(input.parameters.query.b)
    }
  }
}

function massageExpressResponse(output, input, req, res, next) {
  res.status(200).send(output);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const input = {
    parameters: {
      query: req.query
    },
    body: {}
  };
  massageExpressResponse(sum(massageExpressRequest(input)), input, req, res, next);
});

module.exports = router;

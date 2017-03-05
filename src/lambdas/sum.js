import sum from '../functions/sum.js';

function massageAWSRequest(input, event, context) {
  return {
    ...input,
    parameters: {
      ...input.parameters,
      a: Number(event.params.queryString.a),
      b: Number(event.params.queryString.b)
    }
  }
}

function massageAWSResponse(o, i, event, context, callback) {
  callback(null, o);
}

export default function sumLambda(event, context, callback) {
  const input = {
    parameters: {},
    body: {}
  };
  massageAWSResponse(sum(massageAWSRequest(input, event ,context, callback)), input, event, context, callback);
}

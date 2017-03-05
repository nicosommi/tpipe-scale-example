import sum from '../functions/sum.js';
import { piper } from 'tpipe';

import sumInputMapper from '../mappers/sum.mappers.js';

function massageAWSRequest(input, event, context) {
  return {
    ...input,
    ...event,
    parameters: {
      ...input.parameters,
      ...event.params,
      query: {
        ...event.params.queryString
      }
    }
  }
}

function massageAWSResponse(o, i, event, context, callback) {
  callback(null, o.body);
}

const sumPipe = piper(sum)
  .incorporate({
    inputMappings: [massageAWSRequest]
  })
  .input(sumInputMapper)
  .finally(massageAWSResponse)
  .pipe;

export default sumPipe.getHandler()

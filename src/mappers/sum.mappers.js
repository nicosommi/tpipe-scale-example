export default function sumInputMapper(input, event, context) {
  return {
    ...input,
    parameters: {
      ...input.parameters,
      a: Number(input.parameters.query.a),
      b: Number(input.parameters.query.b)
    }
  }
}

export default function sum({ parameters: { a, b }, body}) {
  return {
    parameters: {},
    body: { result: a + b }
  }
}

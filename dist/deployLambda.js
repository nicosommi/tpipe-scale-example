"use strict";

var _conan = require("conan");

var _conan2 = _interopRequireDefault(_conan);

var _conanAwsApiGateway = require("conan-aws-api-gateway");

var _conanAwsApiGateway2 = _interopRequireDefault(_conanAwsApiGateway);

var _conanAwsLambda = require("conan-aws-lambda");

var _conanAwsLambda2 = _interopRequireDefault(_conanAwsLambda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conan = new _conan2.default();
conan.use(_conanAwsApiGateway2.default);
conan.use(_conanAwsLambda2.default);

conan.lambda("sumLambda").alias("staging").handler("default").description("A sum").filePath("dist/lambdas/sum.withTPipe.js").dependencies("dist/functions/*").dependencies("dist/mappers/*").dependencies("node_modules/tpipe/**/*").dependencies("node_modules/tpipe-express/**/*").dependencies("node_modules/debug/**/*").dependencies("node_modules/ms/**/*").dependencies("node_modules/bluebird/**/*").role("MyIamRoleName").runtime("nodejs4.3");

conan.api("test").stage("staging").get("/sum").queryStrings("a", "b").lambda("sumLambda", "staging").statusCodes({
  "200": "",
  "500": "Internal*"
});

console.log("Deploy beginning...");
conan.deploy(function (error) {
  if (error) {
    throw error;
  }
  console.log("Deploy complete!");
});
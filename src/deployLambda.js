import Conan from "conan";
import ConanAwsApiGatewayPlugin from "conan-aws-api-gateway";
import ConanAwsLambdaPlugin from "conan-aws-lambda";

const conan = new Conan();
conan.use(ConanAwsApiGatewayPlugin);
conan.use(ConanAwsLambdaPlugin);

conan
  .lambda("sumLambda")
  .alias("staging")
  .handler("default")
  .description("A sum")
  .filePath("dist/lambdas/sum.withTPipe.js")
  .dependencies("dist/functions/*")
  .dependencies("dist/mappers/*")
  .dependencies("node_modules/tpipe/**/*")
  .dependencies("node_modules/tpipe-express/**/*")
  .dependencies("node_modules/debug/**/*")
  .dependencies("node_modules/ms/**/*")
  .dependencies("node_modules/bluebird/**/*")
  .role("MyIamRoleName")
  .runtime("nodejs4.3");

conan
  .api("test")
  .stage("staging")
  .get("/sum")
  .queryStrings("a", "b")
  .lambda("sumLambda", "staging")
  .statusCodes({
      "200": "",
      "500": "Internal*"
  });

console.log("Deploy beginning...");
conan.deploy(error => {
    if (error) { throw error; }
    console.log("Deploy complete!");
});
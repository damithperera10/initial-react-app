import merge from "lodash/merge";
import baseConfig from "./base.config.json";


let environment = process.env.NODE_ENV;

let environmentConfig = {};

if (!environment) {
  console.warn(`NODE_ENV not set. Falling back to development configuration.`);
  environment = "development";
}

try {
  environmentConfig = require(`./${environment}.config.json`);
  console.info(`Using configuration file for the environment ${environment}`);
} catch (e) {
  console.warn(`Missing configuration file for the environment ${environment}`);
}

const config = merge({}, baseConfig, environmentConfig);

export default config;

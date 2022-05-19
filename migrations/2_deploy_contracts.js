const MyToken = artifacts.require("MyToken");
const IFO = artifacts.require("IFO");

module.exports = function (deployer) {
  deployer.deploy(MyToken);
  deployer.deploy(IFO);
};

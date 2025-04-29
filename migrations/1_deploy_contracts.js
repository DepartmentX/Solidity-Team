const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = function(deployer) {
  deployer.deploy(CampaignFactory, {
    gas: 5000000,
    from: web3.eth.accounts[0]
  });
}; 
// const TokenVesting = artifacts.require("TokenVesting")
const SimpleToken = artifacts.require("SimpleToken")
const SampleCrowdsale = artifacts.require("SampleCrowdsale")

module.exports = function(deployer) {
  // deployer.deploy(SimpleToken);
  // deployer.deploy(SampleCrowdsale);

  // const start = 1450656000
  // const cliff = 31536000 // ~1 yr
  // const duration = 126144000 // ~4yrs
  // const amount = 5000 * 1e18

  const start = 1522675593
  const end = 1522876593
  const rate = 0.0000000000000085
   const cap = 1000000000000000000000
   const goal = 100000000000000000000

  

// deployer.deploy(SimpleToken).then(() => {
    // return deployer.deploy(SimpleToken)
  // }).then(() => {
    const beneficiary = "0xA60ec236854490Ac46C1cc507bA7521B4A6025CD"
    // const simpleToken = SimpleToken.at(SimpleToken.address)
    deployer.deploy(SampleCrowdsale, start, end, rate, beneficiary, cap, "0xc17253c3d8ae23857ba3534116e2514f26b9ab17", goal);
  // })


  // deployer.deploy(TokenVesting, beneficiary, start, cliff, duration, true).then(() => {
  //   return deployer.deploy(SimpleToken)
  // }).then(() => {
  //   const simpleToken = SimpleToken.at(SimpleToken.address)
  //   simpleToken.transfer(TokenVesting.address, amount)
  // })
}

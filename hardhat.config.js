require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/wVpJCKMu1ACtJj_QnCE4ZF8LrorKMHH3",
      accounts: [process.env.REACT_APP_ETHERSCAN_KEY]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
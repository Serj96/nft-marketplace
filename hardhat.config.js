require("@nomiclabs/hardhat-waffle");

const projectId = "5fceda582a1a49909721207f3a913237"
module.exports = {

networks: {
  hardhat: {
    chainId: 1337
  },
  rinkeby: {
    url: `https://rinkeby.infura.io/v3/${projectId}`,
    accounts: [process.env.REACT_APP_PRIVATE_KEY],
  },

},
  solidity: "0.8.4",
};

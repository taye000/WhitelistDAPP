require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const PRIVATEKEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [PRIVATEKEY],
    },
  },
};

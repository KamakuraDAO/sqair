require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/LRIssQ4nzFAu_lcP5ShkjGrJShQ_ZNZH",
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/uFs9XjGSKtWEqIVIaxohMeA0Gw1u1CDL",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/RkW4fXoL1GGfXQlGqxs9W-Z0SLVhe1xK",
      accounts: [PRIVATE_KEY],
    },
    shibuya: {
      url:"https://rpc.shibuya.astar.network:8545",
      chainId:81,
      accounts:[process.env.PRIVATE_KEY],
    }
    /*
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [PRIVATE_KEY],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    matic: {
      url: process.env.ALCHEMY_URL ?? "",
      accounts: [PRIVATE_KEY],
    },
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [PRIVATE_KEY],
    },
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
    taiko: {
      url: "https://l2rpc.hackathon.taiko.xyz",
      accounts: [PRIVATE_KEY],
    },
    mantle: {
      chainId: 5001,
      url: "https://rpc.testnet.mantle.xyz",
      accounts: [PRIVATE_KEY || ""],
    },
    */
  },
  
  abiExporter: {
    path: "../next-app/contracts/ABI",
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: false,
  },
  
  etherscan: {
    api: process.env.ETHERSCAN_KEY,
  },
};

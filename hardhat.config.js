require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PAh1QPCQq3Dq8xKslKRnxXH-5z41rgJf',
      accounts: [
        '6b7c5a5fbe5db95bf0e2da8fdf17be703c5937ae642e13c71c2de42a70780371',
      ],
    },
  },
};

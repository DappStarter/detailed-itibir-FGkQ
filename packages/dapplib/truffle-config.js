require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember company harvest battle frame gas'; 
let testAccounts = [
"0xb2e9cf1c17f6dc10d1efeab6b6ed84632604faa041d3c2e910725cf2d1bc373b",
"0x9c2799df1ed4b19642e95bf01910611a6bade2a5069bbf084b25de01d1b9b4fb",
"0x6d801b91ad9bd2ad497b0d261bbe7a9351b01b22d08808dadd0add39c5ccb33e",
"0x8807cd25d6c57b0510f2bbf0776094cbc3bb2604f7f785d732fe9f9902772cfe",
"0x85e15c6ccc40c347dbfe788e1832c766c666d99e66f9efd19d106d263d693d74",
"0xeed28381173b1eb239b34683451eddcca8a266a2bd33e3ec04bf596c6dd3ac42",
"0x8cb741a70ea9710f0bb3481c47d5086ed82a6cf05a7bad4bb24c12b7a9c8e5fb",
"0x148ded69bc815b7e349d006d5b6e59de1ad73b8642af77a028b1995389f70d6b",
"0xca509489436160833502d1126cc58a70e29973d99c96f0f2d4e6b40a346e0c08",
"0xa3b6d797643e50c97257a46efce75c5950d7ff629c0772d8de3b917148ff3441"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note museum unveil inner neck foam slender'; 
let testAccounts = [
"0x6c2f7aca54b658c27116d51b7e68fa9480a272267517e0bfac0b759a11562eea",
"0xdfa24ac15ca93fa1475b0dceca793aef362e673f3c14156870b6caa1be407760",
"0x884a00f556722760dd8695a939e376b4d1bccba2f89590a80aed4dc239346589",
"0x5a6f1fd69c1ee1fe2cf33d4a35e915eeaab4c7868f882bfe02a4f0414b46977a",
"0x309f91fc13b91e9e0018334901db2728be7f94c8c0c5e269fc6a178d0aad3035",
"0xef24d3520ced5333735835e59fe21c569ecd1267f1bc3924d80b732e35027114",
"0x8537a3670c35b42984d17786e2ac061166cd75e36f7847501811e7294a28ccc8",
"0x9a80100d9469adb1d58171641b86c9aa0d6d492fb22bd2f8abf84a3a2be57445",
"0x218b24bd84dfffa733b41a5ee9d7f4a4ed200a8da6c89ecc10ac05cc2c36de9a",
"0x5e1104682da1fa92be9b5a7903054d99837786f5282d01555d32a35a3d0c1a89"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

/* eslint-disable max-len */
import { getRawHex, getScriptAndArguments } from '../src/eth_utils';

const rlp = require('rlp');

const transferTx = {
  chainId: 1,
  nonce: '0x31b',
  gasPrice: '0xc4b20100',
  gasLimit: '0x5450',
  to: '0x0644De2A0Cf3f11Ef6Ad89C264585406Ea346a96',
  value: '0xde0b6b3a7640000',
  data: '',
};

const erc20TransferTx = {
  chainId: 1,
  nonce: '0x31b',
  gasPrice: '0xc4b20100',
  gasLimit: '0x5450',
  to: '0x0644De2A0Cf3f11Ef6Ad89C264585406Ea346a96',
  value: '0xde0b6b3a7640000',
  data: '0xa9059cbb000000000000000000000000c94f3bebddfc0fd7eac7badb149fad2171b94b6900000000000000000000000000000000000000000000000000000000000003e8',
  tokenInfo: { symbol: 'DAI', decimals: 18 },
};

test('should build correct transaction hex', () => {
  const hex = rlp.encode(getRawHex(transferTx)).toString('hex');
  expect(hex).toBe('ed82031b84c4b20100825450940644de2a0cf3f11ef6ad89c264585406ea346a96880de0b6b3a764000080018080');
});


test('should get transfer argument and script', () => {
  const { argument, script } = getScriptAndArguments('TRANSFER', 0, transferTx);
  expect(argument).toBe('15328000002C8000003C8000000000000000000000000644De2A0Cf3f11Ef6Ad89C264585406Ea346a9600000de0b6b3a7640000000000000000c4b2010000000000000000005450000000000000031b0001');
  expect(script).toBe('03000601C707000000003CCC0710C0C2ACD70032FFF8C2ACD7001EFFF6C2ACD70028FFF6CC071094CAA02700C2A2D700FFF6CC071080C2ACD7003AFFFECC07C0028080C3709710D107C03CCC0FC0023078BAA02F6C0E01DDF09700DAA2D7C0FFF612D207CC05065052455353425554546f4e00304502201F5179C4FAAFA09B28C57FA9D7DFC1BB1D9C582A98ECEE0A474DC00B536BC72B0221008ADD665FF6BDFE10A8168CA5F37E054C6101184D0375F1E795D8CD671542AA0E');
});

test('should get erc20 transfer argument and script', () => {
  const { argument, script } = getScriptAndArguments('ERC20', 0, erc20TransferTx);
  expect(argument).toBe('15328000002C8000003C800000000000000000000000c94f3bebddfc0fd7eac7badb149fad2171b94b690000000000000000000003e8000000000000c4b2010000000000000000005450000000000000031b00011203444149000000000644De2A0Cf3f11Ef6Ad89C264585406Ea346a96000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  expect(script).toBe('03000601C707000000003CCC07C002F800C2ACD70034FFF8C2A5D700FFF6C2ACD7002AFFF6CC071094CAAC270047CC07C01380B844a9059cbb000000000000000000000000CAA02700CC07200000000000000000000000000000000000000000CAA2C7000CC2ACD7003CFFFECC07C0028080C37097C00211ACC7CC3E1D045B1507C004CC0F104012AC17C03F0401071507C002FF00B5AC17003FCAA6BF00DEF09700250F00CC0FC0023078BAA02F6C0E01DDF0970012AC17C03E0400141507C002FF00B5AC17003EDAA2C7B00CD207CC05065052455353425554546f4efa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
});

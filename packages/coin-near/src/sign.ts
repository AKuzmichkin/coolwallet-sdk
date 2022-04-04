import { tx, apdu/*, utils*/ } from '@coolwallet/core';
import * as scriptUtil from './utils/scriptUtils';
import * as types from './config/types';

// const accountIndexToKeyId = (coinType: string, accountIndex: number) => {
//   const accountIndexHex = accountIndex.toString(16).padStart(2, '0');
//   const keyId = coinType.concat(accountIndexHex).concat('000000');
//   return keyId;
// };

export default async function signTransaction(
  signTxData: types.SignTxType
): Promise<string> {

  const { script, argument } = await scriptUtil.getScriptAndArguments(signTxData.transaction);

  await apdu.tx.sendScript(signTxData.transport!, await script);
  const encryptedSig = await apdu.tx.executeScript(signTxData.transport!, signTxData.appId, signTxData.appPrivateKey, await argument);
  await apdu.tx.finishPrepare(signTxData.transport!);
  await apdu.tx.getTxDetail(signTxData.transport!);
  const decryptingKey = await apdu.tx.getSignatureKey(signTxData.transport!);
  await apdu.tx.clearTransaction(signTxData.transport!);
  await apdu.mcu.control.powerOff(signTxData.transport!);
  const sig = tx.util.decryptSignatureFromSE(encryptedSig!, decryptingKey, true, false);
  return sig.toString('hex');
}

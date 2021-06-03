import { transport } from '@coolwallet/core';

export type Output = {
  address: string,
  value: number
}

export type Transport = transport.default;

export type signTx = {
  transport: Transport,
  appPrivateKey: string,
  appId: string,
  transaction: Transaction,
  addressIndex: number,
  publicKey: string | undefined,
  confirmCB: Function | undefined,
  authorizedCB: Function | undefined
}

export type signMsg = {
  transport: Transport,
  appPrivateKey: string,
  appId: string,
  message: string,
  addressIndex: number,
  confirmCB: Function | undefined,
  authorizedCB: Function | undefined
}

export type signTyped = {
  transport: Transport,
  appPrivateKey: string,
  appId: string,
  typedData: any,
  addressIndex: number,
  confirmCB: Function | undefined,
  authorizedCB: Function | undefined
}


export type Transaction = {
  // [key: string]: any,
  nonce: string,
  gasPrice: string,
  gasLimit: string,
  to: string,
  value: string,
  data: string,
  option: Option
}

export type Option = {
  info : {
    symbol: string,
    decimals: string
  }
};

export const EIP712Schema = {
  type: 'object',
  properties: {
    types: {
      type: 'object',
      properties: {
        EIP712Domain: { type: 'array' },
      },
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            type: { type: 'string' }
          },
          required: ['name', 'type']
        }
      },
      required: ['EIP712Domain']
    },
    primaryType: { type: 'string' },
    domain: { type: 'object' },
    message: { type: 'object' }
  },
  required: ['types', 'primaryType', 'domain', 'message']
}

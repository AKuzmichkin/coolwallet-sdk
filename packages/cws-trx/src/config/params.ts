
export const COIN_TYPE = '800000C3';

/* eslint-disable max-len */
export const TRANSFER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C0020801CC071012A00700CC07C0020a2dCC07C02D747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e7472616374CC071012A00700BFA2C71C1502BFACC7CC29150202BFACD7C03EFFF603BE0700BE0700BE0700BFACD7C048FFF60EDC07C003545258CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7C03EFFF606D207CC05065052455353425554546f4e',
  signature:
    '3044022078941D1EAF43528957A611FA9C4C6C803F71BA612557261EC5AF944DE3440A8B0220558AF4CAA9C42A71A3656CFB2117CD5BCDEEC3542F972C562FD78F3BEC4B596A'
};

export const FREEZE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BFACD7C029FFF602BFACD7C033FFF6031AAC17C03D0601CC07C0025001BFACC7CC3E150F02BE0700BE0700BE0700BFACD7C053FFF60ED207CC0306545258467265657a65CAACCF003E155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    '3045022100A1A0F0E68590B718B185D1BB40E48CEBEACE441FDFC297F28430660B5D45201F0220789627894FA9E54AFF399ABE28BABFA7B55E194289E18FD6B994B9DAAC21EBC3'
};

export const FREEZE_NO_RECEIVER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BFACD7C029FFF602BFACD7C033FFF6031AAC17C03D0601CC07C0025001BE0700BE0700BE0700BFACD7C03EFFF60EDC07C003545258DC07C006467265657a65CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    '30450220360BCC09F1B3611199AF71123BF84CCAC291E0B2E697C17B9C3E94CAD4B0E811022100FBC74E497D0B73C95743A3DDB905DF3598C17D2AE083903A9FF09D48EBDB0F42'
};

export const UNFREEZE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C15021AAC17C0290601CC07C0025001BFACC7CC2A150F02BE0700BE0700BE0700BFACD7C03FFFF60ED207CC0305545258556e66727aCAACCF002A155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '3046022100DBDE9B71EFBE9BC13B423B7A7F111A57AF9159F9EEA08EDA86395A02C25D5201022100B3D8D152C5858B47FD2792860959DBF40134C00D78DEDA1B27B0184E09C87B89'
};

export const UNFREEZE_NO_RECEIVER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C15021AAC17C0290601CC07C0025001BE0700BE0700BE0700BFACD7C02AFFF60EDC07C003545258DC07C005556e66727aCAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '3046022100CE849BB21CB88AAB91500AEA4EBD2D3319DD281E02799D35CCE50B03C09E82E3022100FAD0DD683BF18575AFB05E41CD050A45B2DFA2BAD4E0F54E4777CA781550841F'
};

export const WITHDRAW = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080dCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BE0700BE0700BE0700BFACD7C029FFF60ED207CC0306545258526577617264CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '3046022100BEB3D14FA1B6430F29F6FF1A1864E4067628D5D3B8EBC2A82EC0433FE2A6A2CB022100852F28E66B51B15A5C7EB96276814211529F2161AF387649524B3B955FA3CA70'
};

export const VOTE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C0020804CC071012A00700CC07C0020a30CC07C030747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e566f74655769746e657373436f6e7472616374CC071012A00700BFA2C71C1502CC071012A00700BFACC71C291502BFACD7C03EFFF602BE0700BE0700BE0700BE0700BFACD7C048FFF60EDC07C003545258DC07C004566f7465CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7003EFFF6D207CC05065052455353425554546f4e',
  signature:
    '30450220374F0606B515F33586E27F06038B0368C44D95D50416A328060B4B88629213400221009F4A1F95AC7194606E0A26783CB9F311FA0E10CECC3C8C10B8996C9F8AB2D20C'
};

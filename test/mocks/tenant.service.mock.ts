jest.mock('./../../src/shared/services/tenant.service', () => ({
  getTenantParams: () => ({
    enableMarketplaceView: 'true',
    enableFiatDepositPage: 'true',
    enableModernHomepage: 'false',
    isInterstitialPageList: 'true',
    application: 'DAVINCI',
    availableLanguages: 'en,pt',
    auctionServiceWallets: '',
    gtmId: 'GTM-TKL9NT2',
    webAppUrl: 'https://client.davinci.qa.cere.network',
    externalAuthUrl: '',
    isExternalAuthEnabled: '',
    exhibitionPreviewKey: 'fb109f0fb4b746639e95f8f6e7dc7d6d',
    identityApiUrl: 'https://id.dev.cere.io',
    freeportApiUrl: 'https://api.freeport.dev.cere.network',
    ddcMediaApiUrl: 'https://ddc.freeport.dev.cere.network',
    rxbAppId: '2095',
    firebaseApiKey: 'AIzaSyB5axT_W0uF0zMD-hvpnctUcULHH6dxnIg',
    firebaseAuthDomain: 'dev-cere-davinci.firebaseapp.com',
    firebaseProjectId: 'dev-cere-davinci',
    firebaseAppId: '1:842050289924:web:3a0737192d4bf74eea5051',
    cereWalletDisableBiconomy: '',
    cereWalletPopupMode: '',
    appApn: 'io.cere.davinci',
    appIbi: 'io.cere.Davinci',
    appIsi: '1592636763',
    dynamicLinkUrl: 'https://ceredev.page.link',
    marketplaceAuctionsEnabled: 'false',
    cmsApiUrl: 'https://cms.freeport.dev.cere.network',
  }),
  getTenantId: () => 'davinci',
}));

export {};

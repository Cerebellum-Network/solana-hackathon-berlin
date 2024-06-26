# SolaFans

## Bring the Future Of Web3 Media to Solana

We are building this All-in-1 Artist Web3 Media Platform, fully integrated on Solana, to showcase how the power of decentralized data can change the game for artists and fans.
We are enabling the following key features:

- Artists Can Easily Publish & Sell Content NFT embedded Anywhere (e.g. decentralize Spotify/Patreon)
- Fans NFT's are seamlessly purchased -> custody'd -> NFT-Permissioned content stream direct from one of our decentralized data clouds  (decentralized AWS/CloudFlare)
- Realtime Fan Insights > Rewards Fans with Exclusive Event/Experience Access (decentralize Ticketmaster/Eventbrite) - WIP

## Added Solana Support Into Our Existing Tech Stack

### [Cere Media SDK](https://cerebellum-network.github.io/cere-media-sdk-js/)

The Media SDK is a development kit that can be used to upload and retrieve encrypted content for NFTs.
- [Added Solana signature scheme support](https://github.com/Cerebellum-Network/cere-media-sdk-js/pull/40)

### [Cere Wallet](https://github.com/cere-io/cere-wallet-client)

Non-custodial walled with social auth.

- Added Solana network support to [API](https://github.com/cere-io/cere-wallet-api/pull/35/files) and [Client](https://github.com/cere-io/cere-wallet-client/pull/197/files)

### [Fiat2Crypto Payment Service](https://github.com/cere-io/blockchain-transaction-service)

- [Added Solana network support](https://github.com/cere-io/blockchain-transaction-service/pull/42/files)

### [Cere DDC](https://github.com/Cerebellum-Network/cere-ddc-sdk-js)

Using Cere Decentralized data cloud cluster for storing assets and metadata For NFT's.

## Quick start

1. Install dependencies:

```bash
nvm exec npm i
```

2. Copy ENV file:

```bash
cp env/.env.dev .env
```

3. Run the app:

```bash
nvm exec npm start
```

4. Open http://localhost:3000 in your browser

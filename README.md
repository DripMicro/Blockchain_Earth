# Earth-Salona

### Make .env file

```
REACT_APP_CANDY_MACHINE_ID : Candy Machine ID
REACT_APP_SOLANA_NETWORK : Solana Network
REACT_APP_SOLANA_RPC_HOST : End Point URL
SKIP_PREFLIGHT_CHECK : true
```

### Initialize treasury SOL keypair

1. Set URL to devnet

```
solana config set --url Solana Network
```

2. Generate a new keypair

```
solana-keygen new --outfile ~/.config/solana/devnet.json
```

2. Set the keypair in your Solana config

```
solana config set --keypair ~/.config/solana/devnet.json
```

### Run Program

```
yarn install
```

```
yarn start
```

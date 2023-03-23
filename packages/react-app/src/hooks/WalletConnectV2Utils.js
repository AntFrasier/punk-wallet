import { Core } from "@walletconnect/core";
import { Web3Wallet} from "@walletconnect/web3wallet";
import {useCallback, useState, useEffect} from "react";

export let web3wallet;

async function createWeb3Wallet() {
    const core = new Core({
        projectId: process.env.REACT_APP_PROJECTID,
    });

    web3wallet = await Web3Wallet.init({
        core,
        metadata: {
            name: "🧑‍🎤 PunkWallet.io",
            description: "Forkable web wallet for small/quick transactions.",
            url: "https://punkwallet.io",
            icons: ["https://punkwallet.io/punk.png"],
        },
    });
}

// Initialize the Web3Wallet
export default function useInitialization() {
  const [initialized, setInitialized] = useState(false);

  const onInitialize = useCallback(async () => {
    try {
      await createWeb3Wallet();
      setInitialized(true);
    } catch (err) {
      console.log("Error for initializing", err);
    }
  }, []);

  useEffect(() => {
    if (!initialized) {
      onInitialize();
    }
  }, [initialized, onInitialize]);

  return initialized;
}

export async function web3WalletPair(uri) {
  return await web3wallet?.core.pairing.pair({ uri: uri });
}
import { createPublicClient, createWalletClient } from "viem";
import { http, createConfig } from "wagmi";
import { lineaSepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const publicClient = createPublicClient({
  chain: lineaSepolia,
  transport: http(),
});

const rpcUrl = `https://linea-sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;

export const walletClient = createWalletClient({
  chain: lineaSepolia,
  transport: http(rpcUrl),
  account: process.env.PRIVATE_KEY as `0x${string}`,
});

export const config = createConfig({
  chains: [lineaSepolia],
  connectors: [injected()],
  transports: {
    [lineaSepolia.id]: http(),
  },
});

# MetaMask Gaia Agent Starter

## Overview

The MetaMask Gaia Agent Starter is a Next.js project that integrates the Gaia's AI inference framework with the MetaMask SDK. This project allows you to leverage advanced AI functionalities while utilizing MetaMask for secure blockchain interactions.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (LTS version recommended)
- npm, yarn, pnpm, or bun
- For Gaia Node:
    
    
    | System | Minimum Requirements |
    | --- | --- |
    | OSX with Apple Silicon (M1-M4 chip) | 16GB RAM (32GB recommended) |
    | Ubuntu Linux 20.04 with Nvidia CUDA 12 SDK | 8GB VRAM on GPU |
    | Azure/AWS | Nvidia T4 GPU Instance |

## Getting Started

### Next.js Project Setup

1. Clone the repository:

```bash
git clone https://github.com/harishkotra/metamask-wallet-agent-gaia
cd metamask-wallet-agent-gaia

```

1. Install dependencies:

```bash
pnpm install

```

1. Run the development server:

```bash
 pnpm dev

```

1. Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

### Setting Up the Gaia Node

1. Download and install the Gaia Node:

```bash
curl -sSfL https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh | bash

```

1. Set up the environment path (use the command printed in your terminal):

```bash
source ...

```

1. Initialize your Gaia Node:

```bash
gaianet init

```

2. Start your Gaia Node:

```bash
gaianet start

```

3. Access your node using the provided public URL (e.g., [https://0xf63939431ee11267f4855a166e11cc44d24960c0.gaianet.xyz](https://0xf63939431ee11267f4855a166e11cc44d24960c0.gaianet.xyz/))
4. To stop the node:

```bash
gaianet stop

```

**Here’s also a [video](https://youtu.be/LVYXtg39t6c?si=rz2n_zyxufk9EXsa) to help you to run your own gaia node.**


## Environment Variables

### .env Variables

Before starting the project, make sure to update the `.env` file with the following values:

```bash
# Infura API key for connecting to Ethereum networks
INFURA_API_KEY=your_infura_api_key_here

# Private key of the account to be used for deployments and transactions
ACCOUNT_PRIVATE_KEY=your_account_private_key_here

```

## Project Structure

The project uses Next.js App Router. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- **Next.js 15**: Utilizes the latest version of Next.js for powerful full-stack capabilities.
- **React Server Components**: Adds components without sending additional client-side JavaScript.
- **Built-in Optimizations**: Automatic image, font, and script optimizations for improved UX and Core Web Vitals.
- **Advanced Routing & Nested Layouts**: Creates routes using the file system, supporting advanced routing patterns and UI layouts.
- **MetaMask Integration**: Secure blockchain interactions and wallet connectivity.
- **Gaia AI Integration**: Access to advanced AI functionalities through the Gaia protocol.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [MetaMask Documentation](https://docs.metamask.io/)
- [Gaia AI Documentation](https://docs.gaianet.ai/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

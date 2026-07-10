# HerbTrace Run Guide

This guide provides instructions for setting up and running the HerbTrace platform, which includes a Blockchain component, a Backend server, and a Frontend client.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally on `mongodb://127.0.0.1:27017/herbtrace`)
- [Hardhat](https://hardhat.org/) (Installed via npm dependencies)

---

## Step 1: Start Local Blockchain

The project uses a local Hardhat network.

1. Open a terminal in the `blockchain` directory:
   ```powershell
   cd blockchain
   ```
2. Start the local node:
   ```powershell
   npx hardhat node
   ```
   > [!NOTE]
   > Keep this terminal open to maintain the local blockchain network.

---

## Step 2: Deploy Smart Contract

Once the local node is running, you need to deploy the `HerbTrace` smart contract.

1. Open a **new terminal** in the `blockchain` directory.
2. Run the deployment script:
   ```powershell
   npx hardhat run scripts/deploy.js --network localhost
   ```
   > [!TIP]
   > This script will automatically update the backend's configuration in `server/config/blockchain.json`.

---

## Step 3: Run Backend Server

1. Open a terminal in the `server` directory:
   ```powershell
   cd server
   ```
2. Start the server (ensure MongoDB is running):
   ```powershell
   npm start
   ```
   > [!IMPORTANT]
   > The server runs on [http://localhost:5000](http://localhost:5000).

---

## Step 4: Run Frontend Client

1. Open a terminal in the root directory:
2. Start the development server:
   ```powershell
   npm run dev
   ```
   > [!IMPORTANT]
   > The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## Alternative: Using the Startup Script

For convenience, you can use the provided PowerShell script to launch both the Backend and Frontend in separate windows.

1. Open a terminal in the `HerbTrace` root directory.
2. Run the script:
   ```powershell
   ./startup.ps1
   ```
   > [!WARNING]
   > You must still start the **Hardhat Node** and **Deploy the Contract** (Steps 1 & 2) manually before running this script.

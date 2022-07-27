"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const fs_extra_1 = __importDefault(require("fs-extra"));
require("dotenv/config");
async function main() {
    const proxy = "http://127.0.0.1:7545";
    // Connecting to local blockchain
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(proxy);
    const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const abi = fs_extra_1.default.readFileSync("./contracts-build/contracts_SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs_extra_1.default.readFileSync("./contracts-build/contracts_SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers_1.ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy();
    await contract.deployTransaction.wait(1);
    console.log("Contract Deployed At: " + contract.address);
    const currentFavouriteNumber = await contract.retrieve();
    console.log("Current Favourite Number: " + currentFavouriteNumber);
    const transactionResponse = await contract.store("100");
    const transactionReceipt = await transactionResponse.wait(1);
    const updatedFavouriteNumber = await contract.retrieve();
    console.log("Updated Favourite Number: " + updatedFavouriteNumber);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});

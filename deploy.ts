import { ethers } from "ethers";
import fs from "fs-extra"
import * as dotenv from "dotenv";

dotenv.config();

async function main(): Promise<void> {
    // Connecting to local blockchain
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC);
    const wallet = new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        provider
    );
    const abi = fs.readFileSync("./contracts-build/contracts_SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./contracts-build/contracts_SimpleStorage_sol_SimpleStorage.bin", "utf8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    console.log("Deploying, please wait...");

    const contract = await contractFactory.deploy();

    await contract.deployTransaction.wait(1);

    console.log("Contract Deployed At: " + contract.address);

    const currentFavouriteNumber: number = await contract.retrieve();

    console.log("Current Favourite Number: " + currentFavouriteNumber);

    const transactionResponse = await contract.store("100");
    const transactionReceipt = await transactionResponse.wait(1);

    const updatedFavouriteNumber: number = await contract.retrieve();

    console.log("Updated Favourite Number: " + updatedFavouriteNumber);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
})
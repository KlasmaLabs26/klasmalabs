const { ethers } = require("ethers");

exports.getContractInfo = async (req, res) => {
  try {
    console.log("===== Controller HIT =====");

    const provider = new ethers.providers.JsonRpcProvider(
      "https://ethereum.publicnode.com"
    );

    console.log("Provider Created");

    const contractAddress =
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

    console.log("Using Address:", contractAddress);

    const abi = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function decimals() view returns (uint8)"
    ];

    console.log("ABI Loaded");

    const contract = new ethers.Contract(
      contractAddress,
      abi,
      provider
    );

    console.log("Contract Created");

    console.log("Fetching Name...");
    const name = await contract.name();

    console.log("Fetching Symbol...");
    const symbol = await contract.symbol();

    console.log("All Data Retrieved");

    return res.status(200).json({
    success: true,
    contractAddress,
    name,
    symbol,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
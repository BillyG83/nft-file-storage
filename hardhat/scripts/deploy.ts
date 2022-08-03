import { ethers } from "hardhat";

async function main() {
  const ERC1155Custom = await ethers.getContractFactory("ERC1155Custom");
  const erc1155 = await ERC1155Custom.deploy();

  await erc1155.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

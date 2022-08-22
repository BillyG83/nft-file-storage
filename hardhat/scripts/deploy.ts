import { ethers } from "hardhat";

async function main() {
  const ERC721Custom = await ethers.getContractFactory("ERC721Custom");
  const erc721 = await ERC721Custom.deploy();

  await erc721.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

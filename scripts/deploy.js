const main = async () => {
  const accounts = await hre.ethers.getSigners();
  const voters = accounts.slice(1, 11);

  const voterAddresses = [];
  voters.forEach((voter) => voterAddresses.push(voter.address));

  console.log(voterAddresses);

  const ballotContractFactory = await hre.ethers.getContractFactory("Ballot");
  const ballotContract = await ballotContractFactory.deploy([
    "0x446f6e616c64204a2e205472756d700000000000000000000000000000000000",
    "0x4a6f6520426964656e0000000000000000000000000000000000000000000000",
    "0x4b616e7965205765737400000000000000000000000000000000000000000000",
  ]);

  await ballotContract.deployed();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

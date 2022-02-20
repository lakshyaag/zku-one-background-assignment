const { expect } = require("chai");

describe("Old ballot contract", function () {
  it("Launch proposal", async function () {
    const [owner, randomAddress] = await ethers.getSigners();

    const ballotContractFactory = await ethers.getContractFactory("Ballot");
    const ballotContract = await ballotContractFactory.deploy([
      "0x446f6e616c64204a2e205472756d700000000000000000000000000000000000",
      "0x4a6f6520426964656e0000000000000000000000000000000000000000000000",
      "0x4b616e7965205765737400000000000000000000000000000000000000000000",
    ]);

    await ballotContract.deployed();

    let chairperson = await ballotContract.chairperson();

    expect(chairperson).to.equal(owner.address);
  });

  it("Give right to vote to 10 people", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    const voters = accounts.slice(1, 11);

    const ballotContractFactory = await ethers.getContractFactory("Ballot");
    const ballotContract = await ballotContractFactory.deploy([
      "0x446f6e616c64204a2e205472756d700000000000000000000000000000000000",
      "0x4a6f6520426964656e0000000000000000000000000000000000000000000000",
      "0x4b616e7965205765737400000000000000000000000000000000000000000000",
    ]);

    await ballotContract.deployed();

    for (const voter of voters) {
      await ballotContract.giveRightToVote(voter.address);
      //   await ballotContract.connect(voter).vote(1);
    }

    let chairperson = await ballotContract.chairperson();

    expect(chairperson).to.equal(owner.address);
  });
});

describe("New ballot contract", function () {
  it("Launch proposal", async function () {
    const [owner, randomAddress] = await ethers.getSigners();

    const newBallotContractFactory = await ethers.getContractFactory(
      "NewBallot"
    );
    const newBallotContract = await newBallotContractFactory.deploy([
      "0x446f6e616c64204a2e205472756d700000000000000000000000000000000000",
      "0x4a6f6520426964656e0000000000000000000000000000000000000000000000",
      "0x4b616e7965205765737400000000000000000000000000000000000000000000",
    ]);

    await newBallotContract.deployed();

    let chairperson = await newBallotContract.chairperson();

    expect(chairperson).to.equal(owner.address);
  });

  it("Give right to vote to 10 people", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    const voters = accounts.slice(1, 11);

    const voterAddresses = [];
    voters.forEach((voter) => voterAddresses.push(voter.address));

    const newBallotContractFactory = await ethers.getContractFactory(
      "NewBallot"
    );
    const newBallotContract = await newBallotContractFactory.deploy([
      "0x446f6e616c64204a2e205472756d700000000000000000000000000000000000",
      "0x4a6f6520426964656e0000000000000000000000000000000000000000000000",
      "0x4b616e7965205765737400000000000000000000000000000000000000000000",
    ]);

    await newBallotContract.deployed();

    await newBallotContract.giveRightToVote(voterAddresses);

    // for (const voter of voters) {
    //   await newBallotContract.connect(voter).vote(1);
    // }

    let chairperson = await newBallotContract.chairperson();
    expect(chairperson).to.equal(owner.address);
  });
});

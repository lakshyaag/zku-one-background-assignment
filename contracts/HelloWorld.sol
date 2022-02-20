// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HelloWorld {
    uint256 number;

    constructor(uint256 _number) {
        number = _number;
        console.log("Hello, world! A new contract has been deployed.");
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}
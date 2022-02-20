const ethers = require('ethers')

const createBytes = async (args) => {
    const name = args[0];
    const bytes = ethers.utils.formatBytes32String(name);
    console.log("Bytes: ", bytes);
}

createBytes(process.argv.slice(2))
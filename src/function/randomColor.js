const fetch = require("axios")

try {
    require.resolve("axios")
} catch {
    throw new Error("Cannot find module 'axios' Please do 'npm i axios'")
}

async function randomColor() {
    let res = await fetch("https://api.popcat.xyz/randomcolor")
    return res.data
}

module.exports = randomColor
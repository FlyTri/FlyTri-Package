const fetch = require("axios")

try {
    require.resolve("axios")
} catch {
    throw new Error("Cannot find module 'axios' Please do 'npm i axios'")
}

async function colorInfo(color) {
    if (!color) return undefined
    if(color.includes("#")) color = color.split("#")[1]

    let res = await fetch(`https://api.popcat.xyz/color/${encodeURIComponent(color)}`)
    return res.data
}

module.exports = colorInfo
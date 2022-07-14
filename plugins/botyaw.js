let fs = require('fs')
let handler = async (m) => {
let youarewelcome = fs.readFileSync('./mp3/botyaw.opus')
conn.sendFile(m.chat, youarewelcome, '', '', m, true)
}

handler.customPrefix = /^(terima kasih|makasih|thanks|Thank you|Nuhun|terima kasih amy|thanks amy|thanks bot|makasih bot|syukron|thank you so much|nuhun|terimakasih)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

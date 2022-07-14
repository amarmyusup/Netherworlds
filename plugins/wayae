let fs = require('fs')
let handler = async (m) => {
let wayae = fs.readFileSync('./mp3/wayaewayae.opus')
conn.sendFile(m.chat, wayae, '', '', m, true)
}

handler.customPrefix = /^(wayae|wayae wayae|wayaewayae)$/i
handler.command = new RegExp
handler.limit = true

module.exports = handler

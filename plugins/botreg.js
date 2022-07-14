let fs = require('fs')
let handler = async (m) => {
let botregist = fs.readFileSync('./mp3/botreg.opus')
conn.sendFile(m.chat, botregist, '', '', m, true)
}

handler.customPrefix = /^(daftar)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

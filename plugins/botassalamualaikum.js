let fs = require('fs')
let handler = async (m) => {
let assalamualaikum = fs.readFileSync('./mp3/botassalamualaikum.opus')
conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
}

handler.customPrefix = /^(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)$/i
handler.command = new RegExp
handler.limit = true

module.exports = handler

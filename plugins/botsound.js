let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/botsound.opus')
conn.sendFile(m.chat, hellobot, '', '', m, true)
}

handler.customPrefix = /^(bot|amy|netherworlds)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/botily.opus') 
conn.sendFile(m.chat, hellobot, '', '', m, true)
}

handler.customPrefix = /^(i love you|i ❤️ u|ily|bot ily|ily bot|love you|i love you bot|lopyu|lopyubot|i love u bot|love u|love u bot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler

let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let araaaa = fs.readFileSync('./mp3/botaraara.opus')
conn.sendFile(m.chat, araaaa, '', '', m, true)
//conn.sendMessage(m.chat, araaaa, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(ara ara|ara|araara|ara ara dong|ara ara lagi)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler

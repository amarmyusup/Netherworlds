let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let hellobot = fs.readFileSync('./mp3/bothi.opus') 
conn.sendFile(m.chat, hellobot, '', '', m, true)
//conn.sendMessage(m.chat, hellobot, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: hellobot }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(hi|hii|hiii|hi bot|hii bot|hiii bot|hy|halo|hallo|helo|hello|hy bot|halo bot|hallo bot|helo bot|hello bot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler

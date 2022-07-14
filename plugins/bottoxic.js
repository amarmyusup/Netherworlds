let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let gaboleh = fs.readFileSync('./mp3/botgaboleh.opus')
let ihhomkasar = fs.readFileSync('./mp3/bottoxic.opus')
conn.sendFile(m.chat, ihhomkasar, '', '', m, true)
setTimeout(() => {
conn.sendFile(m.chat, gaboleh, '', '', m, true)
}, 1000)
//conn.sendMessage(m.chat, hellobot, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: hellobot }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(kontol|memek|jembut|jancok|ngentod|anjing|mmk|tolol|bangsat|kntl|vagina|tytyd|titid|titit|k0ntol|k0nt0l|m3m3k|hencet|henceut|bajingan|fuck|fakk|fak|kintil|ngen|ngentot|bngst|jnck|meki|mek|tol|blog|jing|monyet|nyet)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler

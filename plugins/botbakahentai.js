let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let aineess = fs.readFileSync('./mp3/bakahentai.opus')
await conn.sendMessage(m.chat, { audio: { url: "./mp3/bakahentai.opus" }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(soundbakahentai|bakahentai)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

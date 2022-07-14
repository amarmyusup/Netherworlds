let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'ih kamu wibuu', m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu|wf)$/i
handler.limit = true
//MADE IN A M Y
module.exports = handler

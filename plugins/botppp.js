let fs = require('fs')
let handler = async (m) => {
let botppp = fs.readFileSync('./mp3/botppp.opus')
conn.sendFile(m.chat, botppp, '', '', m, true)
}

handler.customPrefix = /^(p|pp|ppp|pppp|ppppp|pppppp|ppppppp|pppppppp|ppppppppp|pppppppppp|ppppppppppp|pppppppppppp|ppppppppppppp)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

/*──────────────────────────────────────
  GitHub   : https://github.com/flying-panties
  Telegram : https://t.me/pantatbegetar
  Channel : https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04
  Group : https://chat.whatsapp.com/Lv5UCEtBDL9BUyoh9VA2kl?mode=gi_t
  Api : https://api.nexray.web.id
  
{ Di Sponsi Oleh Rest Api api.nexray.web.id }
{ JANGAN LUPA HIDUPIN STAR REPOSITORY NYA YA 🌟 🤩 }
──────────────────────────────────────*/
const chalk = require("chalk");
const fs = require("fs");

const config = {
  owner: ["6282364532184"], 
  ownername: "Denzy ZeroDay",
  botname: "Elaina MD", 
  botname2: "Elaine Multi Device", 
  tempatDB: "database.json", // don't edit
  password: "Denzy ZeroDay", 
  pairing_code: true, // don't edit
  custompairing: String.fromCharCode(65,78,65,75,65,66,65,72),
   image: {
     thumbnail: "https://cdn.nexray.web.id/ju8fjb94.jpg"
   },   
   settings: {
     packname: "Emaina Multi Device",
     description: "this script was created by Denzy ZeroDay",
     author: "Denzy ZeroDay",
     footer: "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴢʏ`"
   },
   newsletter: {
     name: "Denzy ZeroDay",
     id: "120363402308105961@newsletter"
    },
    socialMedia: {
      YouTube: "https://youtube.com/@denzyxdev",
      GitHub: "https://github.com/flying-panties",
      Telegram: "https://t.me/denzy",
      ChannelWA: "https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04"
    }, 
    RestApi: {
      api: "https://api.mikochan.my.id", 
      mikochan: "Denzy ZeroDay"
    },
    message: {
    owner: `🚫 *AKSES DITOLAK*\nFitur ini hanya bisa digunakan oleh *Owner Bot*.`,
    admin: `🚫 *AKSES DITOLAK*\nFitur ini khusus untuk *Admin Grup*.`,
    botAdmin: `🚫 *AKSES DITOLAK*\nBot harus menjadi *Admin Grup* terlebih dahulu untuk menjalankan fitur ini.`,
    group: `🚫 *AKSES DITOLAK*\nFitur ini hanya dapat digunakan di *dalam grup*.`,
    private: `🚫 *AKSES DITOLAK*\nFitur ini hanya bisa digunakan di *chat pribadi*.`,
    prem: `🚫 *AKSES DITOLAK*\nFitur ini hanya tersedia untuk *User Premium*.\n> ketik .prem dan upgrade nomor mu`,
    wait: `⏳ *Mohon tunggu...*\nPermintaan kamu sedang diproses.`,
    error: `❌ *Terjadi kesalahan!*\nSilakan coba lagi nanti.`,
    done: `✅ *Berhasil!*\nProses telah selesai dengan sukses.`
    },
} 
module.exports = config;
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.white("[•] Update"), chalk.white(`${__filename}\n`))
delete require.cache[file]
require(file)
})

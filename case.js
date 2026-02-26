/*──────────────────────────────────────
  GitHub   : https://github.com/flying-panties
  Telegram : https://t.me/pantatbegetar
  Channel : https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04
  Group : https://chat.whatsapp.com/Lv5UCEtBDL9BUyoh9VA2kl?mode=gi_t
  Api : https://api.nexray.web.id
  
{ Di Sponsi Oleh Rest Api api.nexray.web.id }
{ JANGAN LUPA HIDUPIN STAR REPOSITORY NYA YA 🌟 🤩 }
──────────────────────────────────────*/
const config = require('./setting');
const fs = require("fs");
const axios = require("axios")
const path = require('path');
const FormData = require("form-data"); // modul
const form = new FormData();           
const { Sticker } = require('wa-sticker-formatter')
const chalk = require("chalk");
const util = require("util");
const os = require('os');
const moment = require("moment-timezone");
const { exec, spawn, execSync } = require('child_process');
//==================================//
const { default: WAConnection, makeWAMessage, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptionsuseSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WAlanggxyzet, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header, downloadMediaMessage } = require("@denzy-official/baileys");

//==================================//

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/myfunction');
const {
imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, exifAvatar, addExif, writeExifWebp
} = require('./lib/exif');

//==================================//

const { LoadDataBase } = require('./lib/message');
const owners = JSON.parse(fs.readFileSync("./data/owner.json"))
const premium = JSON.parse(fs.readFileSync("./data/premium.json"))

//==================================//

const dbPrem = './data/premium.json';
if (!fs.existsSync(dbPrem)) fs.writeFileSync(dbPrem, '[]');
let prem = JSON.parse(fs.readFileSync(dbPrem));
const toMs = d => d * 24 * 60 * 60 * 1000;
global.isPrem = jid => {
  prem = JSON.parse(fs.readFileSync(dbPrem));
  const u = prem.find(v => v.jid === jid);
  if (!u) return false;
  if (Date.now() > u.expired) {
    prem = prem.filter(v => v.jid !== jid);
    fs.writeFileSync(dbPrem, JSON.stringify(prem, null, 2));
    return false;
  }
  return true;
};

//==================================//

function isSameUser(jid1, jid2) {
    if (!jid1 || !jid2) return false;
    const isLid = (jid) => jid.endsWith('@lid');
    const normalizedJid1 = jid1.replace('@lid', '@s.whatsapp.net');
    const normalizedJid2 = jid2.replace('@lid', '@s.whatsapp.net');
    return areJidsSameUser(normalizedJid1, normalizedJid2);
}

//==================================//

module.exports = sock = async (sock, m, chatUpdate, store) => {
	try {
await LoadDataBase(sock, m)
await LoadDataBase(sock, m)
const botNumber = await sock.decodeJid(sock.user.id)
		const body = ((m.type === 'conversation') ? m.message.conversation :
		(m.type == 'imageMessage') ? m.message.imageMessage.caption :
		(m.type == 'videoMessage') ? m.message.videoMessage.caption :
		(m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
		(m.type == 'reactionMessage') ? m.message.reactionMessage.text :
		(m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
		(m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
		(m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
		(m.type == 'interactiveResponseMessage'  && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
		(m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
		(m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
		(m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';
const budy = typeof m.text === 'string' ? m.text : '';
const buffer64base = `${config.owner}@s.whatsapp.net`

const multiPrefix = [".", "!", "#", ".", "$", "/"]; 
const prefix = multiPrefix.find(p => body.startsWith(p)) || ""; 
const isCmd = typeof body === 'string' && body.length > 0 && multiPrefix.some(p => body.startsWith(p));
const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : body.trim().split(/ +/).slice(1);
const getQuoted = (m.quoted || m) 
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : '';
const isPremium = premium.includes(m.sender)
const owners = Array.isArray(config.owner)
    ? config.owner.map(v => v + "@s.whatsapp.net")
    : [];
const isCreator = [config.botNumber + "@s.whatsapp.net", ...owners].includes(m.sender) || m.isDeveloper === true;
const pushname = m.pushName || "No Name";
const isNumber = m.sender.split('@')[0];
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime); 
const from = m.key.remoteJid;
 
//==================================//

if (isCmd) {
      const time = new Date().toLocaleTimeString("id-ID", { hour12: false });
      const line = chalk.gray("│");
      const who = `${chalk.yellow(pushname)} ${chalk.gray("(" + m.sender + ")")}`;
      const place = m.isGroup ? chalk.magenta("Group: " + m.groupName) : chalk.green("Private");

      console.log(
        chalk.gray("╭────────────────────────────────"),
        `\n${line} ${chalk.cyan("🕒")} ${time}`,
        `\n${line} ${chalk.cyan("💬")} ${chalk.green(budy || m.mtype)}`,
        `\n${line} ${chalk.cyan("👤")} ${who}`,
        `\n${line} ${chalk.cyan("📞")} ${isNumber}`,
        `\n${line} ${chalk.cyan("🏷️")} ${place}`,
        `\n${chalk.gray("╰────────────────────────────────")}\n`
      );
    }

//==================================//
    
const time2 = moment.tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu = "Selamat Malam ";
if (time2 < "05:00:00") {
ucapanWaktu = "Selamat Pagi ";
} else if (time2 < "11:00:00") {
ucapanWaktu = "Selamat Pagi ";
} else if (time2 < "15:00:00") {
ucapanWaktu = "Selamat Siang ";
} else if (time2 < "18:00:00") {
ucapanWaktu = "Selamat Sore ";
} else if (time2 < "19:00:00") {
ucapanWaktu = "Selamat Petang ";
}    
      
//==================================//

switch (command) {
case "menu":
case "help": {
const teks = `
╭───〔 *BOT INFO* 〕
│ • *Owner* : @${config.owner}
│ • *Bot Name*: ${config.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Bot Mode*: ${sock.public ? "Public" : "Self"}
╰──────────────────`;

await sock.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: ucapanWaktu,
mimetype: "image/png",
fileLength: 99999999,
caption: teks,
jpegThumbnail: fs.readFileSync('./media/elaina.jpg'),
footer: `${config.settings.footer}`,
buttons: [
{
buttonId: 'action',
buttonText: { displayText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ' },
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: "ᴛᴀᴘ ʜᴇʀᴇ",
sections: [
{
title: "Main Menu",
rows: [
{
title: "Menu Owner",
description: "╰ Display Command Owner Featur",
id: ".menu-owner"
},
{
title: "Menu Maker",
description: "╰ Display Command Maker Featur",
id: ".menu-maker"
}, 
{
title: "Menu Downloader",
description: "╰ Display Command Down Featur",
id: ".menu-down"
}, 
{
title: "Menu Tools",
description: "╰ Display Command Tools Featur",
id: ".menu-tools"
}
]
}
]
})
}
}
],
headerType: 1,
viewOnce: true,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `${config.botname2}`,
body: `${config.settings.description}`,
thumbnailUrl: `${config.image.thumbnail}`,
sourceUrl: `${config.socialMedia.ChannelWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m });
}
break
        
//==================================//        

case "menu-owner":
case "owner-menu": {
const teks = `
╭───〔 *BOT INFO* 〕
│ • *Owner* : @${config.owner}
│ • *Bot Name*: ${config.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Bot Mode*: ${sock.public ? "Public" : "Self"}
╰──────────────────

╭───〔 *OWNER MENU* 〕
│ .addcase
│ .delcase
│ .getcase
│ .backup
│ .addowner
│ .delowner
│ .addprem
│ .delprem
│ .listprem
│ .self
│ .public
│ .swgc
╰──────────────────`;
await sock.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: ucapanWaktu,
mimetype: "image/png",
fileLength: 99999999,
caption: teks,
jpegThumbnail: fs.readFileSync('./media/elaina.jpg'),
footer: `${config.settings.footer}`,
buttons: [
{  
    buttonId: '.help',   
    buttonText: { displayText: 'ʙᴀᴄᴋ' },   
    type: 1  
}, 
{  
    buttonId: '.sc',   
    buttonText: { displayText: 'sᴄʀɪᴘᴛ' },   
    type: 1  
}
],
headerType: 1,
viewOnce: true,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `${config.botname2}`,
body: `${config.settings.description}`,
thumbnailUrl: `${config.image.thumbnail}`,
sourceUrl: `${config.socialMedia.ChannelWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m });
}
break

//==================================//
        
case "menu-maker":
case "maker-menu": {
const teks = `
╭───〔 *BOT INFO* 〕
│ • *Owner* : @${config.owner}
│ • *Bot Name*: ${config.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Bot Mode*: ${sock.public ? "Public" : "Self"}
╰──────────────────

╭───〔 *MAKER MENU* 〕
│ .brathd
│ .brat
│ .bratvid
│ .bratanime
│ .attp
│ .ttp
╰──────────────────`;

await sock.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: ucapanWaktu,
mimetype: "image/png",
fileLength: 99999999,
caption: teks,
jpegThumbnail: fs.readFileSync('./media/elaina.jpg'),
footer: `${config.settings.footer}`,
buttons: [
{  
    buttonId: '.help',   
    buttonText: { displayText: 'ʙᴀᴄᴋ' },   
    type: 1  
}, 
{  
    buttonId: '.sc',   
    buttonText: { displayText: 'sᴄʀɪᴘᴛ' },   
    type: 1  
}
],
headerType: 1,
viewOnce: true,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `${config.botname2}`,
body: `${config.settings.description}`,
thumbnailUrl: `${config.image.thumbnail}`,
sourceUrl: `${config.socialMedia.ChannelWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m });
}
break 
        
//==================================//
 
case "down-menu": case "menu-down": {
const teks = `
╭───〔 *BOT INFO* 〕
│ • *Owner* : @${config.owner}
│ • *Bot Name*: ${config.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Bot Mode*: ${sock.public ? "Public" : "Self"}
╰──────────────────

╭───〔 *DOWNLOADER MENU* 〕
│ .tiktok
│ .ttmp3
│ .ytmp4
│ .ytmp3
│ .ig
│ .fb
╰──────────────────`;
await sock.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: ucapanWaktu,
mimetype: "image/png",
fileLength: 99999999,
caption: teks,
jpegThumbnail: fs.readFileSync('./media/elaina.jpg'),
footer: `${config.settings.footer}`,
buttons: [
{  
    buttonId: '.help',   
    buttonText: { displayText: 'ʙᴀᴄᴋ' },   
    type: 1  
}, 
{  
    buttonId: '.sc',   
    buttonText: { displayText: 'sᴄʀɪᴘᴛ' },   
    type: 1  
}
],
headerType: 1,
viewOnce: true,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `${config.botname2}`,
body: `${config.settings.description}`,
thumbnailUrl: `${config.image.thumbnail}`,
sourceUrl: `${config.socialMedia.ChannelWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m });
}
break        
        
//==================================//

case "tools-menu": case "menu-tools": {
const teks = `
╭───〔 *BOT INFO* 〕
│ • *Owner* : @${config.owner}
│ • *Bot Name*: ${config.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Bot Mode*: ${sock.public ? "Public" : "Self"}
╰──────────────────

╭───〔 *TOOLS MENU* 〕
│ .tourl
│ .removebg
│ .
│ .
│ .
│ .
│ .
│ .
│ .
│ .
│ .
│ .
╰──────────────────`;
await sock.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: ucapanWaktu,
mimetype: "image/png",
fileLength: 99999999,
caption: teks,
jpegThumbnail: fs.readFileSync('./media/elaina.jpg'),
footer: `${config.settings.footer}`,
buttons: [
{  
    buttonId: '.help',   
    buttonText: { displayText: 'ʙᴀᴄᴋ' },   
    type: 1  
}, 
{  
    buttonId: '.sc',   
    buttonText: { displayText: 'sᴄʀɪᴘᴛ' },   
    type: 1  
}
],
headerType: 1,
viewOnce: true,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `${config.botname2}`,
body: `${config.settings.description}`,
thumbnailUrl: `${config.image.thumbnail}`,
sourceUrl: `${config.socialMedia.ChannelWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m });
}
break        
              
//==================================//
        
//==================================//
        
//==================================//       
        
//==================================//       
        
//==================================//       
        
//==================================//       
        
//==================================//                        
//==================================//
        
//==================================//
        
//==================================//       
        
//==================================//       
        
//==================================//       
        

        
//==================================//       
        
case 'fb':
case 'facebook':
case 'fbdl':
case 'facebookdl': {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://www.facebook.com/share/r/xxxxx/*`);
  if (!/^https?:\/\/(www\.)?(facebook\.com|fb\.watch)\//i.test(text))
    return m.reply("⚠️ URL Facebook tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const { data } = await axios.get(
      `https://api.nexray.web.id/downloader/facebook?url=${encodeURIComponent(text)}`
    );

    if (!data.status) throw new Error("API gagal merespon.");

    const res = data.result; 
    const videoUrl = res.video_hd || res.video_sd;
    const audioUrl = res.audio;

    if (!videoUrl) throw new Error("Video tidak ditemukan.");

    const caption = `✅ _*ꜱɪꜱᴛᴇᴍ ɴᴏᴛɪᴄᴇ ꜱᴜᴄᴄᴇꜱ...*_`; 
      
    await sock.sendMessage(m.chat, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption
    }, { quoted: m }); 
      
    if (audioUrl) {
      await sock.sendMessage(m.chat, {
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
        ptt: false,
        fileName: `${(res.title || "facebook_audio").replace(/[^\w\s]/gi, '')}.mp3`
      }, { quoted: m });
    }

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("FBDL ERROR:", err);
    m.reply(`❌ Gagal download Facebook:\n${err.message}`);
  }
}
break        
        
//==================================//       
        
case 'ig':
case 'instagram':
case 'igdl':
case 'instagramdl': {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://www.instagram.com/reel/xxxxx/*`);
  if (!/^https?:\/\/(www\.)?instagram\.com\//i.test(text))
    return m.reply("⚠️ URL Instagram tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const { data } = await axios.get(
      `https://api.nexray.web.id/downloader/v1/instagram?url=${encodeURIComponent(text)}`
    );

    if (!data.status) throw new Error("API gagal merespon.");

    const res = data.result;
    const media = res.media;

    if (!media || !media.length) throw new Error("Media tidak ditemukan.");

    const video = media.find(x => x.type === "video");
    const audio = media.find(x => x.type === "audio");

    const caption = `✅ _*ꜱɪꜱᴛᴇᴍ ɴᴏᴛɪᴄᴇ ꜱᴜᴄᴄᴇꜱ...*_`;

    if (video) {
      await sock.sendMessage(m.chat, {
        video: { url: video.url },
        mimetype: 'video/mp4',
        caption
      }, { quoted: m });
    } 
      
    if (audio) {
      await sock.sendMessage(m.chat, {
        audio: { url: audio.url },
        mimetype: 'audio/mpeg',
        ptt: false,
        fileName: `${res.owner.username}.mp3`
      }, { quoted: m });
    }

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("IGDL ERROR:", err);
    m.reply(`❌ Gagal download Instagram:\n${err.message}`);
  }
}
break       
        
//==================================//       
        
case 'ytmp4': {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://www.youtube.com/watch?v=XXXXX*`);
  if (!/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(text))
    return m.reply("⚠️ URL YouTube tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const API_BASE = 'https://a.ymcdn.org';
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.0',
      'Accept': 'application/json',
      'Referer': 'https://ytmp3.mobi/en8/'
    };

    const url = text;
    const format = 'mp4';
    const id = url.match(/(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];
    if (!id) throw new Error('Invalid YouTube URL');

    const rnd = () => Math.random(); 
    const initRes = await fetch(`${API_BASE}/api/v1/init?p=y&23=1llum1n471&_=${rnd()}`, { headers });
    let { convertURL } = await initRes.json();
    if (!convertURL) throw new Error("Gagal inisialisasi convert.");  
      
    let startRes = await fetch(`${convertURL}&v=${id}&f=${format}&_=${rnd()}`, { headers });
    let data = await startRes.json(); 
      
    if (data.redirect) {
      const redirRes = await fetch(`${data.redirectURL}&v=${id}&f=${format}&_=${rnd()}`, { headers });
      data = await redirRes.json();
    } 
      
    while (true) {
      const statusRes = await fetch(data.progressURL, { headers });
      const status = await statusRes.json();

      if (status.error) throw new Error(status.error);

      if (status.progress >= 3) {
        const caption = `✅ _*ꜱɪꜱᴛᴇᴍ ɴᴏᴛɪᴄᴇ ꜱᴜᴄᴄᴇꜱ...*_`;

        await sock.sendMessage(m.chat, {
          video: { url: data.downloadURL },
          mimetype: 'video/mp4',
          caption
        }, { quoted: m });

        break;
      }

      await new Promise(r => setTimeout(r, 1200));
    }

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error('YTMP4 ERROR:', err);
    m.reply(`❌ Gagal download MP4: ${err.message}`);
  }
}
break        
        
//==================================//   
        
case 'ytmp3': {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://www.youtube.com/watch?v=XXXXX*`);
  if (!/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(text)) return m.reply("⚠️ URL YouTube tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const API_BASE = 'https://a.ymcdn.org';
    const headers = {  
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.0',  
      'Accept': 'application/json',  
      'Referer': 'https://ytmp3.mobi/en8/'  
    };

    const url = text;
    const format = 'mp3';
    const id = url.match(/(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];
    if (!id) throw new Error('Invalid YouTube URL');

    const rnd = () => Math.random(); 
      
    const initRes = await fetch(`${API_BASE}/api/v1/init?p=y&23=1llum1n471&_=${rnd()}`, { headers });
    let { convertURL } = await initRes.json();
    if (!convertURL) throw new Error("Gagal inisialisasi convert."); 
      
    let startRes = await fetch(`${convertURL}&v=${id}&f=${format}&_=${rnd()}`, { headers });
    let data = await startRes.json(); 
      
    if (data.redirect) {
      const redirRes = await fetch(`${data.redirectURL}&v=${id}&f=${format}&_=${rnd()}`, { headers });
      data = await redirRes.json();
    } 
      
    while (true) {
      const statusRes = await fetch(data.progressURL, { headers });
      const status = await statusRes.json();

      if (status.error) throw new Error(status.error);
      if (status.progress >= 3) { 
        const caption = `🎵 *${status.title}*`;
        await sock.sendMessage(m.chat, {
          audio: { url: data.downloadURL },
          mimetype: 'audio/mpeg',
          ptt: false,
          fileName: `${status.title}.mp3`,
          caption
        }, { quoted: m });
        break;
      }

      await new Promise(r => setTimeout(r, 1000));
    }

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error('YTMP3 ERROR:', err);
    m.reply(`❌ Gagal download MP3: ${err.message}`);
  }
}
break        
        
//==================================//        
        
case 'ttmp3': case "tiktokmp3": case "ttaudio": case "ttsound": {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://vt.tiktok.com/xxxxx/*`);
  if (!/^https?:\/\/(www\.)?(vt|vm|tiktok)\./i.test(text))
    return m.reply("⚠️ Link TikTok tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const { data } = await axios.get(
      `https://api.nexray.web.id/downloader/tiktok?url=${encodeURIComponent(text)}`
    );

    if (!data.status) throw new Error("API gagal.");

    const res = data.result;
    const audioUrl = res.music_info?.url;
    if (!audioUrl) throw new Error("Audio tidak tersedia.");

    await sock.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${res.title}.mp3`
    }, { quoted: m });

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("TTMP3 ERROR:", err);
    m.reply("❌ Gagal download audio TikTok.");
  }
}
break        
        
//==================================//        
        
case 'tt':
case 'tiktok':
case 'ttdl':
case 'tiktokdl':
case 'ttmp4':
case 'tiktokmp4': {
  if (!text) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} https://vt.tiktok.com/xxxxx/*`);
  if (!/^https?:\/\/(www\.)?(vt|vm|tiktok)\./i.test(text))
    return m.reply("⚠️ Link TikTok tidak valid.");

  try {
    await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    const { data } = await axios.get(
      `https://api.nexray.web.id/downloader/tiktok?url=${encodeURIComponent(text)}`
    );

    if (!data.status) throw new Error("API gagal merespon.");

    const res = data.result;
    const videoUrl = res.data;
    const audioUrl = res.music_info?.url;

    const caption = `✅ _*ꜱɪꜱᴛᴇᴍ ɴᴏᴛɪᴄᴇ ꜱᴜᴄᴄᴇꜱ...*_`;
      
    await sock.sendMessage(m.chat, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption
    }, { quoted: m }); 
    if (audioUrl) {
      await sock.sendMessage(m.chat, {
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
        ptt: false
      }, { quoted: m });
    }

    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("TT ERROR:", err);
    m.reply("❌ Gagal mengambil data TikTok.");
  }
}
break        
        
//==================================//        
        
case "sc": {
let menu = `
  ✧  *S C R I P T*

    ◦  *Bot Name* : ${config.botname}
    ◦  *Version* : 1.0.1
    ◦  *Type* : Case 
    ◦  *No Enc* : 100%
    ◦  *No Bug* : No Error
    ◦  *Harga* : Free
    ◦  *Free* : Update
    ◦  *Run* : Termux/Panel`
  await sock.sendMessage(m.chat, {
    interactiveMessage: {
      title: menu,
      footer: `${config.settings.footer}`, 
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 1,
        isForwarded: false,
        externalAdReply: {
          title: "t",
          body: `${config.settings.description}`,
          mediaType: 1,
          thumbnail: fs.readFileSync('./media/Elaina.jpg'),
          mediaUrl: "abc",
          sourceUrl: "d",
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      },     
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "sᴄʀɪᴘᴛ",
              url: "https://github.com/flying-panties/Elaina-Multi-Device.git",
              merchant_url: "https://github.com/flying-panties/Elaina-Multi-Device.git"
            })
          },
        ]
      }
    }
  }, { quoted: m }); 
}
break       

//==================================/       

 

//==================================//

case "tourl": {
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted?.msg || quoted)?.mimetype || '';
  if (!quoted || !mime)
    return m.reply(`⚠️ _Kirim/Balas media dengan caption *${prefix + command}*_`);

  const fs = require('fs');
  const os = require('os');
  const path = require('path');
  const axios = require('axios');
  const FormData = require('form-data');

  let filepath;

  try {
    const media = await quoted.download();
    if (!media || media.length === 0)
      throw new Error('Gagal mengunduh media.');
    if (media.length > 50 * 1024 * 1024)
      throw new Error('Ukuran file maksimal 50MB.');

    const ext = mime.split('/')[1] || 'bin';
    const tempDir = path.join(os.tmpdir(), 'bot-temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const filename = `file_${Date.now()}.${ext}`;
    filepath = path.join(tempDir, filename);
    fs.writeFileSync(filepath, media);

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } }); 
    const stats = fs.statSync(filepath);
    const fileSize = stats.size;
    const CHUNK_SIZE = 3 * 1024 * 1024;
    const totalChunks = Math.ceil(fileSize / CHUNK_SIZE);
    const fileId = Math.random().toString(36).substring(2, 15);
    const fileName = path.basename(filepath);

    let finalUrl = null;

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(fileSize, start + CHUNK_SIZE);
      const buffer = fs.readFileSync(filepath).slice(start, end);

      const form = new FormData();
      form.append('file', buffer, { filename: fileName });
      form.append('chunkIndex', i.toString());
      form.append('totalChunks', totalChunks.toString());
      form.append('fileId', fileId);
      form.append('fileName', fileName);

      const response = await axios.post(
        'https://cdn.nexray.web.id/upload',
        form,
        {
          headers: { ...form.getHeaders() },
          maxBodyLength: Infinity,
          maxContentLength: Infinity
        }
      );

      if (response.data && response.data.url) {
        finalUrl = response.data.url;
      }
    }

    if (!finalUrl) throw new Error("Upload gagal dari Nexray."); 
    const buttons = [{
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "ɴᴇxʀᴀʏ ᴜᴘʟᴏᴀᴅᴇʀ",
        copy_code: finalUrl
      })
    }];

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `✧  *U P L O A D E R*`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: config.settings.footer
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons
            })
          })
        }
      }
    }, { quoted: m });

    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error('Error tourl:', err);
    m.reply(`❌ Terjadi kesalahan: ${err.message}`);
  } finally {
    try {
      if (filepath && fs.existsSync(filepath)) fs.unlinkSync(filepath);
    } catch {}
  }
}
break
        
//==================================//        
case "swgc": {
  if (!isCreator) return m.reply(config.message.owner);

  let caption = text ? text.trim() : "";
  let quoted = m.quoted ? m.quoted.message : m.message;

  let mediaType = null;
  let mediaContent = null;

  if (quoted?.imageMessage) {
    mediaType = "imageMessage";
    mediaContent = { ...quoted.imageMessage };
    if (caption) mediaContent.caption = caption;

  } else if (quoted?.videoMessage) {
    mediaType = "videoMessage";
    mediaContent = { ...quoted.videoMessage };
    if (caption) mediaContent.caption = caption;

  } else if (quoted?.audioMessage) {
    mediaType = "audioMessage";
    mediaContent = { ...quoted.audioMessage };

  } else if (caption) {
    mediaType = "conversation";
    mediaContent = caption;

  } else {
    return m.reply(`⚠️ _Kirim/Balas gambar/video dengan caption *${prefix + command}*_`);
  }

  try {
    await m.reply("📢 Mengirim status ke semua group...");

    let groups = await sock.groupFetchAllParticipating();
    let groupIds = Object.keys(groups);

    let sukses = 0;
    let gagal = 0;

    for (let jid of groupIds) {
      try {
        let messagePayload;

        if (mediaType === "conversation") {
          messagePayload = {
            groupStatusMessageV2: {
              message: {
                conversation: mediaContent
              }
            }
          };
        } else {
          messagePayload = {
            groupStatusMessageV2: {
              message: {
                [mediaType]: mediaContent
              }
            }
          };
        }

        await sock.relayMessage(jid, messagePayload, {});
        sukses++;

        await new Promise(r => setTimeout(r, 700));

      } catch (e) {
        gagal++;
      }
    }

    m.reply(`✅ _*ꜱɪꜱᴛᴇᴍ ɴᴏᴛɪᴄᴇ ꜱᴜᴄᴄᴇꜱ...*_.\n\nBerhasil: ${sukses}✅\nGagal: ${gagal}❌`);

  } catch (err) {
    console.error("SWGC ERROR:", err);
    m.reply("❌ Gagal mengirim status group.");
  }
}
break
		
//==================================//		
     
case "bratvid": {
    if (!text) 
        return m.reply(`_⚠️ Format:_ ${prefix + command} teks`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    try {
        const encoded = encodeURIComponent(text)
        const url = `${config.RestApi.api}/api/maker/bratvid?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encoded}`

        const res = await getBuffer(url)

        if (!res || res.length < 5000)
            return m.reply('❌ Gagal ambil video dari API')

        const { Sticker } = require('wa-sticker-formatter')

        const sticker = new Sticker(res, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',
            quality: 100
        })

        const stickerBuffer = await sticker.toBuffer()

        await sock.sendMessage(m.chat, {
            sticker: stickerBuffer
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Error convert bratvid ke sticker')
    }
}
break        
        
//==================================//        
        
case "bratHD":
case "brathd": {
    if (!text)
        return m.reply(`_⚠️ Format Penggunaan:_\n\n_💬 Contoh:_ *${prefix + command} hallo*`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } })

    try {
        const axios = require('axios')
        const { Sticker } = require('wa-sticker-formatter')

        const url = `${config.RestApi.api}/api/maker/brathd?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encodeURIComponent(text)}`

        const res = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'image/*'
            }
        })

        const buffer = Buffer.from(res.data)

        if (buffer.length < 500)
            return m.reply('❌ API tidak mengembalikan gambar.')

        const sticker = new Sticker(buffer, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',
            quality: 100
        })

        await sock.sendMessage(m.chat, {
            sticker: await sticker.toBuffer()
        }, { quoted: m })

    } catch (e) {
        console.error('BRAT ERR:', e.response?.status, e.response?.data)
        m.reply('⚠️ API 403 / key ditolak / kena proteksi.')
    }
}
break       
        
//==================================//        
        
case "bratanime": {
    if (!text)
        return m.reply(`_⚠️ Format:_\n\n_Contoh:_ *${prefix + command} hallo*`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } })

    try {
        const axios = require('axios')
        const { Sticker } = require('wa-sticker-formatter')

        const url = `${config.RestApi.api}/api/maker/bratanime?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encodeURIComponent(text)}`

        const res = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            }
        })

        const buffer = Buffer.from(res.data)

        if (!buffer || buffer.length < 500)
            return m.reply('❌ Gagal ambil gambar dari API.')

        const sticker = new Sticker(buffer, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',
            quality: 100
        })

        const out = await sticker.toBuffer()

        await sock.sendMessage(m.chat, {
            sticker: out
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Error saat membuat sticker bratanime.')
    }
}
break        
        
//==================================//        
        
case "brat": {
    if (!text)
        return m.reply(`_⚠️ Format:_\n\n_Contoh:_ *${prefix + command} hallo*`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } })

    try {
        const axios = require('axios')
        const { Sticker } = require('wa-sticker-formatter')

        const url = `${config.RestApi.api}/api/maker/brat?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encodeURIComponent(text)}`

        const res = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            }
        })

        const buffer = Buffer.from(res.data)

        if (!buffer || buffer.length < 500)
            return m.reply('❌ Gagal ambil gambar dari API.')

        const sticker = new Sticker(buffer, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',
            quality: 100
        })

        const out = await sticker.toBuffer()

        await sock.sendMessage(m.chat, {
            sticker: out
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Error saat membuat sticker brat.')
    }
}
break        
        
//==================================// 
        
case "ttp": {
    if (!text)
        return m.reply(`⚠️ Format: ${prefix + command} teks`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } })

    try {
        const encoded = encodeURIComponent(text)
        const url = `${config.RestApi.api}/maker/ttp?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encoded}`

        const res = await getBuffer(url)
        if (!res || res.length < 1000)
            return m.reply('❌ Gagal ambil image dari API')

        const { Sticker } = require('wa-sticker-formatter')

        const sticker = new Sticker(res, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',
            quality: 100
        })

        const out = await sticker.toBuffer()

        await sock.sendMessage(m.chat, {
            sticker: out
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Error saat membuat sticker ttp')
    }
}
break        
        
//==================================//        
        
case "attp": {
    if (!text)
        return m.reply(`⚠️ Format: ${prefix + command} teks`)

    await sock.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    try {
        const encoded = encodeURIComponent(text)
        const url = `${config.RestApi.api}/maker/attp?apikey=${encodeURIComponent(config.RestApi.mikochan)}&text=${encoded}`

        const res = await getBuffer(url)

        if (!res || res.length < 5000)
            return m.reply('❌ Gagal ambil video/gif dari API')

        const { Sticker } = require('wa-sticker-formatter')

        const sticker = new Sticker(res, {
            pack: config.settings.packname,
            author: config.ownername || pushname,
            type: 'full',     
            quality: 100
        })

        const stickerBuffer = await sticker.toBuffer()

        await sock.sendMessage(m.chat, {
            sticker: stickerBuffer
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Error saat membuat sticker attp')
    }
}
break
        
//==================================//
        
case "self": {
    if (!isCreator) return
    sock.public = false
    global.db.settings.isPublic = false; 
    m.reply("Berhasil mengganti ke mode *self*")
}
break 

//==================================//          
        
case "public": {
    if (!isCreator) return m.reply(config.message.owner);
    sock.public = true
    global.db.settings.isPublic = true; 
    m.reply("Berhasil mengganti ke mode *public*")
}
break

//==================================//  		
        
case "getcase": {
if (!isCreator) return m.reply(config.message.owner);
if (!text) return m.reply("menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break          
        
//==================================//

 case 'addcase': {
    if (!isCreator) return m.reply(config.message.owner);
    if (!text) return m.reply(`Contoh: .addcase} *casenya*`);
    const namaFile = path.join(__dirname, 'case.js');
    const caseBaru = `${text}\n\n`;
    const tambahCase = (data, caseBaru) => {
        const posisiDefault = data.lastIndexOf("default:");
        if (posisiDefault !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
            return { success: true, kodeBaruLengkap };
        } else {
            return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
        }
    };
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
        }
        const result = tambahCase(data, caseBaru);
        if (result.success) {
            fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat menulis file:', err);
                    return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
                } else {
                    console.log('Sukses menambahkan case baru:');
                    console.log(caseBaru);
                    return m.reply('Sukses menambahkan case!');
                }
            });
        } else {
            console.error(result.message);
            return m.eply(result.message);
        }
    });
}
break       

//==================================//

case 'delcase': {
    if (!isCreator) return m.reply(config.message.owner);
    if (!text) 
        return m.reply(`Contoh: .delcase nama_case`);

    const fs = require('fs').promises;

    async function removeCase(filePath, caseNameToRemove) {
        try {
            let data = await fs.readFile(filePath, 'utf8');
            
            const regex = new RegExp(`case\\s+['"\`]${caseNameToRemove}['"\`]:[\\s\\S]*?break;?`, 'g');
            
            const modifiedData = data.replace(regex, '');

            if (data === modifiedData) {

                return m.reply(`❌ Case "${caseNameToRemove}" tidak ditemukan.\n\nPastikan penulisan sudah benar dan tidak ada typo.`);
            }

            await fs.writeFile(filePath, modifiedData, 'utf8');
            m.reply(`✅ Sukses menghapus case: *${caseNameToRemove}*`);
        } catch (err) {
            m.reply(`Terjadi kesalahan saat memproses file: ${err.message}`);
        }
    }
    removeCase('./case.js', text.trim());
}
break
        
//==================================//

case "addowner": case "addown": {
if (!isCreator) return m.reply(config.message.owner)
if (!m.quoted && !text) return m.reply((`contoh ${m.prefix+command} 6285###`))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === config.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./data/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break        
        
//==================================//
        
case "delowner": case "delown": {
if (!isCreator) return m.reply(config.message.owner)
if (!m.quoted && !text) return m.reply((`contoh ${prefix+command} 6285###`))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === config.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./data/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//==================================//

case 'addprem': {
  if (!isCreator) return m.reply(config.message.owner)
  if (!args[0]) return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} 628xxx 7*`)
  let users = []
  if (m.isGroup) {
    if (m.mentionedJid.length) {
      users = m.mentionedJid.map(id => {
        if (id.endsWith('@lid')) {
          let p = m.metadata.participants.find(x => x.lid === id || x.id === id)
          return p ? p.jid : null
        } else {
          return id
        }
      }).filter(Boolean)
    } else {
      users = [args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net']
    }
  } else {
    users = [args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net']
  }

  let days = Number(args[1])
  if (!days || days <= 0) days = 1
  const ms = days * 24 * 60 * 60 * 1000
  const expired = Date.now() + ms

  for (let jid of users) {
    const user = prem.find(u => u.jid === jid)
    if (user) {
      user.expired = expired
    } else {
      prem.push({ jid, expired })
    }
  }

  fs.writeFileSync(dbPrem, JSON.stringify(prem, null, 2))
  m.reply(
  `✅ Premium ${users.map(j => '@' + j.split('@')[0]).join(', ')} ditambahkan selama *${days} hari*`,
  users
)
}
break
        
//==================================//

case 'delprem': {
  if (!isCreator) return m.reply(config.message.owner)
  if (!args[0] && !m.mentionedJid.length)
  return m.reply(`_⚠️ Format Penggunaan:_ \n\n_💬 Contoh:_ *${prefix + command} 628xxx*`)
  let users = []
  if (m.isGroup) {
    if (m.mentionedJid.length) {
      users = m.mentionedJid.map(id => {
        if (id.endsWith('@lid')) {
          let p = m.metadata.participants.find(x => x.lid === id || x.id === id)
          return p ? p.jid : null
        } else {
          return id
        }
      }).filter(Boolean)
    } else {
      users = [args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net']
    }
  } else {
    users = [args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net']
  }

  let removed = []
  for (let jid of users) {
    const idx = prem.findIndex(u => u.jid === jid)
    if (idx !== -1) {
      prem.splice(idx, 1)
      removed.push(jid)
    }
  }

  fs.writeFileSync(dbPrem, JSON.stringify(prem, null, 2))

  if (removed.length === 0) {
    return m.reply(
      `❌ Nomor ${users.map(j => '@' + j.split('@')[0]).join(', ')} bukan premium.`,
      users // ✅ array langsung, bukan object
    )
  }

  m.reply(
    `✅ Premium ${removed.map(j => '@' + j.split('@')[0]).join(', ')} berhasil dihapus.`,
    removed // ✅ array langsung, bukan object
  )
}
break

//==================================//

case "listprem": case "listprem": {
  const fs = require("fs");
  const path = "./data/premium.json";

  if (!fs.existsSync(path)) return m.reply("Belum ada data premium.");
  const data = JSON.parse(fs.readFileSync(path));

  if (!Array.isArray(data) || data.length === 0) return m.reply("Belum ada user premium.");

  let textList = "*「 LIST USER PREMIUM 」*\n\n";
  const now = Date.now();
  let no = 1;

  for (const user of data) {
    const jid = user.jid?.replace(/[^0-9]/g, "") || "-";
    const expired = user.expired || 0;
    const status = expired > now ? "AKTIF" : "EXPIRED";
    const expiredDate = new Date(expired).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

    textList += `${no++}. wa.me/${jid}\n   Status: *${status}*\n   Exp: ${expiredDate}\n\n`;
  }

  m.reply(textList.trim());
}
break 

//==================================//

case "backupsc":
case "bck":
case "backup": {
if (!isCreator) return m.reply(massage.owner)
try {
const tmpDir = "./tmp";
if (fs.existsSync(tmpDir)) {
const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
for (let file of files) {
fs.unlinkSync(`${tmpDir}/${file}`);
}
}
await m.reply("Processing Backup Script . .");
const name = `New-Script`; 
const exclude = ["node_modules", "Auth", "package-lock.json", "yarn.lock", ".npm", ".cache"];
const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

await sock.sendMessage(m.sender, {
document: fs.readFileSync(`./${name}.zip`),
fileName: `${name}.zip`,
mimetype: "application/zip"
}, { quoted: m });

fs.unlinkSync(`./${name}.zip`);

if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
} catch (err) {
console.error("Backup Error:", err);
m.reply("Terjadi kesalahan saat melakukan backup.");
}
}
break       
        
//==================================/

case "ping": {
  try {
    const hrStart = process.hrtime.bigint(); 
    const hrEnd = process.hrtime.bigint();
    const latencyMs = Number(hrEnd - hrStart) / 1e6;
    const uptimeStr = typeof runtime === 'function' ? runtime(process.uptime()) : `${Math.floor(process.uptime())}s`;
    const now = tanggal ? tanggal(Date.now()) : new Date().toLocaleString();
    const mem = process.memoryUsage();
    const memUsedMB = (mem.rss / 1024 / 1024).toFixed(2);
    const heapUsedMB = (mem.heapUsed / 1024 / 1024).toFixed(2);
    const heapTotalMB = (mem.heapTotal / 1024 / 1024).toFixed(2);
    const cpuModel = os.cpus && os.cpus()[0] ? os.cpus()[0].model : 'N/A';
    const cpuCount = os.cpus ? os.cpus().length : 'N/A';
    const platform = `${process.platform} ${process.arch}`;
    const nodev = process.version;

    const teks = `*📡 Server Information*
- Runtime : ${uptimeStr}
- Latency : ${latencyMs.toFixed(2)} ms
- Time    : ${now}

*🧠 Memory*
- RSS      : ${memUsedMB} MB
- Heap     : ${heapUsedMB} / ${heapTotalMB} MB

*⚙️ System*
- CPU      : ${cpuModel} (${cpuCount} cores)
- Platform : ${platform}
- Node     : ${nodev}`;
    await m.reply(teks);
  } catch (err) {
    console.error(err);
    m.reply(`Error saat mengecek ping:\n${err.message || String(err)}`);
  }
}
break;

//==================================//



//==================================//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Reply(evaled)
} catch (err) {
await Reply(String(err))
}}
//==================================//        
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Reply(evaled)
} catch (err) {
await Reply(String(err))
}}
//==================================//
if (m.text.startsWith('$')) {
  if (!isCreator) return;
  exec(m.text.slice(2), (e, out) =>
    sock.sendMessage(m.chat, { text: util.format(e ? e : out) }, { quoted: m })
  );
}}

//==================================//

} catch (err) {
console.log(err)
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.white("[•] Update"), chalk.white(`${__filename}\n`))
delete require.cache[file]
require(file)
})

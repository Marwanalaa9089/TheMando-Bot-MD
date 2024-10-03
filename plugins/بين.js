/*import fetch from "node-fetch"

let handler = async (m, { conn, usedPrefix, command, text }) => {
let query = text.trim()

  const sections = [{
    title: `${htki} LISTA ${htka}`,
    rows: [{
      header: 'wwww',
      title: "ADMFJ",
      description: 'yyyyyyy',
      id: ".MENU"
    }, {
      title: "ADJNF",
      id: ".MENU"
    }, {
      title: "DNFKV",
      id: ".MENU" 
    }, {
      title: "DHJNS",
      id: ".MENU"
    }, ]
  }, ]  

const listMessage = {
text: 'Texto',
footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
title: `❏––––[ *TEX* ]–––`,
buttonText: "- -- -",
sections
  }

async function getPinterestImages(query) {
let response = await fetch(`https://aemt.me/pinterest?query=${encodeURIComponent(query)}`)
let data = await response.json()
return data.result
}

async function getGoogleImages(query) {
let response = await fetch(`https://aemt.me/googleimage?query=${encodeURIComponent(query)}`)
let data = await response.json()
return data.result
}

async function sendPinterestCarousel(conn, chat, query, usedPrefix) {
let images = await getPinterestImages(query)
const messages = images.map((image) => [ null, null, 
image, 
[['u', usedPrefix + `بنترست ${query}`], ['Buscar con Google 🌐', usedPrefix + `image2 ${query}`]],
null, 
[['🔗 Enlace de imagen', image]], 
[['DDDDD', sections]]
])
await conn.sendCarousel(chat, '💗 *نتائج بنترست*', 'Imágenes', '✨ صور بينتريست', messages)
}

async function sendGoogleCarousel(conn, chat, query, usedPrefix) {
let images = await getGoogleImages(query);
const messages = images.map((image) => [ null, null, 
image, 
[['Buscar de nuevo 🔎', usedPrefix + `image2 ${query}`], ['البحث مع بينتريست ✨', usedPrefix + `بينتريست ${query}`]], 
null, 
[['🔗 Enlace de imagen', image]], 
[]
])
await conn.sendCarousel(chat, '🤩 *Resultados de Google*', 'Imágenes', '✅ Imágenes de Google', messages)
}

if (!query) {
conn.reply(m.chat, '*يرجى كتابة ما تريد البحث عنه على موقع بينتريست.*', m)
return
}

if (command === 'بين') {
await sendPinterestCarousel(conn, m.chat, query)
} else if (command === 'image2') {
await sendGoogleCarousel(conn, m.chat, query)
}
}

handler.command = /^(بين|image2)$/i
export default handler

*/

import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} *مثال :*\n*${usedPrefix + command} زاك | ناروتو*` 
try {
const response=await fetch(`https://deliriusapi-official.vercel.app/search/pinterest?text=${text}`)
const dataR = await response.json()
const json=dataR.result
//const json = await pinterest(text)
conn.sendButton(m.chat, `🎗 نتائج البحث عن ↜ : ${text}`, `${wm}`, json.getRandom(), [
['🔄 هـــات غـــيـــرهـــا', `${usedPrefix}بين ${text}`]], null, null, m)
//await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `${lenguajeGB['smsAvisoEG']()} 💞 ${mid.buscador}: ${text}`.trim(), m)
} catch (e) {
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.exp = false
}}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(بين|dlpinterest|pinterestdl)$/i
handler.exp = 50
export default handler

/*conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🔄 هـــات غـــيـــرهـــا', `/بين ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/

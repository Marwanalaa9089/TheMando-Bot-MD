import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let user = global.db.data.users[m.sender]
let premium = user.premium

let limit = `${pickRandom([15, 23, 29, 36, 42, 50, 59, 65, 70, 83])}` * 1
let limitpremium = `${pickRandom([45, 59, 70, 88, 100, 120, 135, 143, 149, 150])}` * 1

let emas = `${pickRandom([5, 8, 12, 16, 19, 22, 25, 27, 29, 30])}` * 1
let emaspremium = `${pickRandom([14, 16, 18, 22, 27, 29, 33, 36, 38, 40])}` * 1

let exp = `${pickRandom([500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000])}` * 1
let exppremium = `${pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000])}` * 1

let joincount = `${pickRandom([5, 9, 15, 16, 25, 28, 30])}` * 1
let joincountpremium = `${pickRandom([12, 19, 25, 34, 44, 50])}` * 1

let eleksirb = `${pickRandom([20, 30, 39, 50, 55, 59, 60])}` * 1
let eleksirbpremium = `${pickRandom([35, 55, 80, 120, 150, 170])}` * 1

let gold = `${pickRandom([4, 7, 9, 14, 18])}` * 1
let goldpremium = `${pickRandom([9, 18, 26, 38, 45])}` * 1

let berlian = `${pickRandom([5, 7, 9, 11, 15, 19, 26, 28, 29, 30])}` * 1
let berlianpremium = `${pickRandom([16, 22, 31, 39, 42, 53, 65, 67, 69, 70])}` * 1

let kardus = `${pickRandom([5, 8, 10, 17, 25, 39, 46, 48, 49, 50])}` * 1
let karduspremium = `${pickRandom([17, 30, 49, 55, 58, 59, 73, 79, 81, 89])}` * 1

let pet = `${pickRandom([4, 4, 4, 6, 6, 7, 7, 2, 2, 2])}` * 1
let petpremium = `${pickRandom([7, 7, 7, 12, 12, 12, 18, 18, 18, 20])}` * 1

let gardenboxs = `${pickRandom([3, 3, 3, 3, 4, 4, 2, 2, 2, 5])}` * 1
let gardenboxspremium = `${pickRandom([6, 6, 8, 8, 10, 10, 12, 12, 12, 15])}` * 1

let legendary = `${pickRandom([2, 2, 2, 2, 2, 3, 3, 4, 4, 4])}` * 1
let legendarypremium = `${pickRandom([4, 4, 4, 6, 6, 6, 7, 7, 9, 10])}` * 1
 
const recompensas = {
  limit: premium ? limitpremium : limit,
  emas: premium ? emaspremium : emas,
  joincount: premium ? joincountpremium : joincount,
  eleksirb: premium ? eleksirbpremium : eleksirb,
  gold: premium ? goldpremium : gold,
  exp: premium ? exppremium : exp,
  berlian: premium ? berlianpremium : berlian,
  kardus: premium ? karduspremium : kardus,
  pet: premium ? petpremium : pet,
  gardenboxs: premium ? gardenboxspremium : gardenboxs,
  mythic: premium ? legendarypremium : legendary,
}

let time = user.lastmonthly + 732000000 //432000000 5 dias
if (new Date - user.lastmonthly < 732000000) return await conn.reply(m.chat, `*مرحبا لقد اخذت جوائزك الاسبوعية بل الفعل 🙌*\n\n*حاول مجددا بعد 👇🏻:*\n\n${clockString(time - new Date() * 1)}`, fkontak,  m)
//await conn.sendButton(m.chat, `*مرحبا لقد اخذت جوائزك الاسبوعية بل الفعل 🙌*`, wm + `\n\n*حاول مجددا بعد 👇🏻:*\n\n${clockString(time - new Date() * 1)}`, null, [['لــلاوامـر 🎗', '/اوامر']], fkontak, m)
let pp = 'https://envs.sh/SKm.jpg'
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┆ `}
let text = `*╮───────────────────⟢ـ*
┆ 🎖️ ⌊ جـوائـزك الاسـبـوعـيـة!!! ⌉
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
┆ *${premium ? '🎟️ مـكـافـأة الـمـمـيـزيـن' : '🆓 مـكـافـأة مـجـانـيـة'}*
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
┆ ${texto}
╯───────────────────⟢ـ\n\n🎟️ بــريــمــيــام ⇢ ${premium ? '✅' : '❌'}\n${wm}`
conn.sendMessage(m.chat, {image: {url: pp}, caption: text, mentions: conn.parseMention(text)}, {quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
 //await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, gata.getRandom(), [['⚗️ 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍 𝘾𝙊𝙁𝙍𝙀 ⚗️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)  
user.lastmonthly = new Date * 1
}
handler.command = ['اسبوعي', 'اسبوع', 'اس', 'سبوعي', 'entregadelmes'] 
handler.level = 0
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃⇢ ', ye, ' *🗓️ ســنــوات*\n', '┃⇢ ', mo, ' *⛅ شــهــر*\n', '┃⇢ ', d, ' *☀️ يــوم*\n', '┃⇢ ', h, ' *⏰ ســاعــة*\n', '┃⇢ ', m, ' *🕐 دقــيــقــة*\n', '┃⇢ ', s, ' *⏱️ ثــانــيــة*'].map(v => v.toString().padStart(2, 0)).join('')
}

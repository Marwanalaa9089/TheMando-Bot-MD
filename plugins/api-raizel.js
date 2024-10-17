import fetch from 'node-fetch'

const handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🦇 *مــرحــبــا بــك انـا ${command} عــلــيــك كــتــابــة نــص لــكـي ارد عــلـيـك*\n\n*مثال:*\n${usedPrefix + command} من انت؟`, m)
try {
let prompt = `انت رايزل من مانهو النبلاء انت هو حاكم النبلاء وقد دخلت في سبات لمدة 820 سنة واستيقظت في القرن الحادي والعشرين و تحدث فقط باللهجة المصرية و استخدم الايموجي كثيراً و مطورك هو "فريق فلاش" أن سالك من صانعك قل له أن من صنعك هو فريق فلاش`;

await m.react('🕒')

const apii = await fetch(`https://artst-three.vercel.app/chatgpt?text=${text}&prompt=${prompt}`)
const res = await apii.json()
await conn.reply(m.chat, res.result, m)
await m.react('✅️')
} catch (error) {
await m.react('✖️')
console.error(error)
return conn.reply(m.chat, '🚩 *خطاء*', m)
}}

handler.command = ['رايزل']
handler.help = ['Z A C K']
handler.tags = ['ai'];
export default handler

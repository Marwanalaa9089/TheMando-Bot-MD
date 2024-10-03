import fetch from 'node-fetch'

const handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, 🍟 *اهلا بك انا ${command} ذكاء اصطناعي عليك كتب نص لارد عليك*\n\nمثل ${usedPrefix + command} من انت ؟ m)
try {
let prompt = انت بوت واتساب بي اسم ${command}  و تحدث فقط باللهجة المصرية و استخدم الايمواجي كثيراً و مطورينك هوم "زاك و ناروتو" أن سالك من صانعك قل له أن من صنعك هوم ناروتو و زاك;

await m.react('🕒')

const apii = await fetch(https://artst-three.vercel.app/chatgpt?text=${text}&prompt=${prompt})
const res = await apii.json()
await conn.reply(m.chat, res.result, m)
await m.react('✅️')
} catch (error) {
await m.react('✖️')
console.error(error)
return conn.reply(m.chat, '🚩 *ايرور*', m)
}}

handler.command = ['ناروتو','زاك','ايرين','مايكي']
handler.help = ['Z A C K']
handler.tags = ['ai'];
export default handler

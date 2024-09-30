function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role, health, crystal, upgrader, wood } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '🏦', key: m.key } })
  const harley = 'https://envs.sh/SKm.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `˼⚡˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
> ˼🏦˹↜ قــســم الــبــنــك ↶
╮───────────────────⟢ـ
┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉
┆💫↜ رتـبـتـك↞⌊ ${role} ⌉
┆💎↜ الـمـاس↞⌊ ${limit} ⌉
┆❤↜ الــصــحــة↞⌊ ${health} ⌉
┆🔮↜ الــكــريــســتــال↞⌊ ${crystal} ⌉
┆🧰↜ الــخــبــرة↞⌊ ${upgrader} ⌉
┆🪵↜ الــخــشــب↞⌊ ${wood} ⌉
╯───────────────────⟢ـ
> ˼🎗˹↜ اضغط الزر ↶
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,subtitle: "zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🏦╎𝑩𝒂𝒏𝒌╎🏦⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام فــلاش بـ🤖ـوت',
                                            highlight_label: '𝒁𝒂𝒄𝒌 3𝒎𝒌',
                                            rows: [
                                                {
                                                    header: 'الــبــنــك',
                                                    title: 'استدعاء_امر_بنك #بنك',
                                                    description: '',
                                                    id: '.بنك'
                                                },
                                                {
                                                    header: 'الــمــحــفــظــة',
                                                    title: 'استدعاء_امر_المحفظة #محفظة',
                                                    description: '',
                                                    id: '.محفظة'
                                                },
                                                {
                                                    header: 'ايــداع',
                                                    title: 'استدعاء_ايداع_البنك #ايداع',
                                                    description: '',
                                                    id: '.ايداع'
                                                },
                                                {
                                                    header: 'جــوائــزك الاســبــوعــيــة',
                                                    title: 'استدعاء_الجوائز_الاسبوعية #اسبوعي',
                                                    description: '',
                                                    id: '.اسبوعي'
                                                },
                                                {
                                                    header: 'ســحــب',
                                                    title: 'استدعاء_سحب_من_البنك #سحب',
                                                    description: '',
                                                    id: '.سحب'
                                                },
                                                {
                                                    header: 'عــمــلاتي',
                                                    title: 'استدعاء_عملات_الذهب #عملاتي',
                                                    description: '',
                                                    id: '.عملاتي'
                                                },
                                                {
                                                    header: 'عــمــلات',
                                                    title: 'استدعاء_امر_عملات #عملات',
                                                    description: '',
                                                    id: '.عملات'
                                                },
                                                {
                                                    header: 'تــفــعــيــل_الــبــوت',
                                                    title: 'استدعاء_تسجيل_البوت #تفعيل',
                                                    description: '',
                                                    id: '.تفعيل'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الــبــوت╎📲⌋","url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H","merchant_url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['بنكك']

export default handler;

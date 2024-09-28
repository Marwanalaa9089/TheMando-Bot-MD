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
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '🔱', key: m.key } })
  const harley = 'https://envs.sh/SKm.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `˼⚡˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
> ˼🔱˹↜ مــســتــواك فــي الـفـعـالـيـة ↶
╮───────────────────⟢ـ
┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉
┆💫↜ رتـبـتـك↞⌊ ${role} ⌉
┆🧰↜ الـخـبـرة↞⌊ ${exp} ⌉
┆💎↜ الـمـاس↞⌊ ${limit} ⌉
╯───────────────────⟢ـ
> ˼🔱˹↜ اخـتـار الـفـعـالـيـة ↶
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,subtitle: "zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🔱╎الـفـعـالـيـات╎🔱⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام فلاش بـ🤖ـوت',
                                            highlight_label: 'اختار الفعالية من البوت يا برو 🤖',
                                            rows: [
                                                {
                                                    header: 'فـعـالـيـة ديــث',
                                                    title: 'استدعاء_فعالية_ديث #ديث',
                                                    description: '',
                                                    id: '.ديث'
                                                },
                                                {
                                                    header: 'فــعــالـيـة الـمـلـيـون',
                                                    title: 'استدعاء_فعالية_المليون #المليون',
                                                    description: '',
                                                    id: '.المليون'
                                                },
                                                {
                                                    header: 'فــعــالـيـة احــزر',
                                                    title: 'استدعاء_فعالية_احزر #احزر',
                                                    description: '',
                                                    id: '.احزر'
                                                },
                                                {
                                                    header: 'فـعـالـيـة عـيـن',
                                                    title: 'استدعاء_فعالية_عين #عين',
                                                    description: '',
                                                    id: '.عين'
                                                },
                                                {
                                                    header: 'فـعـالـيـة ســؤال',
                                                    title: 'استدعاء_فعالية_سؤال #سؤال',
                                                    description: '',
                                                    id: '.سؤال'
                                                },
                                                {
                                                    header: 'فـعـالـيـة الـغـاز',
                                                    title: 'استدعاء_فعالية_الغاز #الغاز',
                                                    description: '',
                                                    id: '.الغاز'
                                                },
                                                {
                                                    header: 'فـعـالـيـة ايـمـوجـي',
                                                    title: 'استدعاء_فعالية_ايموجي #ايموجي',
                                                    description: '',
                                                    id: '.ايموجي'
                                                },
                                                {
                                                    header: 'فــعــالــيــة ديــن',
                                                    title: 'استدعاء_فعالية_دين #دين',
                                                    description: '',
                                                    id: '.دين'
                                                },
                                                {
                                                    header: 'فــعــالــيــة تــفــكــيــك',
                                                    title: 'استدعاء_فعالية_تفكيك #تفكيك',
                                                    description: '',
                                                    id: '.تفكيك'
                                                },
                                                {
                                                    header: 'فــعــالــيــة عــلــم',
                                                    title: 'استدعاء_فعالية_علم #علم',
                                                    description: '',
                                                    id: '.علم'
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
handler.command = ['فعاليات', 'الفعاليات', 'فعالية','الفعالية','الفعاليا','فعليا']

export default handler;

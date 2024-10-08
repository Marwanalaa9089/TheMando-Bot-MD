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
    let time = d.toLocaleDateString(locale, { time: 'long' });
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
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const zack = 'https://envs.sh/I_W.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `zack`}, body: { text: `˼🦇˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
> ˼🪪˹↜ مــعــلــومــاتــك ↶
*❐═━━━═╊⊰﹝🦇﹞⊱╉═━━━═❐*
*⌫┇⚡↜ بـريـمـيـوم↞⌊ ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''} ⌉ ┇〄*
*⌫┇⚜️↜ مـــســـتواك↞⌊ ${level} ⌉ ┇〄*
*⌫┇💫↜ رتـبـتـك↞⌊ ${role} ⌉ ┇〄*
*⌫┇💷↜ فــلــوســك↞⌊ ${exp} ⌉ ┇〄*
*⌫┇🪙↜ الــذهــب↞⌊ ${limit} ⌉ ┇〄*
*⌫┇🧰↜ الــخــبــرة↞⌊ ${upgrader} ⌉ ┇〄*
*❐═━━━═╊⊰﹝🦇﹞⊱╉═━━━═❐*
> ˼🤖˹↜ الــبــوت↶
*❐═━━━═╊⊰﹝🦇﹞⊱╉═━━━═❐*
┊⚙️ ↜اسـم الـبـوت↶﹝𝐑𝐀𝐈𝐙𝐄𝐋﹞
┊📌 ↜الـتـشـغـيـل ↶﹝${uptime}﹞
┊🎪 ↜الــيــوم ↶﹝${week}﹞
┊⌚ ↜الـتـاريـخ ↶﹝${time}﹞
┊🔖 ↜الــمــســتـخـدمـيـن ↶﹝${rtotalreg}﹞
*❐═━━━═╊⊰﹝🦇﹞⊱╉═━━━═❐*
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,subtitle: "zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ video : { url: zack } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام رايــزل بـ🤖ـوت',
                                            highlight_label: '𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: 'استدعاء_قسم_الاعضاء #الاعضاء',
                                                    description: '',
                                                    id: '.ق1'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                    title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                    description: '',
                                                    id: '.ق10'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــالــث',
                                                    title: 'استدعاء_قسم_الدين #الدين',
                                                    description: '',
                                                    id: '.ق2'
                                                },
                                                {
                                                    header: 'الــقـ🦇ـســم الــرابــع',
                                                    title: 'استدعاء_قسم_المطور #المطور',
                                                    description: '',
                                                    id: '.ق3'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــخــامــس',
                                                    title: 'استدعاء_قسم_التنزيلات #التنزيلات',
                                                    description: '',
                                                    id: '.ق4'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــســادس',
                                                    title: 'استدعاء_قسم_الالعاب #الالعاب',
                                                    description: '',
                                                    id: '.ق5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســابــع',
                                                    title: 'استدعاء_قسم_التحويلات #التحويلات',
                                                    description: '',
                                                    id: '.ق6'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــتــاســع',
                                                    title: 'استدعاء_قسم_الذكاء #الذكاء',
                                                    description: '',
                                                    id: '.ق7'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــعــاشــر',
                                                    title: 'استدعاء_قسم_الدعم #الدعم',
                                                    description: '',
                                                    id: '.ق8'
                                                },
                                                {
                                                    header: 'الــقـ🔍ـســم الــحــاديــة عــشــر',
                                                    title: 'استدعاء_قسم_ابحث #البحث',
                                                    description: '',
                                                    id: '.ق11'
                                                },
                                                {
                                                    header: 'الــقـ🏦ـســم الــثــانــي عــشــر',
                                                    title: 'استدعاء_قسم_البنك #بنكك',
                                                    description: '',
                                                    id: '.بنكك'
                                                },
                                                {
                                                    header: 'الــقـ🎟️ـســم الــثــالــث عــشــر',
                                                    title: 'استدعاء_قسم_المميزين #قسم_بريميام',
                                                    description: '',
                                                    id: '.ق12'
                                                },
                                                {
                                                    header: 'الــقـ🏪ـســم الــرابــع عــشــر',
                                                    title: 'استدعاء_قسم_متجر1 #متجر1',
                                                    description: '',
                                                    id: '.متجر1'
                                                },
                                                {
                                                    header: 'الــقـ🪪ـســم الــخــامــس عــشــر',
                                                    title: 'استدعاء_قسم_متجر2 #متجر2',
                                                    description: '',
                                                    id: '.متجر2'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"⌈🎗╎فــعــالــيــات╎🎗⌋","id":".الفاعليات"}'
                     },
                     {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"⌈🙌╎الاشــتــراكــات╎🙌⌋","id":".الباقات"}'
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
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;

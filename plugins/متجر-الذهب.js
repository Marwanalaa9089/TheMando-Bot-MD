import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🪙', key: m.key } });

    const zack = 'https://envs.sh/WIC.jpg';
    let { exp, limit, level, role, crystal, health, upgrader, wood } = global.db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'Zack' },
                    body: {
                        text: `˼🦇˹↜ مـࢪحـبـا بـك/ي ${taguser}
> ˼🪪˹↜ مــعــلــومــاتــك  ↶
╮───────────────────⟢ـ
┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉
┆🪙↜ الــذهــب↞⌊ ${limit} ⌉
┆💷↜ دولاراتــك↞⌊ ${exp} ⌉
╯───────────────────⟢ـ
> ˼🏪˹↜  مــتــجــر الــذهــب↶
╮───────────────────⟢ـ
┆˼🏪˹┆⌊بريميام-مؤقت⌉
┆˼🏪˹┆⌊بريميام-دائم⌉
┆˼🏪˹┆⌊تحويل دولار الي ذهب⌉
┆˼🏪˹┆⌊تحويل ذهب الي دولار⌉
┆˼🏪˹┆⌊منع احد من البوت مؤقتا⌉
╯───────────────────⟢ـ
> ˼⚡˹↜ الاســعــار ↶
╮───────────────────⟢ـ
┆˼1˹┆⌊ 50 الف ⌉
┆˼2˹┆⌊ 250 الف ⌉
┆˼4˹┆⌊ ضريبة 500 ⌉
┆˼5˹┆⌊ 150 الف⌉
╯───────────────────⟢ـ
> تواصل مع المطور لي الشراء ↶

> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,
                        subtitle: "HARLEY"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: zack } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: '{"display_text":"⌈🏷╎مـتـجـر الــدولار╎🏷⌋","id":".متجر1"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+972546887176","merchant_url":"https://api.whatsapp.com/send?phone=+972546887176"}'
                                                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🤖╎قـنـاة الــبــوت╎🤖⌋","url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H","merchant_url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029ValRCUIFi8xmK9xBOr0I","merchant_url":"https://whatsapp.com/channel/0029ValRCUIFi8xmK9xBOr0I"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['المتجر2', 'متجر_ذهب', 'متجر_الذهب', 'متجر2'];

export default handler;

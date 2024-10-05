import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🛡', key: m.key } });

    const zack = 'https://envs.sh/Sve.jpg';
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
> ˼🛡˹↜  قــســم الــتــنــزيـلات ↶
╮───────────────────⟢ـ
┆˼🛡˹┆⌊ميجا⌉
┆˼🛡˹┆⌊اديت⌉
┆˼🛡˹┆⌊انستا⌉
┆˼🛡˹┆⌊اديت-سيارات⌉
┆˼🛡˹┆⌊اديت-كورة⌉
┆˼🛡˹┆⌊شغل⌉
┆˼🛡˹┆⌊صوره⌉
┆˼🛡˹┆⌊خلفيات⌉
┆˼🛡˹┆⌊ميديافاير⌉
╯───────────────────⟢ـ
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,
                        subtitle: "zack"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: zack } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
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
handler.command = ['قسم4', 'قسم_التنزيلات', 'ق_4', 'ق4'];

export default handler;

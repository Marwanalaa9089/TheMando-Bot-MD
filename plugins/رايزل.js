import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw 'uhm.. what do you want to say?';
    await m.react('🦇');

    const prompt = encodeURIComponent(text);
    let userid = conn.getName(m.sender) || "default"
    let apiurl = `https://api.guruapi.tech/ai/gpt4?username=${userid}&query=hii${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();
    
    if (!response.msg) throw 'No result found';

    const replyText = response.msg;
    await conn.sendButton(
      m.chat, 
      replyText, 
      author, 
      'https://envs.sh/Bin.jpg', 
      [['الــمــطـور', `.المطور`]], 
      null, 
      [['قــنـاة الــبــوت', `https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H`]], 
      m
    );
  } catch (error) {
    console.error(error);
    m.reply('*منور يا قلب فلاش حط السؤال بتاعك*\n*:مثال*\n\n*.رايزل كيف حالك*');
  }
};

handler.help = ['gpt4 <text>'];
handler.tags = ['tools'];
handler.command = /^(رايزل)$/i;

export default handler;

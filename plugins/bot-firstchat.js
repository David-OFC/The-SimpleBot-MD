import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `> 👋 𝑯𝒐𝒍𝒂 𝒒𝒖𝒆 𝒕𝒂𝒍 ${nombre}!!
> 𖣘 𝑬𝒔𝒕𝒂𝒅𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 : ${uptime}
> 𖣘 𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅 𝒅𝒆𝒍 𝒔𝒐𝒇𝒕𝒘𝒂𝒓𝒆 : ${speed}
> 𖣘 𝑽𝒆𝒓𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒃𝒐𝒕 : ${vs}
> 𖣘 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 : *𝐷𝑎𝑣𝑖𝑑-𝑂𝐹𝐶*
> 𖣘 𝑮𝒊𝒕𝒉𝒖𝒃 : *https://github.com/David-OFC/The-SimpleBot-MD*
> 𖣘 𝑪𝒓𝒆𝒂𝒅𝒐𝒓/𝑬𝒅𝒊𝒕𝒐𝒓 𝒅𝒆𝒍 𝒄𝒐𝒅𝒊𝒈𝒐 : *𝐴𝑑𝑟𝑖𝑎𝑛𝑂𝑓𝑖𝑐𝑖𝑎𝑙*
> 𖣘 𝑮𝒊𝒕𝒉𝒖𝒃 : *https://github.com/The-DiosBot-MD*
> 𖣘 𝑨𝒈𝒓𝒂𝒅𝒆𝒄𝒊𝒎𝒊𝒆𝒏𝒕𝒐𝒔 𝒓𝒆𝒔𝒑𝒆𝒄𝒕𝒊𝒗𝒐𝒔 𝒂 𝒔𝒖𝒔 𝒄𝒐𝒏𝒕𝒊𝒗𝒖𝒚𝒆𝒏𝒕𝒆𝒔 🙌
> 𖣘 ⚠️𝑷𝒓𝒆𝒄𝒂𝒖𝒄𝒊𝒐́𝒏⚠️
> ✵ 𝑵𝒐 𝒂𝒈𝒂 𝒔𝒑𝒂𝒎 𝒂𝒍 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒑𝒐𝒓 𝒒𝒖𝒆 𝒔𝒊𝒏𝒐 𝒔𝒆 𝒊𝒓𝒂́ 𝒂 𝒔𝒐𝒑𝒐𝒓𝒕𝒆 𝒆𝒍 𝒏𝒖𝒎𝒆𝒓𝒐 *𝑨𝒕𝒕 : 𝐸𝑞𝑢𝑖𝑝𝑜 𝑑𝑒𝑙 𝑆𝑡𝑎𝑓* ✵
> 𖣘 📣 𝑨𝒕𝒆𝒏𝒄𝒊𝒐𝒏 📣
> ✵ 𝑨𝒕𝒆𝒏𝒄𝒊𝒐𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒅𝒂𝒓 𝒂𝒑𝒐𝒚𝒐 𝒂𝒍 𝒑𝒓𝒐𝒚𝒆𝒄𝒕𝒐 𝒖𝒏𝒊𝒆𝒏𝒅𝒐𝒔𝒆 𝒂 𝒍𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅 𝒚 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒏𝒐𝒔 𝒂𝒚𝒖𝒅𝒂𝒓𝒊𝒂 𝒎𝒖𝒄𝒉𝒐 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒄𝒓𝒆𝒄𝒆𝒓 𝒚 𝒉𝒂𝒄𝒆𝒓𝒍𝒆𝒔 𝒍𝒍𝒆𝒈𝒂𝒓 𝒂 𝒎𝒂𝒔 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒆𝒍 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 ✵
> *https://chat.whatsapp.com/IhHPrATwf5RE5DxlxIjhaT*`, m, fake, )


user.pc = new Date * 1
}

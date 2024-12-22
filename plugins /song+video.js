const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("please give me url or title")
  const search = await yts(q)
  const data = search.videos[0];
const url = data.url

  let desc = ' 
    🤖 Sanju Bro 🇱🇰  ᴠͥɪͣ⃢ᴘͫ  ✮ Song Downloader 📥

▶ Title : ${data.title}
  ▶ Description : ${data.description}
  ▶ Time : ${data.timestamp}
▶ Ago : ${data.ago}
  ▶ Views : ${data.views}

  > @▶ Sanju Bro 🇱🇰  ᴠͥɪͣ⃢ᴘͫ  ✮
'
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download audio 
  let down = await fg.yta(url) 
  let downloadurl = down.dl_url
  // send audio message
  
await conn.sendMessage(from,{audio:{url:{downloadurl},mimetype:"audio/mpeg"},{quoted:mek});
  



}catch(e){
  console.log(e)
  reply("s{e}")

}
})

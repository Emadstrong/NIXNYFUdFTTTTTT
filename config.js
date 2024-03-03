module.exports = {
  bot: {
    owners: [""],  // ايدي الاونر
    botID: "",    // ايدي البوت
    GuildId: "",   // ايدي السيرفير
    ClientId: "",    // ايدي البوت
    serverinvte: "", // انفايت سيرفر
    clientSECRET: process.env.client , // سكريت
    callbackURL: "/login", // الكال باك
    inviteBotUrl: "https://discord.com/oauth2/authorize?client_id=1213797890762342430&permissions=8&scope=bot",// انفايت البوت
    TheLinkVerfy : '', // رابط اوثو رايز بالصلاحيه ادخال الي سيرفرات
    prefix : '$', 
    ceatogry : '', // كاتوجري الي يفتح فيها تكت شراء
     TOKEN: (process.env.midd),// توكن 
    Price: 1000,    // سعر العضو الواحد
    TraId  : '1193634767137149059' // ايدي الي يتحوله كريديت
  },
  website: {
    PORT: "3001",
  }
} 

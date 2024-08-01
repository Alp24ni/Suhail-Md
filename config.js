const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "play" ;  
global.video= "video" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "221768649590";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221768649590";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,221768649590";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,221768649590";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "221768649590,221768649590";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_17_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9UZEZ4QXk1bEJGV1ZWQU5PQkJDb2szWW1tZjYzSEphb1lnZldacFBxNDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhtOTZNT3g2UVp1MzJibnpnaDN4TWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTE4YTJhYmYtNjc5Ni00ZTU4LWIyZTctNmMyZWI4ODg1MDc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDExMCxcbiAgICAgIDE2MixcbiAgICAgIDE5OSxcbiAgICAgIDU3LFxuICAgICAgODMsXG4gICAgICAxMjIsXG4gICAgICAxMDgsXG4gICAgICAxNDIsXG4gICAgICA2MSxcbiAgICAgIDUsXG4gICAgICAyNDMsXG4gICAgICAzNixcbiAgICAgIDI0MCxcbiAgICAgIDIxNyxcbiAgICAgIDg2LFxuICAgICAgNTcsXG4gICAgICAyMDMsXG4gICAgICAyMTMsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMjE5LFxuICAgICAgMTAyLFxuICAgICAgNjEsXG4gICAgICA1NCxcbiAgICAgIDEyLFxuICAgICAgODgsXG4gICAgICAyMjUsXG4gICAgICAxMDUsXG4gICAgICAxMDYsXG4gICAgICAxMzEsXG4gICAgICAxMjcsXG4gICAgICAxODAsXG4gICAgICAxNDYsXG4gICAgICAyMjksXG4gICAgICA2NCxcbiAgICAgIDEyMSxcbiAgICAgIDI1MSxcbiAgICAgIDE5NyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTDFMTlc2NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzY4NjQ5NTkwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXJ0aHVyIFNhc2FraVwiLFxuICAgIFwibGlkXCI6IFwiMTI2NTQ3MzY5NDA2NjYwOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmeXhla0hFUCtJcmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1g2L2w3UmxwYXpUYVB4VXB0SFlYN0ZVUUhEcEZoTEptbHdLQlJIZkkxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBUmZhbnFqeWYrRHF3cndZbXZSazJqc0RWNzduNUxkYmhHckVRcEVISXdNTWZDYlZuSzZpeEZHaHkyQmFZdVdVMzRvM05sOGVMWkZtQjNtUUVRMkpEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEdEZMNHpKTGJ5ZlBORGlQZGhXMjVmaWxiaXlxVjVlSUtCZnU5T1U5aERaMkFPdVQ2QW1BSW9yQ1o5aUVVZlhZdGgxd2pWZWF3UEZNWFNBQUtEdVBoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3Njg2NDk1OTA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwMDIyOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Arthur Sasaki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Sasaki"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

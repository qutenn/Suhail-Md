const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j";
global.website=process.env.GURL || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254113566713" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254113566713";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICA1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNnY1VzYvT1g1TzNhemR1akZZekZPWVBhTVBaWlRBcXNEcUFleERyK2RXbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NzQ3MjQzMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExRTA5NzQxM0I0OEY1NDMxNkM4MzRFNkE5MEFGMDRFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU2MjEzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc3NDcyNDMxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTVGMjc2OUE5MzIxNjkyNDAyOTQyQTIyMzk4QjQ4NzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTYyMTM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInp2R0l1TmItVERxTkptSDAyVGE1OUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzdmYjgwMTktMTNlOS00NTk0LTllYzctOThjNjg1MGE0YTQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgODEsXG4gICAgICAxNSxcbiAgICAgIDExNixcbiAgICAgIDI0MyxcbiAgICAgIDIwMyxcbiAgICAgIDYxLFxuICAgICAgMjA3LFxuICAgICAgMTYsXG4gICAgICA5MSxcbiAgICAgIDI3LFxuICAgICAgNjYsXG4gICAgICA5NyxcbiAgICAgIDIzMSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMyxcbiAgICAgIDE3MixcbiAgICAgIDE3OSxcbiAgICAgIDc5LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDEwOCxcbiAgICAgIDEyNixcbiAgICAgIDIzOCxcbiAgICAgIDE3LFxuICAgICAgMjQ3LFxuICAgICAgMTE0LFxuICAgICAgMTMyLFxuICAgICAgMjEyLFxuICAgICAgMjYsXG4gICAgICAxOTcsXG4gICAgICA5MixcbiAgICAgIDIwMSxcbiAgICAgIDE1NixcbiAgICAgIDE3OSxcbiAgICAgIDE2NixcbiAgICAgIDEzMCxcbiAgICAgIDExNyxcbiAgICAgIDIyMSxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOTjVFVjMzN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzc0NzI0MzEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkzNjQ3OTUzNDY5NjIwOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT21teeKcplwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puUXU3SUVFSlRvODdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZTU5Z0dXa3hCSk1Zd1p1N1JWckhEdzFmYkJxVzV1ZUtmMUl1Z2gvcGZFWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFeTBBdytJbmpaQUQwN0J1b3dhVU1qb1RRKzMyaHpITnAvMjFzSU9CNUcvTmJheFptV0M2MkJwSmdPcUErNFNaTlN0TTBXYmx0bFpuVkNxKzdSQjRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyZmFHd3p6N2dNR0hpREFoQWx2NEtmcWFqZEhZaE5USVBGdjNCQjJocE91ZlB2ODJtQmRLRStwamhER0RZZmdrd3FJcFh3UFc4TWtTekthbUhjMU5EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NzQ3MjQzMTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTYyMTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREh0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGWGl1UTFMc2I3RklEbEptU1hndkRBWk9rQ0c0REFrdVRnMkFnQ2R2bGlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzk1NzYzNDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2MjEzNzg5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐍𝐡𝐞𝐥",
  packname: process.env.PACK_NAME || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",
  botname : process.env.BOT_NAME  || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",
  ownername:process.env.OWNER_NAME|| "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/82aa9c6e73f051f82596d.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

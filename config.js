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
global.gurl  =process.env.GURL  || "https://https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j";
global.website=process.env.GURL || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254113566713" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2547113566713";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82aa9c6e73f051f82596d.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_33_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2dUNGtTTklOTHZaMHU0QmxmTEhXRjNEbXBjZjlwaWpua29IdURLVHpnVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0ZBLTRrR1pTY3E5STJXR2ZDMG9FQVwiLFxuICBcInBob25lSWRcIjogXCI2NzllZTI2NC1mOTc3LTRlNDUtOGY0Mi04OTUwY2I3YzlkYmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjU0LFxuICAgICAgMjQzLFxuICAgICAgMTQ3LFxuICAgICAgMjMyLFxuICAgICAgNixcbiAgICAgIDE0NSxcbiAgICAgIDE0MyxcbiAgICAgIDM1LFxuICAgICAgOTIsXG4gICAgICAxNyxcbiAgICAgIDM1LFxuICAgICAgNzYsXG4gICAgICAxNzYsXG4gICAgICAxMTAsXG4gICAgICA2NyxcbiAgICAgIDg0LFxuICAgICAgMTQwLFxuICAgICAgNCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgODUsXG4gICAgICA5NCxcbiAgICAgIDcsXG4gICAgICA1MixcbiAgICAgIDEzLFxuICAgICAgMTY5LFxuICAgICAgMTA4LFxuICAgICAgMTYxLFxuICAgICAgMjEsXG4gICAgICA0MCxcbiAgICAgIDE1LFxuICAgICAgMTEsXG4gICAgICAxOTQsXG4gICAgICAxOTMsXG4gICAgICAyNDUsXG4gICAgICAyMDIsXG4gICAgICAxOTgsXG4gICAgICAyMTksXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0hWUkY5UzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMzU2NjcxMzo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbnwnZaN8J2WivCdlpHwnZab8J2WlOG1iPCdlanwnZWw8J2WkfCdlprwnZaS8J2WjlwiLFxuICAgIFwibGlkXCI6IFwiMjAwODU4OTYwNzE5OTgwOjg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6dXE2OEJFT0taazdVR0dCOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3QzVXZkMVAvUXg0WFRNL0ZVTWVnZWh0MVUrM25TeTl6SmZKRlBmSHNUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5YTlxZVBFN1E4UkIzSEVTdUMzSHpEUGRjaVpGL1FQd0xlbnowZWh4UmR4a1FVeTVMNmF5TDZ1SHNMWCtCUStHQ2JTY3BKbTdSY3RsM0oxaXlZRjVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxdTJrVm1LWW1sbjh0VC9WUEZwcXduTnFkemtGUlcrQTRISDUxTlVWeVQ1U3Q4MFJZRUFMU1NDd1orRXl5UHg2VGVHS09mMnc0QUxSaWhiQWhMaTloZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTM1NjY3MTM6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3NjM5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhXelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFd6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWEkvd3dKaGZRcnEwZFMweVJsYzcxdVE4bng3OHNDN1hEaFNYL2hjQ3dXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjc3MjAyNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕹𝖍𝖊𝖑𝖛𝖔",
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

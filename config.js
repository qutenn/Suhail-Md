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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_55_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicG1XVDh4OWI3bXJaUFBrMmhxWTBlMFNleVRaTTd0ZWJKd2thNHVVUHpOQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFZyTjltWVRUanUwV2QzOW0zOEtYUVwiLFxuICBcInBob25lSWRcIjogXCJlNGRiM2FkOC0xMDg5LTQyZDMtYmE3YS0wZDllOTllNzBhNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAyMTcsXG4gICAgICA4MCxcbiAgICAgIDIxNSxcbiAgICAgIDM5LFxuICAgICAgNzIsXG4gICAgICAyNDgsXG4gICAgICAzNSxcbiAgICAgIDQwLFxuICAgICAgMTAwLFxuICAgICAgMjQ5LFxuICAgICAgMTk5LFxuICAgICAgNCxcbiAgICAgIDE4MCxcbiAgICAgIDIyNSxcbiAgICAgIDc4LFxuICAgICAgMTg4LFxuICAgICAgMTM3LFxuICAgICAgMTM3LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMjQ0LFxuICAgICAgMTc4LFxuICAgICAgMTQ5LFxuICAgICAgMjYsXG4gICAgICAxOTAsXG4gICAgICAxMCxcbiAgICAgIDIwMSxcbiAgICAgIDQsXG4gICAgICAxNTUsXG4gICAgICAxNDQsXG4gICAgICAyOSxcbiAgICAgIDExMSxcbiAgICAgIDE5NyxcbiAgICAgIDE4NSxcbiAgICAgIDE0NyxcbiAgICAgIDE1MixcbiAgICAgIDE1NCxcbiAgICAgIDI4LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLU1dTQ0tRUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEzNTY2NzEzOjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VufCdlo3wnZaK8J2WkfCdlpvwnZaU4bWI8J2VqfCdlbDwnZaR8J2WmvCdlpLwnZaOXCIsXG4gICAgXCJsaWRcIjogXCIyMDA4NTg5NjA3MTk5ODA6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHp1cTY4QkVJNjBzTFFHR0JJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTdDNVdmQxUC9ReDRYVE0vRlVNZWdlaHQxVSszblN5OXpKZkpGUGZIc1RBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxtNEdtZnNVYzMzbkZFRWpnY1ZDRmpZY3ZmMW1TSGJLVElVY1RCeFp5MlJWaDhWdXdUejJZanZRVnlhbTdHNDNyL3ZwRllrSXJuOGJnY2pnWnZtRENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVKQ25BdStyaTZOMHYrM1paZXRQV1JnTjV3bXRUMkpLdHRsYURacitJQzlRZTBZeGZFUTF4TnVWNlZCSllwRFlraXYxd0dLcXBsaXJYMGY0UVNKT2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMzU2NjcxMzo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDU3NzQ3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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

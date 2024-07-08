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


global.devs = "254712611776" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254712611776";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_54_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEZDTHM4MkFFditJK0k3MVdYZUdFcHNCaGFUbzBjWTlZcTZoL09aZGZScz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekJKODVEdWZUMktGTENPU0w1UWF6Z1wiLFxuICBcInBob25lSWRcIjogXCJiZTc3OWIxMi00OTdlLTQwZTMtOGM1Ni1lYWRkZmZmOTc0MGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgODAsXG4gICAgICAyMDcsXG4gICAgICAyMzgsXG4gICAgICAxNzAsXG4gICAgICA5MCxcbiAgICAgIDIyOCxcbiAgICAgIDU0LFxuICAgICAgMTI0LFxuICAgICAgMjQsXG4gICAgICA0MSxcbiAgICAgIDI2LFxuICAgICAgOCxcbiAgICAgIDM1LFxuICAgICAgMTkyLFxuICAgICAgMTE3LFxuICAgICAgMTI2LFxuICAgICAgMjMxLFxuICAgICAgMjA0LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMjUyLFxuICAgICAgOSxcbiAgICAgIDE4MCxcbiAgICAgIDc5LFxuICAgICAgNzAsXG4gICAgICAyNixcbiAgICAgIDQ0LFxuICAgICAgMTcsXG4gICAgICAyMzYsXG4gICAgICAxNDAsXG4gICAgICAxMixcbiAgICAgIDU1LFxuICAgICAgMTA4LFxuICAgICAgMTkzLFxuICAgICAgMjUwLFxuICAgICAgNjEsXG4gICAgICAyNTMsXG4gICAgICAxNyxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhXUlFDNFk0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDM4NjQwNDk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2NjA0Mzg4OTU0MTU1OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hYck1FREVOSHJzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5eWhJckg4STlHMXlSWHVXZ2VtQXAvZGN6KzJPc2FjTDQ2M0lEOXRaTjFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhEV2tUVEhkMkV2aXRXMmpvOTZiUlhzaEt4Nnp6M0pXUUZKWXdZa1NWWHBMTWRVcUI0N1ZsYjk2YUJkVG9ldE5xQlNSNUNDRkFpRVZaRWZUZ0ZHM0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNrUWV1dzJWZk9waVY4cDJXUm5wZ0RIVCtWTkJRZWN2cFczTVlpa0Z4dXZkTGtyZWJxMzV1L1A5c2pvSjNaV3B5RjFyYWxNS0Qrdlo1T2kyVXF4OWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMzg2NDA0OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ2NDg1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNWa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1ZrLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

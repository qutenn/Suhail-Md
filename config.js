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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_19_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpPYUxaTE9ReCtlcFdKUXV0RTVWVWZMdTNBZ0lSZ1R3enhkSlFVazMzdUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpVc1k4RDdzU2QyTXhVYWRDM3pTR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFmZGZkOWYtZTRhNS00NmVhLWJmZjgtZTcwNDYwZjY1MWE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDE0NyxcbiAgICAgIDE0MyxcbiAgICAgIDEwMCxcbiAgICAgIDMwLFxuICAgICAgOTMsXG4gICAgICAyMjYsXG4gICAgICAyMSxcbiAgICAgIDE4NSxcbiAgICAgIDExNSxcbiAgICAgIDI1NSxcbiAgICAgIDg0LFxuICAgICAgMTg5LFxuICAgICAgOSxcbiAgICAgIDQ5LFxuICAgICAgMjA5LFxuICAgICAgMjIsXG4gICAgICAyMDcsXG4gICAgICAxMixcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDU3LFxuICAgICAgMjQ1LFxuICAgICAgMTI0LFxuICAgICAgMjAyLFxuICAgICAgNDIsXG4gICAgICAxOTksXG4gICAgICAxMDYsXG4gICAgICAyMjYsXG4gICAgICAyNDYsXG4gICAgICAyMjYsXG4gICAgICAyNCxcbiAgICAgIDMxLFxuICAgICAgNDksXG4gICAgICAyNixcbiAgICAgIDE0OCxcbiAgICAgIDE3MyxcbiAgICAgIDE5MSxcbiAgICAgIDY0LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1TjlaWEE0RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTExNTE0MjMwOjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWlsZXNcIixcbiAgICBcImxpZFwiOiBcIjU3MjkwOTU0NjU3ODE4OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DdHM0Y0RFSi9YcWJRR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWtSN29PUnc5dVI1WE84VG5pcG4yRTRWL0Q5cG96amFjTDJ1Nlo2VDcxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMQ05tVTZodnZNMFNTVU1SLzhGaW5hN0d1VjYvMWVwNFVLbGtxSzhRQTRGdnlXWk04ZkpZRG5lT0pPSXNaaWhXTXdaWEYvd0ZvTkFMRFpNZENWWllBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTSDMweitHL3lLdE5rSWJEMVQvUi9qbVlKWkExWm4vNUsvZitTY3RuLzg2ZWZYRTZ6UVpGRTczZzd4WVVvQk5PZXpYcGZYbW5hNXVFWnRxazNMNklEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTE1MTQyMzA6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNDc1NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEdkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR2TC5qc29uIjogIntcImtleURhdGFcIjpcImJiVDB2eStjNzM1dDdkNnRScTc3ckNudlB3RTVaMFphTnhBTVZieFNpNG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODIwODI3ODQwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

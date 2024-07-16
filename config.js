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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtRLzF0WFFMOU1Zb3hvak5aemk3RlFOV3YzbHVTSDVJMTk5bVVXdmtzZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInY5d2JsZ2tVVHVXSFBUY1BhMXJuZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWVjMjU0YjEtMjMyMy00NTQ4LWFkOWMtMjVmZWI2YTY1NWM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMjgsXG4gICAgICA3MSxcbiAgICAgIDIyMCxcbiAgICAgIDg0LFxuICAgICAgMjYsXG4gICAgICA2NyxcbiAgICAgIDIyMCxcbiAgICAgIDQxLFxuICAgICAgMjA3LFxuICAgICAgMjksXG4gICAgICAxMDUsXG4gICAgICAxMjIsXG4gICAgICAxMjksXG4gICAgICAxNDEsXG4gICAgICAyNDksXG4gICAgICA5OSxcbiAgICAgIDM2LFxuICAgICAgOTcsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICA5LFxuICAgICAgMzcsXG4gICAgICAxOTQsXG4gICAgICAxODIsXG4gICAgICA0MixcbiAgICAgIDg0LFxuICAgICAgODEsXG4gICAgICAxNjMsXG4gICAgICAxOTYsXG4gICAgICAxNjEsXG4gICAgICAxNTEsXG4gICAgICAxNzAsXG4gICAgICAxODcsXG4gICAgICAxNzYsXG4gICAgICAxODAsXG4gICAgICAyMTMsXG4gICAgICA0NixcbiAgICAgIDE1NCxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEWFQ0QkRMQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEzNTY2NzEzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VufCdlo3wnZaK8J2WkfCdlpvwnZaU4bWI8J2VqfCdlbDwnZaR8J2WmvCdlpLwnZaOXCIsXG4gICAgXCJsaWRcIjogXCIyMDA4NTg5NjA3MTk5ODA6ODJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHp1cTY4QkVPLy8yYlFHR0JnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTdDNVdmQxUC9ReDRYVE0vRlVNZWdlaHQxVSszblN5OXpKZkpGUGZIc1RBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldaMWFvQllSN1FZdHQyT1ZFZzJMNUd5VlFCUTZ2bGNpWWVnU25ESmI1cFRWSHpRNmNkR3R4MkdsV09kMXBYRUFyTGZmUGhXYThTSUoxU3g3dWhuQkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImoxZnU1UUVESjhHb0VXTmw2dDRFM3VvSVJRT3ljaWtoQ1RYbkx6bURPUzN0UVBlY2JpdktFU3lLTDgvY1lCaVRwNzlBczZpTjE1Vk1mb3ZlZWVCa2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMzU2NjcxMzo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTM5MTg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFd6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIV3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSS93d0poZlFycTBkUzB5UmxjNzF1UThueDc4c0M3WERoU1gvaGNDd1dRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2NzcyMDI1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

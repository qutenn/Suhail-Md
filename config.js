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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNEMkd0N29qWkhoOGR5R1ZWRXhPV0hvMnU4UlNyUW5MWkgrMzlFcUllS1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIncxSE1tckdtVG9tN1EwVGpwU2FnZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGMxY2Q5ZjctMWVkYi00OGFhLWIxYWEtYTA5MTA1NzcwZTgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMjM3LFxuICAgICAgMTA1LFxuICAgICAgMTM2LFxuICAgICAgODIsXG4gICAgICAyMzgsXG4gICAgICAyNDUsXG4gICAgICAyNTUsXG4gICAgICAzMixcbiAgICAgIDcxLFxuICAgICAgMTIyLFxuICAgICAgMTMsXG4gICAgICAxNjksXG4gICAgICA1OCxcbiAgICAgIDc3LFxuICAgICAgMjAxLFxuICAgICAgMTg4LFxuICAgICAgMTksXG4gICAgICAyMzgsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTM3LFxuICAgICAgMTksXG4gICAgICAyMDgsXG4gICAgICAxNzksXG4gICAgICAzNyxcbiAgICAgIDE5MCxcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgMTUzLFxuICAgICAgNTMsXG4gICAgICAxMDIsXG4gICAgICAyMTksXG4gICAgICAxMTUsXG4gICAgICAyMTMsXG4gICAgICAxMDQsXG4gICAgICAyNyxcbiAgICAgIDIzLFxuICAgICAgNzksXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNjJKNU5ETlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzEyNjExNzc2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0Mzc1NzY2MzcxNTM3NjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMajV0cnNHRU5Hbm9MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldnSUI2VGljRnRlUzZkYm1zZWVIN3ZlTnlQc2dlUTd0cXB6SnRDMytKaDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFNKVjJDcjllZEpEZnJkakFKUjJIMG41NWVrOWlIZjRkNXI1VER1M2IvNG9XR2xVNExONTlSRkEvd1hoOHNPUWNCdGtHVXphQ2JvcW8wMVY5YkhFQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWJWTURETmNiVW9JaVdRV3Z0T0Z4ZXA5VzJVbmlld0MraTJ2UnZ5SFIrcXFlSC9HZktDdUQ3VE5xeUlvKzllVVFiU203TnBRUjllWlI0TWI1cjk2RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzEyNjExNzc2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTk0MDA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWlvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdVdTanBjMVRheW9vT2pDZ1ZqYnI3R0MrU0tFNDJVZjZEMXBVVm5FalJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzUyNDQ5NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAZEIN",
  ownername:process.env.OWNER_NAME|| "RAZEIN",


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

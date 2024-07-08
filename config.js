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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_51_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvWStMQjh5ajNSMHVtRy93cG5TVWh0empIRmJPR09JbHQrTXVIY2dld2M4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiOUN3VzdyYlI0NnZZdGtDbnZvcnd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmNTRjNTI1LWViMjMtNGQ0My1iN2IxLTYwZmYyMmUwZWJiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTQxLFxuICAgICAgNTMsXG4gICAgICAyNTUsXG4gICAgICAyMTcsXG4gICAgICA4MCxcbiAgICAgIDEzMyxcbiAgICAgIDgxLFxuICAgICAgMjI1LFxuICAgICAgODksXG4gICAgICA3NSxcbiAgICAgIDIwNCxcbiAgICAgIDczLFxuICAgICAgMTMxLFxuICAgICAgMTMwLFxuICAgICAgMTU4LFxuICAgICAgMjUzLFxuICAgICAgMTQ5LFxuICAgICAgMjIwLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIyOCxcbiAgICAgIDExNixcbiAgICAgIDE4OSxcbiAgICAgIDU5LFxuICAgICAgMTcxLFxuICAgICAgODgsXG4gICAgICAxNyxcbiAgICAgIDEyMSxcbiAgICAgIDIwLFxuICAgICAgOTIsXG4gICAgICAxODgsXG4gICAgICA5NSxcbiAgICAgIDE0MixcbiAgICAgIDQ4LFxuICAgICAgNDIsXG4gICAgICA2NSxcbiAgICAgIDIxNixcbiAgICAgIDY1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTDJISkw1U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzkyNzYwNzQ0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZvfCdmpIg8J2agvCdmpHwnZqK8J2anfCdmp3wnZqK8J2akVwiLFxuICAgIFwibGlkXCI6IFwiOTQ5MDE3MzE2MDY2NDc6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZadVBJQkVLbkJyN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhbEE1OEQ4ZzNrcTJRbmcwNXRhbnVQYi9ZQmxkWmdEbEpnbXM5ekttcGxBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRCcnhUQkVuWFV0anJvZ25ZYnV5S0tyTEJuK28yTzNTeTdQRjJxSWVYR1Y3SThnY0g5MU1YRGRLVVk5VTBUVWJkMGtPc3pJcUxiYisyR1FxZldHT0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNSemlKL3FVQXUyNlE5eWtlbktQd1QvQlpxaU1DZzVJZWpDN2RHazZ5d2pTV2N5VDhZM2w1a1grWnlRNVNSeW80NWpQaUhEZXRpRWx4VVd1elU1ekNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5Mjc2MDc0NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDMwNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLaW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpby5qc29uIjogIntcImtleURhdGFcIjpcIkh3T3NTWHdUTGlVOU5LS2FNY2VWalVkZ0cwakdUdG83MUc0cTNyQUhWVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTA4NDMxNTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4MzIyNzI5MDhcIn0iCn0="  // PUT your SESSION_ID 


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

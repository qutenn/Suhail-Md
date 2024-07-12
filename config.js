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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_19_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuR3VNcy9UVzJTVGVhMXk3NkhUaFdnVE9DYmNZaDRkaEFoaC9kVys0TXY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtYVMtUDI2VFJ2U3I0TGI5RVZRLVJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjN2ZiODRmLTliM2EtNDdkZS1iZDNkLTJhMTczZDkzMjMxMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDExMyxcbiAgICAgIDE1OCxcbiAgICAgIDYwLFxuICAgICAgNzMsXG4gICAgICAxNDksXG4gICAgICAyNSxcbiAgICAgIDE2NyxcbiAgICAgIDIzMCxcbiAgICAgIDE3NCxcbiAgICAgIDE5NSxcbiAgICAgIDkyLFxuICAgICAgNyxcbiAgICAgIDI0MSxcbiAgICAgIDE5MyxcbiAgICAgIDEyMixcbiAgICAgIDkyLFxuICAgICAgMTc1LFxuICAgICAgMjEyLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDEwOSxcbiAgICAgIDIzMixcbiAgICAgIDIxNCxcbiAgICAgIDI1MixcbiAgICAgIDIxOCxcbiAgICAgIDY1LFxuICAgICAgMTgzLFxuICAgICAgNzksXG4gICAgICAyNDAsXG4gICAgICAyMDIsXG4gICAgICAxMTksXG4gICAgICAyNDksXG4gICAgICA1NixcbiAgICAgIDMyLFxuICAgICAgNTIsXG4gICAgICAxMTgsXG4gICAgICA3LFxuICAgICAgMTQ4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVlGNjVOTkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTkwNzY1NDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzU0ODg3OTgyMTYyMjI6NTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUExYb1lRRkVOajJ4TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIOEszMDFIbExXaC8vaDZYT1RQU2JGc203VVZhSGxaVmxKSFhkMWlXc1FRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRuS2s4VmYzdnFrWmxtbHlVKzNqV0ZMZjhwVUsvc3V6bmtWcHczZm5vbitQdjZXU201VFpJWGJKb0tzQ1UrVWszWnZ6c2Y2OVBSS3d3a1FEVEdybUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlmL1ZUQ0Vqa2hNKzBVQ1hNVzROeHNaWlhCZERKanNndENMRWNWMVFtVGhqV0t0UjdMQ3dGWmIyK0diemlzcThJVWlrWnIwRUgxTzEzRDhwQXphZEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNTkwNzY1NDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzkzOTQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkpDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGSkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHZXNTTEZrN3M4VG01eUFkY3VHdDdCazNUenlYS1MvWWdHRjd1UG1WYmVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTExMTc4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDcyNjUzNjMzM1wifSIKfQ=="  // PUT your SESSION_ID 


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

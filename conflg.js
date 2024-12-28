const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process. env.ALIVE_IMG || "https://drive.google.com/file/d/1-zm5zbhk3E8wKVivPszpYrel_B6vtYFm/view?usp=drivesdk",
ALIVE_MSG: process. env.ALIVE_MSG || "Hello i am alive owner Denuwan-md",   
};

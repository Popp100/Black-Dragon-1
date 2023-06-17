const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'A6JDTCZI#6EaOIsZA4jOtfWGKKzNZ36ym5pNSdySPYlhyl0EAFeY' : process.env.SESSION_ID,
BOT_NAME: process.env.BOT_NAME === undefined ? 'ʙʟᴀᴄᴋ-ᴅʀᴀɢᴏɴ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ' : process.env.BOT_NAME,
OWNER_NAME: process.env.OWNER_NAME === undefined ? 'Nimesh Official' : process.env.OWNER_NAME,
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94786802371' : process.env.OWNER_NUMBER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD,
MAX_SIZE: 100,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
LOGO: process.env.LOGO === undefined ? `https://telegra.ph/file/17d25248a18357d93d98e.jpg` : process.env.LOGO
};

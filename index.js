const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./leon/');
const fs = require('fs');

async function start() {
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [3, 3430, 9]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Leon')}
${chalk.white.italic('Made By ')}${chalk.red.bold('𝐒𝐄𝐍𝐒𝐄İ 𝑩𝑶𝑻✔︎')}
${chalk.blue.italic('🔄 Loading QR CODE...')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SESSION="${st}"`);
        }

        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, IT IS IMPORTANT... ⚠'))
            
        console.log(
            chalk.blue.bold('Thank You For Using Leon シ︎❥︎'))

        process.exit(0);
    });

    await conn.connect();
}

start()

const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('yes its heated');

});

 

client.on('message', message => {

    if (message.content === '%help') {

       message.reply('sup');

       }

});

client.login(process.env.vZ4EmadbrGCVlCBir_B1lzL8GAk1p3vn);

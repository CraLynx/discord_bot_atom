const Discord = require('discord.js');
const robot = new Discord.Client();
const config = require("./config.json");

robot.on('message',(message) => {

    switch (message.content.toLowerCase()) {
        case (config.prefix+'help'):
            message.reply( 'Ознакомься с командами' );
            message.channel.send( config.prefix+'avatar - дает ссылку на скачку твоей авы');
            message.channel.send( config.prefix+'roll - рандомное число от 0 до 100' );
            message.channel.send( config.prefix+'on - проигрывать музыку ' );
            message.channel.send( config.prefix+'off - минус музыка' );
            message.channel.send( config.prefix+'pause - пауза музыки(в разработке)' );
            message.channel.send( config.prefix+'resume - возобновить музыку(в разработке)' );
        break;
        case 'ку':
            message.channel.send( 'И тебе ку братишка' );
        break;
        case 'как дела':
            message.reply( 'Все оки!' );
        break;
        case 'саня':
            message.reply( 'все в порядке' );
        break;
        case config.prefix+'avatar':
            message.reply(message.author.avatarURL);
        break;
        case config.prefix+'roll':
        message.reply
            message.reply( 'You rolled: '+ Math.round(Math.random() * (100 - 0) + 0));
        break;
        case config.prefix+'on':

            if (message.member.voiceChannel) {
             message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('Я присоединился! Давай слушать вместе');
                const dispatcher = connection.playFile('D:/GitHubProject/Atom/music/sale.mp3');
              })              
              .catch(console.log);
          } else {
            message.reply('Ты должен присоединиться к голосовому каналу!');
          }
        break;
        case config.prefix+'off':
            message.reply('Пока, mein Freund!');
            message.member.voiceChannel.leave();

        break;
        case config.prefix+'pause':
        message.reply('В разработке');    
        break;
        case config.prefix+'resume':
        
        message.reply('В разработке');   
          
        break;
    }
});

robot.login(config.token);




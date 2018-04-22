const Discord = require('discord.js');
const robot = new Discord.Client();
var prefix = '!'
robot.login("Token_Name");
robot.on('message',(message) => {

    switch (message.content.toLowerCase()) {
        case (prefix+'help'):
            message.reply( 'Ознакомься с командами' );
            message.channel.send( '!avatar - дает ссылку на скачку твоей авы' );
            message.channel.send( '!roll - рандомное число от 0 до 100' );
            message.channel.send( '!on - проигрывать музыку' );
            message.channel.send( '!pause - пауза музыки(в разработке)' );
            message.channel.send( '!resume - возобновить музыку(в разработке)' );
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
        case prefix+'avatar':
            message.reply(message.author.avatarURL);
        break;
        case prefix+'roll':
        message.reply
            message.reply( 'You rolled: '+ Math.round(Math.random() * (100 - 0) + 0));
        break;
        case prefix+'on':

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
        case prefix+'pause':
        message.reply('В разработке');    
        break;
        case prefix+'resume':
        
        message.reply('В разработке');   
          
        break;
    }
})




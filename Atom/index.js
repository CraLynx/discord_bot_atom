const Discord = require('discord.js');
const robot = new Discord.Client();
const config = require("./config.json");

robot.on('ready',()=>{
    console.log('I\'m online');
})

robot.on('message',(message) => {
    switch (message.content.toLowerCase()) {
        case (config.prefix+'help'):
            message.channel.send({
                embed: {
                    color: 7115439,
                    title: "Hello, my name's Atom!",
                    image: {
                        url: robot.user.avatarURL
                    },
                    fields: [
                        {
                            name: config.prefix+'avatar',
                            value: "Показвает твой аватар и дает ссылку на скачивания."
                        },
                        {
                            name: config.prefix+'roll',
                            value: "Рандомное число от 0 до 100."
                        },
                        {
                            name: config.prefix+'on',
                            value: "Проигрывать музыку."
                        },
                        {
                            name: config.prefix+'off',
                            value: "Минус музыка."
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: robot.user.avatarURL,
                        text: "© Atom"
                    }
                }
            });
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
        case config.prefix+'play':
            message.reply('В разработке');    
        break;
        case config.prefix+'resume':
            message.reply('В разработке');        
        break;
    }
});
robot.login(config.token);




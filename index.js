const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
	console.log(`${client.user.username} STATUS: ONLINE`);
	client.user.setActivity('{Prefixo: mb!} - Versão 1.2.1 - Edição em Java', { type: 'WATCHING' });
});

client.once('ready', () => {
	console.log('MoisesBot 1.2.1 pronto para o serviço!');
});

client.login('NzA1NjE4MjIwODc0NDY1MzMx.XtGvvQ.GyqQkEN9aGZ842C7sAjEJGUU7DE');

client.on('message', message => {
	console.log(`${message.author} : ${message.content}`);
});

// Comandos Básicos

client.on('message', message => {
	if (message.content === 'Moises') {
		message.channel.send('Bot');
	} else if (message.content === 'MoisesBot Equipe') {
		message.channel.send('Conheça a equipe que me criou! https://discord.gg/KAPMPjB');
	}
});

client.on('message', message => {
	if (message.content === 'mb!invite') {
		message.channel.send('Bhttps://discordapp.com/oauth2/authorize?client_id=705618220874465331&scope=bot&permissions=8');
	} else if (message.content === 'mb!versão') {
		message.channel.send('O MoisesBot atualmente está na versão 1.2.1, desenvolvida pela equipe MoisesBot.');
	}
});

client.on('message', message => {
	if (message.content === 'mb!help') {
		message.channel.send('ERR 403 - ACESSO A ESSE COMANDO FOI NEGADO, VOCÊ NÃO TEM PERMISSÃO PARA UTILIZAR ELE.');
	} else if (message.content === 'mb!ajuda') {
		message.channel.send('ERR 403 - ACESSO A ESSE COMANDO FOI NEGADO, VOCÊ NÃO TEM PERMISSÃO PARA UTILIZAR ELE.');
	}
});

client.on('message', message => {
	if (message.content === 'mb!update') {
		message.channel.send('[30/05/2020]MoisesBot agora está na versão 1.2.1! Mais inteligente e com mais códigos!');
	} else if (message.content === 'mb!donate') {
		message.channel.send('Esse comando estará disponivel logo...');
	}
});

client.on('message', message => {
	if (message.content === 'mb!') {
		message.channel.send('Esse é o meu prefixo, para executar um comando use prefixo + comando. EX: mb!help .');
	} else if (message.content === 'mb!doutor_stonks') {
		message.channel.send('...');
	}
});

// Avatar

client.on('message', message => {
	if (message.content === 'mb!avatar') {
		message.channel.send(`${message.author}:${message.author.displayAvatarURL()}`);
	}
});

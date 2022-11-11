const { CommandClient } = require('eris')

// bot creation
async function init(token) {
    const Bot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the command
    Bot.on('ready', async () => {
        await Bot.bulkEditCommands([{
            name: 'test',
            description: 'this is a test command to see if the bot is on',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${Bot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction creation event
    Bot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'test') {
            await interaction.createMessage({
                content: 'True! the but is working hooray'
            })
            console.log('Test command executed')
            process.exit(0)
        }
    })
    Bot.connect();
}

const tokenFromCommand = process.argv[2]
init(tokenFromCommand);

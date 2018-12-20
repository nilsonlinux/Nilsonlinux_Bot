const TelegramBot = require( `node-telegram-bot-api` )

const TOKEN = `699393281:AAEcGubrL3mAD22FVvBUmhCXOPt7HlbE_gs`

const bot = new TelegramBot( TOKEN, { polling: true } )

bot.on('new_chat_members', (msg) => {
    bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao Tudo Sobre Linux (LTS)!! Qual distribuição você utiliza?`)
 })
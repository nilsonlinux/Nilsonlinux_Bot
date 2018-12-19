'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('703007776:AAGAjCw7YbemwMPpf3mlOKNblmHj1q2idmI')
class EventsController extends TelegramBaseController {
  allEventsAction(scope) {
    let msg = `QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br`
scope.sendMessage(msg)
  }
get routes() {
    return {
      'buscacep': 'buscacepAction'
    }
  }
}
chatbot.router
       .when(
         new TextCommand('/buscacep', 'buscacep'), new EventsController()
       )
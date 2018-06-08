const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: 'd19c8527',
  apiSecret: '5bc0b07140d98f93'
})

const from = 'Acme Inc'
const to = '919585823764'
const text = 'A text message sent using the Nexmo SMS API'

nexmo.message.sendSms(from, to, text);
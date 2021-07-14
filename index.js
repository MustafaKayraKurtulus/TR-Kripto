const superagent = require('superagent')

module.exports = {
  name: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let name = body.name
   return name
  },

  price: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let price = body.prices.usd
   return price
  },

  usd: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let price = body.prices.usd
   return price
  },

  try: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let price = body.prices.try
   return price
  },

  percent: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let percent = body.change
   return percent
  },
  
  icon: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let icon = body.icon
   return icon
  },

  table: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let table = body.table
   return table
  },

  val24: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let vol24 = body.vol24
   return vol24
  },

  market: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let market = body.market
   return market
  },

  lower: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let lower = body.lower
   return lower
  },

  higher: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let higher = body.higher
   return higher
  },

  all: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
    let name = body.name
    let usd = body.prices.usd
    let tl = body.prices.try
    let vol24 = body.vol24
    let market = body.market
    let lower = body.lower
    let higher = body.higher
    let percent = body.change
    let icon = body.icon
    let table = body.table
    let allone = {
        name: name,
        usd: usd,
        try: tl,
        vol24: vol24,
        market: market,
        lower: lower,
        higher: higher,
        percent: percent,
        icon: icon,
        table: table
    } 
   return allone
  },
};
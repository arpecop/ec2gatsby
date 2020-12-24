const fs = require("fs")
const keywords = [
  "musclegodjay",
  "wvrldwo",
  "laurenhulsey96",
  "lilcookiewhore",
  "candurular",
  "athenalove30",
  "kmcartoons",
  "nicegirlmeg",
  "ganjamom420",
  "bbquelse",
  "ayyeejohannna",
  "moa2a94",
  "thechanelrenee",
  "alterbagets",
  "tyylerrrjane_",
  "xtina_maria7",
  "wingyithepoon",
  "channelstheapp",
  "lhtskn",
  "therealmrexotic",
  "giantessnyx",
  "fashionistaaxo",
  "slave4cash",
  "imerika_jade",
  "wankbattle",
  "sultry_nicole",
  "movies2k2",
  "jakolerongbata",
  "muggledalal",
  "annie22551",
  "soulsxcker",
  "forzaslan57",
  "nepatitisc",
  "potatotaco94",
  "oyohmy",
  "ameliurgh",
  "bbqanon",
  "justin_bryant8",
  "rvvvvzo",
  "fmchtt",
  "nbjen",
  "iamcanyildiz",
  "padarenka",
  "ashexplicit",
  "stephsofanny",
  "viole7x",
  "ceoofemokids",
  "carliiha22",
  "letslovelots",
  "pearlypoesis",
  "elitabethxx",
  "karuzol",
  "cashmastermatt3",
  "reynolljr18",
  "meanmissqueen",
  "honeymunnymoon",
  "vamosankit",
  "sadgalkorie",
  "ava_ustina",
  "dillon6736",
  "gh0bbs16",
  //
  "mroyal88",
  "gncms",
  "arianaaao",
  "surrealzak",
  "nicegirlmeg",
  "ayoo_anto",
  "thenymphotweets",
  "thefernijr",
  "jamzlndon",
  "tweet2ish",
  "vanayillaswirl",
  "nellimamita",
  "facepalmchris",
  "fentyaysher",
  "calpolkidsf",
  "atribecalledval",
  "exo_sonini",
  "oyohmy",
  "candurular",
  "potatotaco94",
  "goddessmonet1",
  "shawnriannebl",
  "forzaslan57",
  "beni kaybetmeye çalışıyor gibisin",
  "ayeeekim_",
  "steph_funn_knee",
  "jennng12",
  "sadittychick_xo",
  "a7md_sheriff",
  "succubusnemu",
  "eduhauer",
  "straubberryy",
  "niniheartsss",
  "sarapngbagets",
  "abtchv",
  "elliescanlan7",
  "melektemiizz",
  "carnivalouswalt",
  "annaiekt",
  "briannaga20",
]

const async = require("async")
const puppeteerGoogleScraper = require("puppeteer-google-scraper")
async.eachSeries(
  keywords,
  function(element, callback) {
    puppeteerGoogleScraper(element, {
      limit: 5,
      headless: false,
    }).then(d => {
      console.log(element, d)
      callback()
      fs.writeFile(
        "./src/content/" + element + ".md",
        `---
title: ${element}
description: Top ${element} adult content creator 👁♐️ 👑 subscribe ${element} to my porn site below IG ${element}
date: 2019-08-26
path: /${element}
---

${element}
${JSON.stringify(d)}

`,
        function(err) {}
      )
    })
  },
  function(err) {}
)

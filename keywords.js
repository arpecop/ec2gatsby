const fs = require("fs")
const keywords = [
  "seasie731",
  "frosted aline",
  "srksgeet",
  "wvrldwo",
  "ohlalaleahhh",
  "indianmenonline",
  "fashionistaaxo",
  "puddyls wetting",
  "#bethoc61",
  "vaanessatwitch",
  "helpitzlana",
  "onlinejsell",
  "honeymunnymoon",
  "sayplsbaby",
  "luckeee stocktwits",
  "tot7o3",
  "monicesweetfeet",
  "siarramayy",
  "sundeepgummadi",
  "wingyithepoon",
  "rebecay01",
  "enqxo",
  "hashinshin alice",
  "katrinahvel",
  "mistressmilly3",
  "leslieeeekarina",
  "sadgalkorie",
  "#alterbagets",
  "badbitchems",
  "jondavidhd",
  "laurenhulsey96",
  "twitter exoticaslim",
  "17fern38",
  "mirandaxo2",
  "arkadiem",
  "elfsexer69",
  "saltydoesnsfw",
  "tuestbellee",
  "gassylibrarian",
  "somis_pac96",
  "xshlyj",
  "mylostamygdala",
  "lhtskn",
  "wankbattle",
  "barbiexoxo___",
  "azita thorne",
  "giantessnyx",
  "cubanaf420",
  "rosiemankilla",
  "sinthiiaa3",
  "kaelladakilla",
  "glamprinny",
  "theafghanheart",
  "socialcareofferup.com",
  "ksmith2332",
  "tphantom202",
  "fineassdiorrr",
  "jessiprincey",
  "michellexzc",
  "sebbosch13",
  "swesex",
  "#alterpampanga",
  "egypt1327",
  "achor32020",
  "laurenseegz",
  "humanteddybear1",
  "slummamii",
  "cometson_sally",
  "cinnamoro11",
  "chubbrubb0921",
  "clothingdealsgb",
  "cashfags",
  "anon_bhr_cpl",
  "unde4dban",
  "hoessay4",
  "litojakolito",
  "rriissaa000",
  "babyyjoccy",
  "basicbuki",
  "wigsarcastictea",
  "wwg1wgo",
  "wwga1wga meaning",
  "keekz01",
  "dateeveyonyx",
  "spitinmymouthx",
  "punkaphrodite",
  "trishaxdiaz",
  "ggluvsyou669",
  "izzyanrubio",
  "applepigeon_",
  "me in 2066 after they announce the 76th lockdown",
  "nislatio",
  "imerika_jade",
  "s0bbing4lyfe",
  "exhibitionism8",
  "djspookykizzy",
  "krissy76luvbbc",
  "feguruguru",
  "kiksext",
  "egirltetona",
  "lilcookiewhore",
  "findomfarah",
  "gimmiegigixoxo",
  "roisinkatekelly",
  "niccvallee",
  "slave4cash",
  "jjjayjess",
  "kenzie50",
  "niji_chitsu",
  "masterted41",
  "yourcutegoddess",
  "citibe",
  "sarahcarr08",
  "godessmonet1",
  "neilbecks23",
  "kellydatoes",
  "astreliz",
  "jakolerongbata",
  "kimrojaas",
  "rowwvine",
  "keniaitzelp",
  "feetofbunnyxx",
  "ninaabiitch",
  "#sbfbu",
  "yayakirishima",
  "sinfinamondo",
  "cxxxlx",
  "msfikkity",
  "realzadity",
  "lycrastee",
  "sultry_nicole",
  "rntshr",
  "lilyrose006",
  "homoreligiosis",
  "ceohousingops",
  "fallonstarxxx",
  "derek_xcv",
  "movies2k2",
  "fancyaloevera",
  "#wwg1wg",
  "p1nkpr1ncesa dog",
  "talietaventura",
  "kinkyesme22",
  "vfsxx",
  "incelkai",
  "falseseke",
  "lilbambiqueen",
  "arileatherhead",
  "وفاة تلو وفاة اللهم لا تفجعني",
  "cherryhorrorx",
  "lillyarteagaxo",
  "goawaywendy",
  "aycaliiii",
  "beccaleegilbert",
  "kam2cold",
  "linksetan",
  "annie22551",
  "haruwinn7",
  "afghanshawty onlyfans",
  "muggledalal",
  "nudedude222",
  "jacdecnew",
  "findomitalia",
  "heelsandcuffs",
  "stardust_fawn",
  "2ninichan2",
  "spitinmymouthxx",
  "ferditsc",
  "babyboo94545",
  "mrknedy",
  "bitencourtgabs",
  "kayytamm",
  "bigneek617",
  "rvvvhel",
  "bchloe92",
  "laexoticamati",
  "wvrldwo sex",
  "luckeeebloomgmail.com",
  "19ne_",
  "niyah2bad",
  "jayfigs leaked",
  "shaughnyy_",
  "alephile",
  "rosedancer7700",
  "carnivalous walt",
  "frostedaline ass",
  "missynelson66",
  "tuestbellee",
  "tat2jacub",
  "mai3ddie",
  "musclegodmarcu1",
  "kyxlunna",
  "fmlzombies",
  "findomqueen_x",
  "19cneal",
  "elizabeth88onl1",
  "violentsinner",
  "mike_onenonly",
  "gothgurl626",
  "dudeitssofie",
  "tatithedub",
  "goldenmistresss",
  "jamieleepinky",
  "lexappeal33",
  "open bo semarang cod include",
  "swesex",
  "musclegodjay twitter",
  "quackanon",
  "thesnowbunnygo1",
  "h4ckerrogue",
  "soulsxcker",
  "helpitzlana onlyfans",
  "hetherrfortune",
  "breebaddyy",
  "clevernamexo",
  "superluckeee reviews",
  "muzvo",
  "vicspedro",
  "mistressofcont2",
  "im_to0ch",
  "queenklein218",
  "datwerg",
  "chloe_demesa twitter",
  "babybandza",
  "acedominant69",
  "ashesofpandora",
  "9japrime",
  "afghanshawtyy onlyfans",
  "feetseeguy",
  "truckstopghost",
  "heytherejanel onlyfans",
  "justrach0",
  "missynelson66 twitter",
  "sugaithkiut",
  "sentona97",
  "spacecadetkylee",
  "breeannaxxxx",
  "frosteddaliine",
  "jessica yaniv meow mix",
  "beccscohen",
  "sakshixs",
  "bpaulineeee",
  "babyfufu2",
  "claudiamua1",
  "tayylorrosse",
  "bzabzaza",
  "chupa bagets",
  "frostedaline booty",
  "atcshop",
  "cxvrtnzy twitter",
  "jholla_4",
  "rubratings little rock",
  "jillofsandwich",
  "fotune88",
  "alexandrawbu1",
  "habitixo",
  "zendikarbot_en",
  "lisam60609",
  "jaketyler51",
  "therealmrexotic sex",
  "baker4810",
  "tommytaylorxxx",
  "itsbabygirld",
  "lilpandajack",
  "savvshea",
  "open bo semarang cod",
  "lyndsmcdee",
  "daks bagets",
  "wndrlustxsoul",
  "egirltetona onlyfans",
  "what does wwga1wga mean",
  "keylaterrazas",
  "xprod_arab",
  "afgan shawty",
  "devonluxx",
  "writerjonallen",
  "availdepok",
  "nymphokyka",
  "olutobii",
  "spendonserenity",
  "atija zukauskaite",
  "ehoetional",
  "princessirene99",
  "electronicwiz1",
  "allie0t",
  "murrtube",
  "vfwineland",
  "sarratonin",
  "kaelhoney",
  "brialexandria13",
  "afghanshawty instagram",
  "brauuubs",
  "fendom app",
  "bunny_milf twitter",
  "mtotheholmes",
  "hhaileymitchell",
  "ella taclas",
  "yellataughtyou",
  "detoutebeauute",
  "blu7ohnny",
  "sakyubasux",
  "liabronjames",
  "kylakingg",
  "mkb941",
  "pixiv",
  "nychaftiel",
  "19biaaandrade",
  "availsemarang",
  "bbwpaigetampa",
  "suciosolis",
  "0345 3511692",
  "goddjessx",
  "hanaddo1",
  "linaleannz",
  "signoresamet",
  "goldenmistresss",
  "privateliaisons",
  "dyanaazriel",
  "frostedalone",
  "rmenezxo",
  "victoriapaigeza",
  "bispakjogja",
  "chef smera",
  "xwndrlustxsoul",
  "hrnysiutxo",
  "missrushdi",
  "aahbreel",
  "servemissmegan",
  "eatmyphannnie",
  "mississippitity",
  "bowdown2chelsea twitter",
  "lexi2legit pics",
  "いつだって僕らは フル ノクチル",
  "memeorite",
  "ケモレス",
]

const async = require("async")
const puppeteerGoogleScraper = require("puppeteer-google-scraper")
async.eachSeries(
  keywords,
  function(element, callback) {
    puppeteerGoogleScraper(element, {
      limit: 5,
      headless: true,
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

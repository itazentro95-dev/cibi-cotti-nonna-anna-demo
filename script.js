/* Cibi Cotti Nonna Anna — i18n + depth engine
   Italian is the raw HTML render; dictionaries swap text in place. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var I18N = {
    it: {
      "meta.title": "Cibi Cotti Nonna Anna: la cucina di casa dentro il Mercato della Torretta, Napoli",
      "brand.sub": "Nonna Anna · dal 1968",
      "nav.banco": "Il banco",
      "nav.piatti": "I piatti",
      "nav.storia": "La storia",
      "nav.visita": "Visita",
      "hero.eyebrow": "Mercato della Torretta, Napoli · dal 1968",
      "hero.title1": "La cucina di",
      "hero.title2": "Nonna Anna,",
      "hero.title3": "nel mercato.",
      "hero.note": "solo a pranzo, e i piatti finiscono presto!",
      "hero.sub": "Una tavola calda nascosta tra i banchi del mercato coperto: ogni mattina si cucina quello che il mercato dà, e a mezzogiorno la fila è già al banco.",
      "hero.cta1": "Chiama la cucina",
      "hero.cta2": "Vedi i piatti",
      "hero.rating": "oltre 840 recensioni su Google",
      "hero.hours": "Lun-Sab 12:00-15:30 · Domenica chiuso",
      "hero.caption": "il rraù della regina",
      "hero.stamp": "dal ’68",
      "ritual.title": "Come funziona, da sempre",
      "ritual.s1t": "Arriva all’apertura",
      "ritual.s1p": "Si apre a mezzogiorno e si serve solo a pranzo. Le teglie sono piene alle 12: verso l’una e mezza, i piatti migliori sono già finiti.",
      "ritual.s2t": "Scegli guardando le teglie",
      "ritual.s2p": "Niente menù stampato: i piatti del giorno sono lì, dietro il vetro. Guardi, indichi, e la porzione arriva fumante.",
      "ritual.s3t": "Mangia come a casa",
      "ritual.s3p": "Pochi tavoli, vicini vicini: quelli del mercato, del quartiere, e chi ha avuto la dritta giusta. Anche da asporto.",
      "ritual.note": "Il menù del giorno (una decina di primi e altrettanti secondi) viene scritto ogni mattina sulla pagina Facebook della casa:",
      "ritual.fb": "vedi il menù di oggi",
      "band.caption": "il banco, alle dodici in punto",
      "menu.title": "I piatti che tornano",
      "menu.lede": "Non esiste un menù fisso: si cucina al mattino, con quello che il mercato dà. Questi sono i piatti che tornano più spesso: le ricette di casa, quelle che la fila chiede per nome.",
      "menu.g1": "I primi",
      "menu.g1h": "una decina al giorno",
      "menu.d1": "con la provola, il piatto simbolo della casa",
      "menu.d2": "cremosa, come si fa a Napoli",
      "menu.d3": "la zuppa buona dei giorni feriali",
      "menu.d4": "densa e sostanziosa, da mangiare col cucchiaio",
      "menu.d5": "quando il banco del mercato le dà belle",
      "menu.d6": "un altro classico del mezzogiorno",
      "menu.d7": "la teglia che sparisce per prima",
      "menu.d8": "al pomodoro, nei giorni in cui tocca a loro",
      "menu.g2": "I secondi",
      "menu.g2h": "e il rraù, soprattutto",
      "menu.d9": "il ragù napoletano della regina, dal 1968",
      "menu.d10": "un classico popolare, senza sconti",
      "menu.d11": "al ragù, morbide da tagliare col cucchiaio",
      "menu.d12": "l’abbinamento che a Napoli non si discute",
      "menu.d13": "impanata e dorata, tra le più nominate nelle recensioni",
      "menu.d14": "quando il mercato lo porta fresco",
      "menu.d15": "con pomodoro e olive nere",
      "menu.d16": "il fritto misto di pesciolini",
      "menu.d17": "dorate, da mangiare subito",
      "menu.g3": "I contorni",
      "menu.g3h": "dal mercato, ogni mattina",
      "menu.d18": "cotti piano, con amore: dicono le recensioni",
      "menu.d19": "come le fa la casa, in più modi",
      "menu.d20": "il contorno delle feste napoletane",
      "menu.d21": "quelle che il banco accanto aveva di meglio",
      "menu.note": "Nessun prezzo stampato: qui si sceglie guardando le teglie, e si paga alla cassa come si è sempre fatto.",
      "gal.c1": "Pasta e patate con provola",
      "gal.c1h": "il simbolo",
      "gal.c2": "La paranza del mercato",
      "gal.c2h": "appena fritta",
      "gal.c3": "Il mercato, la mattina",
      "gal.c3h": "da qui arriva tutto",
      "story.title": "Una pagina che dura dal 1968",
      "story.caption": "il menù si scrive ogni mattina",
      "story.e1t": "Anna comincia dal mercato",
      "story.e1p": "Anna Pappalardo apre la sua cucina per sfamare i commercianti del mercatino della Torretta e la gente di Mergellina: piatti di casa, prezzi onesti, la fila a mezzogiorno.",
      "story.e2y": "Il rraù",
      "story.e2t": "La regina del rraù",
      "story.e2p": "Il suo ragù diventa la firma della casa: la pagina Instagram della cucina la chiama ancora oggi “The Queen of Rraù since ’68”, la regina del ragù dal ’68.",
      "story.e3t": "La famiglia continua",
      "story.e3p": "Anna non c’è più dal 2017. La sua famiglia porta avanti la cucina allo stesso modo: stesso banco, stesso mercato, stesso menù scritto ogni mattina.",
      "story.e4y": "Oggi",
      "story.e4t": "La fila delle dodici",
      "story.e4p": "Chi lavora al mercato, chi scende dall’ufficio, chi arriva da lontano con una guida in mano: a mezzogiorno sono tutti nella stessa fila, davanti alle stesse teglie.",
      "voci.title": "Come mangiare a casa della nonna",
      "voci.q1": "“È come venire a mangiare nella cucina di tua nonna, a Napoli: sapori di casa, niente sapori forti, e potresti tornarci ogni giorno.”",
      "voci.q2": "“Vai, e basta. È il sud vero, quello dei napoletani: difficile da trovare, ed è così che capisci che è buono.”",
      "voci.q3": "“Le verdure sono straordinarie. La foto non rende: è la cosa più vicina alla cucina di casa che troverai da queste parti.”",
      "voci.note": "Sintesi dalle recensioni Google e TripAdvisor della casa.",
      "visita.title": "Ci trovi dentro il mercato",
      "visita.where": "Dove",
      "visita.addr": "Interno Mercato della Torretta · 80122 Napoli",
      "visita.hint": "Entra nel mercato coperto della Torretta, a Mergellina: la cucina è dentro, tra i banchi. Segui il profumo di ragù.",
      "visita.dir": "Indicazioni stradali",
      "visita.when": "Quando",
      "visita.days": "Lunedì - Sabato",
      "visita.sun": "Domenica",
      "visita.closed": "Chiuso",
      "visita.note": "Orari secondo il profilo Google della casa; alcune guide indicano la chiusura alle 15:00. I piatti finiscono presto: arriva all’apertura, o chiama per conferma.",
      "visita.call": "Chiama",
      "visita.follow": "Seguici",
      "visita.followp": "Il menù del giorno, ogni mattina, è sulle pagine della casa:",
      "foot.line": "Via Ferdinando Galiani 30, interno Mercato della Torretta, 80122 Napoli · 081 1786 3673",
      "foot.demo": "Pagina dimostrativa non ufficiale, realizzata a scopo di presentazione. Fotografie illustrative generate; i fatti riportati provengono dai profili pubblici della casa.",
      "bar.call": "Chiama",
      "bar.menu": "Piatti",
      "bar.hours": "Orari",
      "bar.dir": "Indicazioni"
    },
    en: {
      "meta.title": "Cibi Cotti Nonna Anna: home cooking inside the Torretta Market, Naples",
      "brand.sub": "Nonna Anna · since 1968",
      "nav.banco": "The counter",
      "nav.piatti": "The dishes",
      "nav.storia": "The story",
      "nav.visita": "Visit",
      "hero.eyebrow": "Torretta Market, Naples · since 1968",
      "hero.title1": "Nonna Anna’s",
      "hero.title2": "home cooking,",
      "hero.title3": "inside the market.",
      "hero.note": "lunch only, and the dishes run out fast!",
      "hero.sub": "A hot counter hidden among the stalls of the covered market: every morning they cook whatever the market gives, and by noon the queue is already at the counter.",
      "hero.cta1": "Call the kitchen",
      "hero.cta2": "See the dishes",
      "hero.rating": "over 840 reviews on Google",
      "hero.hours": "Mon-Sat 12:00-15:30 · Sunday closed",
      "hero.caption": "the queen’s rraù (ragù)",
      "hero.stamp": "since ’68",
      "ritual.title": "How it works, as always",
      "ritual.s1t": "Arrive at opening",
      "ritual.s1p": "It opens at noon and serves lunch only. The trays are full at 12: by half past one, the best dishes are already gone.",
      "ritual.s2t": "Choose by looking at the trays",
      "ritual.s2p": "No printed menu: the day’s dishes are right there behind the glass. You look, you point, and your plate arrives steaming.",
      "ritual.s3t": "Eat like at home",
      "ritual.s3p": "A few tables, close together: market traders, neighbours, and whoever got the right tip. Takeaway, too.",
      "ritual.note": "The day’s menu (about ten first courses and as many seconds) is written every morning on the house’s Facebook page:",
      "ritual.fb": "see today’s menu",
      "band.caption": "the counter, at twelve sharp",
      "menu.title": "The dishes that come back",
      "menu.lede": "There is no fixed menu: cooking happens in the morning, with whatever the market gives. These are the dishes that come back most often: the home recipes the queue asks for by name.",
      "menu.g1": "First courses",
      "menu.g1h": "about ten a day",
      "menu.d1": "with provola cheese, the house’s signature dish",
      "menu.d2": "creamy, the way Naples makes it",
      "menu.d3": "the good weekday soup",
      "menu.d4": "thick and hearty, eaten with a spoon",
      "menu.d5": "when the market stall has them at their best",
      "menu.d6": "another midday classic",
      "menu.d7": "the tray that disappears first",
      "menu.d8": "with tomato, on the days it is their turn",
      "menu.g2": "Second courses",
      "menu.g2h": "and the rraù, above all",
      "menu.d9": "the queen’s Neapolitan ragù, since 1968",
      "menu.d10": "a popular classic, no shortcuts",
      "menu.d11": "in ragù, tender enough to cut with a spoon",
      "menu.d12": "the pairing nobody in Naples argues with",
      "menu.d13": "breaded and golden, among the most named in reviews",
      "menu.d14": "when the market brings it in fresh",
      "menu.d15": "with tomato and black olives",
      "menu.d16": "the mixed fry of little fish",
      "menu.d17": "golden, to be eaten at once",
      "menu.g3": "Side dishes",
      "menu.g3h": "from the market, every morning",
      "menu.d18": "cooked slowly, with love: so the reviews say",
      "menu.d19": "the house’s way, in more than one version",
      "menu.d20": "the Neapolitan celebration side",
      "menu.d21": "whatever the next stall had best that day",
      "menu.note": "No printed prices: here you choose by looking at the trays, and pay at the till, as it has always been done.",
      "gal.c1": "Pasta e patate con provola",
      "gal.c1h": "the signature",
      "gal.c2": "The market paranza",
      "gal.c2h": "just fried",
      "gal.c3": "The market, in the morning",
      "gal.c3h": "everything starts here",
      "story.title": "A page that has lasted since 1968",
      "story.caption": "the menu is written every morning",
      "story.e1t": "Anna starts at the market",
      "story.e1p": "Anna Pappalardo opens her kitchen to feed the traders of the little Torretta market and the people of Mergellina: home dishes, honest prices, a queue at noon.",
      "story.e2y": "The rraù",
      "story.e2t": "The queen of rraù",
      "story.e2p": "Her ragù becomes the house signature: the kitchen’s Instagram page still calls her “The Queen of Rraù since ’68”.",
      "story.e3t": "The family carries on",
      "story.e3p": "Anna passed away in 2017. Her family runs the kitchen the same way: same counter, same market, same menu written every morning.",
      "story.e4y": "Today",
      "story.e4t": "The noon queue",
      "story.e4p": "Market workers, office staff on their break, travellers arriving with a guidebook in hand: at noon they are all in the same queue, in front of the same trays.",
      "voci.title": "Like eating at your nonna’s",
      "voci.q1": "“It is like coming to eat in your grandma’s kitchen in Naples: home flavours, nothing overpowering, and you could come back every day.”",
      "voci.q2": "“Just go. It is the real south, the locals’ Naples: hard to find, and that is how you know it is good.”",
      "voci.q3": "“The vegetables are outstanding. The photo does not do it justice: it is the closest thing to home cooking you will find around here.”",
      "voci.note": "Summarised from the house’s Google and TripAdvisor reviews.",
      "visita.title": "Find us inside the market",
      "visita.where": "Where",
      "visita.addr": "Inside the Torretta Market · 80122 Naples",
      "visita.hint": "Walk into the covered Torretta market in Mergellina: the kitchen is inside, among the stalls. Follow the smell of ragù.",
      "visita.dir": "Get directions",
      "visita.when": "When",
      "visita.days": "Monday - Saturday",
      "visita.sun": "Sunday",
      "visita.closed": "Closed",
      "visita.note": "Hours per the house’s Google profile; some guides list closing at 15:00. Dishes run out early: arrive at opening, or call to confirm.",
      "visita.call": "Call",
      "visita.follow": "Follow",
      "visita.followp": "The day’s menu, every morning, is on the house’s pages:",
      "foot.line": "Via Ferdinando Galiani 30, inside the Torretta Market, 80122 Naples · 081 1786 3673",
      "foot.demo": "Unofficial concept demo page, made for presentation purposes. Illustrative photographs are generated; the facts shown come from the house’s public profiles.",
      "bar.call": "Call",
      "bar.menu": "Dishes",
      "bar.hours": "Hours",
      "bar.dir": "Directions"
    }
  };

  var KEY = "nonna-lang";
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));

  function apply(lang) {
    var dict = I18N[lang] || I18N.it;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  var saved = "it";
  try { saved = localStorage.getItem(KEY) || "it"; } catch (e) {}
  if (saved !== "it") apply(saved);

  /* ---------- reveals ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rvEls = document.querySelectorAll(".rv");
  if (reduced || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(rvEls, function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    Array.prototype.forEach.call(rvEls, function (el) { io.observe(el); });
  }

  /* ---------- depth engine (transform/opacity only) ---------- */
  if (reduced) return;
  var planes = Array.prototype.slice.call(document.querySelectorAll(".hero-scene .plane"));
  var plx = Array.prototype.slice.call(document.querySelectorAll("[data-plx]"));
  if (!planes.length && !plx.length) return;

  var fine = window.matchMedia("(pointer: fine)").matches;
  var hero = document.querySelector(".hero");
  var tx = 0, ty = 0, cx = 0, cy = 0; // pointer targets / current
  var state = planes.map(function () { return { x: 0, y: 0 }; });

  if (fine && hero) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    }, { passive: true });
    hero.addEventListener("pointerleave", function () { tx = 0; ty = 0; }, { passive: true });
  }

  function frame() {
    cx += (tx - cx) * 0.07;
    cy += (ty - cy) * 0.07;
    var sy = window.scrollY || 0;
    planes.forEach(function (el, i) {
      var depth = parseFloat(el.getAttribute("data-depth") || "0");
      var rot = parseFloat(el.getAttribute("data-rot") || "0");
      var gx = cx * depth * 0.9;
      var gy = cy * depth * 0.9 - Math.min(sy, 700) * depth * 0.012;
      var s = state[i];
      s.x += (gx - s.x) * 0.09;
      s.y += (gy - s.y) * 0.09;
      var z = el.classList.contains("stamp") ? " translateZ(42px)" : "";
      el.style.transform = "translate3d(" + s.x.toFixed(2) + "px," + s.y.toFixed(2) + "px,0)" + z + " rotate(" + rot + "deg)";
    });
    var vh = window.innerHeight;
    plx.forEach(function (img) {
      var r = img.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var off = (r.top + r.height / 2 - vh / 2) * -0.055;
      off = Math.max(-26, Math.min(26, off));
      img.style.transform = "scale(1.14) translateY(" + off.toFixed(2) + "px)";
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

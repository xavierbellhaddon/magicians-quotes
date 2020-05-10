const quotes = [
  {
    character: "Margo",
    episode: "Divine Elimination (S02E03)",
    quote: "Sweetie? You kind of sound insane."
  },
  {
    character: "Margo",
    episode: "Divine Elimination (S02E03)",
    quote: "You <i>shot</i> me, you cock!"
  },
  {
    character: "Margo",
    episode: "The Flying Forest (S02E04)",
    quote: "You know who loves paying taxes? People with broken legs."
  },{
    character: "Margo",
    episode: "The Cock Barrens (S02E05)",
    quote: "Did he just call me a <i>virgin</i>?!"
  },{
    character: "Margo",
    episode: "The Cock Barrens (S02E05)",
    quote: "I'm stayin' a virgin."
  },
  {
    character: "Margo",
    episode: "The Cock Barrens (S02E05)",
    quote: "You fucked with us. You fucked with our castle. And now we're gonna shove our Jimmy Choos <i>so far up your ass</i>, you're gonna taste next season."
  },
  {
    character: "Margo",
    episode: "The Girl Who Told Time (S02E010)",
    quote: "Those grapes died so you might live. Because if you keep drinking, I will seriously cut a bitch."
  },
  {
    character: "Margo",
    episode: "The Girl Who Told Time (S02E010)",
    quote: "I need a free moment to rub one out in a hot bath before I fucking <i>kill</i> someone."
  },
  {
    character: "Margo",
    episode: "The Tales of the Seven Keys (S03E01)",
    quote: "How do we Lizzie Borden the <i>shit</i> outta this thing? 'Cause I am about ready to go <i>full</i> '07 Britney."
  },
  {
    character: "Margo",
    episode: "The Losses of Magic (S03E03)",
    quote: "I'm here to motherfuckin' par<i>ley</i>, Miss King."
  },
  {
    character: "Margo",
    episode: "Be the Penny (S03E04)",
    quote: "Benedict, you're gonna round up the guards. Tick, you're gonna go to that fairy-repellant hallway, and you're gonna grind one of those bricks to dust. You're gonna put it in the Fairy Queen's bath... and when that knocks her on <i>her</i> ass... I'm gonna cut out her heart and eat it in front of every goddamn fairy asshole in the <i>kingdom</i>."
  },
  {
    character: "Margo",
    episode: "Poached Eggs (S03E07)",
    quote: "Those fairy bitches wanna come for my crown; well... I'll shove it up their fuckin' eggholes."
  },
  {
    character: "Margo",
    episode: "Twenty-Three (S03E11)",
    quote: "Uh-uh. You know what? <i>Fuck</i> Tinker Bitch. Fuck her right in the Egg McMuffin."
  },
  {
    character: "Margo",
    episode: "The Fillorian Candidate (S03E12)",
    quote: "<i>Bestiality</i>?!"
  },
  {
    character: "Margo",
    episode: "The Fillorian Candidate (S03E12)",
    quote: "You really love that sloth, don't you?"
  },
  {
    character: "Margo",
    episode: "Will You Play with Me? (S03E13)",
    quote: "I'm gonna cut the bitch, grab her fairy coke power-up, and fix this."
  },
  {
    character: "Margo",
    episode: "Lost, Found, Fucked (S04E02)",
    quote: "You and my birth box ain't happening, so back up, <i>Shape of Water</i>!"
  },
  {
    character: "Margo",
    episode: "Marry Fuck Kill (S04E04)",
    quote: "Christ on a <i>goddamn communion wafer</i>."
  },
  {
    character: "Margo",
    episode: "Escape From the Happy Place (S04E05)",
    quote: "Well, what's my birthright, ya scaly <i>shit</i>?"
  },
  {
    character: "Margo",
    episode: "Escape From the Happy Place (S04E05)",
    quote:
      "Welp. Shit. All right, Fen. I think I will do a ritual. Earth specialty; the Sleep of Solitude. I pop an Ambien, everyone leaves me alone till noon. That'll be perfect."
  },
  {
    character: "Margo",
    episode: "Escape From the Happy Place (S04E05)",
    quote:
      "And somebody has to rule this kingdom, and I will be god<i>damned</i> if I drop the ball 'cause I was too busy lamenting with my tits out."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "Get a ship to Cockswallow."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "Are you saying she's a bitch? Good thing I'm not one at all, then."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote:
      "I'm gonna fire-bomb the shit out of her floating patch of dirt and take her beets. Bada-bing, bada-fuck-her."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote:
      "I got elected because I listened to a drunk bear talk about his fee-fees."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "I hear Codswall has upstanding alpacas."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "The indignity is <i>real</i>."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "I just <i>care</i>. So damn <i>much</i>."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "I'm about to skin a bitch."
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "You're gonne gimme those beets, and I'm not gonna skin and eat any of your tasty alpaca children. Capisce?"
  },
  {
    character: "Margo",
    episode: "A Timeline and Place (S04E06)",
    quote: "Now, I may be a cunt, but I am real."
  },
  {
    character: "Margo",
    episode: "The Side Effect (S04E07)",
    quote: "The <i>fuuuck</i>?!"
  },
  {
    character: "Margo",
    episode: "The Side Effect (S04E07)",
    quote: "B-minus. <i>Unless</i>... you tell us where this <i>green</i> bitch went."
  },
  {
    character: "Margo",
    episode: "Home Improvement (S04E08)",
    quote: "<i>Jesus: Based on the Novel 'Christ' by Sapphire</i>!"
  },
  {
    character: "Margo",
    episode: "Cello Squirrel Daffodil (S05E09)",
    quote:
      "I'm going back to double-tap the motherfucker like he's Osama and I'm SEAL Team Bitch."
  },
  {
    character: "Margo",
    episode: "Purgatory (S05E10)",
    quote: "Voldemort's <i>clit</i>!"
  },
  {
    character: "Margo",
    episode: "Purgatory (S05E10)",
    quote: "This is spank bank material."
  }
];

const quoteBox = document.querySelector(".quote-box");
let quote;

function getQuote() {
  quoteObject = Math.floor(Math.random() * quotes.length);
  quote = quotes[quoteObject].quote 
  quoteBox.innerHTML = '"' + quote + '"';
}

document.querySelector("button").addEventListener("click", function () {
  getQuote();
});

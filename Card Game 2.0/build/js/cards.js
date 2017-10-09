/* ===== All in-game cards ===== */
var cards = {
  /* Goblins */
  goblinranger: {
    text: "<p><span class='highlight'>On play:</span> deal 1 damage to a minion</p>",
    name: "Goblin Ranger",
    mana: 1,
    attack: 1,
    brute: 2,
    health: 3,
    race: "Goblin"
  },
  warmonger: {
    text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain +2 Health</p>",
    name: "Warmonger",
    mana: 2,
    attack: 3,
    brute: 6,
    health: 1,
    race: "Goblin"
  },
  goblintwins: {
    text: "<p><span class='highlight'>On play:</span> Summon another 2/3/2 Goblin on the battlefield</p>",
    name: "Goblin Twins",
    mana: 3,
    attack: 2,
    brute: 3,
    health: 2,
    race: "Goblin"
  },
  cultmage: {
    text: "<p><span class='highlight'>On play:</span> Deal 3 damage to a character</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent and gain Spelldamage +2</p>",
    name: "Cult Mage",
    mana: 4,
    attack: 1,
    brute: 2,
    health: 6,
    race: "Goblin"
  },
  sewerassassin: {
    text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other Goblins on the board assassinate an enemy minion</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent</p>",
    name: "Sewer Assassin",
    mana: 5,
    attack: 4,
    brute: 5,
    health: 3,
    race: "Goblin"
  },
  goblincharger: {
    text: "<p><span class='highlight'>Charge</span></p><p>At the end of your turn gain +1/+2/0</p>",
    name: "Goblin Charger",
    mana: 6,
    attack: 5,
    brute: 7,
    health: 3,
    race: "Goblin"
  },
  crookedservant: {
    text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this kills an enemy restore 4 health to your hero</p>",
    name: "Crooked Servant",
    mana: 7,
    attack: 7,
    brute: 10,
    health: 3,
    race: "Goblin"
  },
  dirtymage: {
    text: "<p>At the end of your turn deal 4 damage to the opponent</p><p><span class='highlight'>On death:</span> Explode and deal 2 damage to all minions</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>",
    name: "Dirty Mage",
    mana: 8,
    attack: 2,
    brute: 4,
    health: 10,
    race: "Goblin"
  },
  giant: {
    text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other goblins on the board gain Taunt</p>",
    name: "Giant",
    mana: 9,
    attack: 9,
    brute: 12,
    health: 9,
    race: "Goblin"
  },
  goblinprince: {
    text: "<p><span class='highlight'>On play:</span> All other goblins restore their health</p><p><span class='highlight'>On play:</span> Gain +1/0/0 for each damaged enemy minion</p><p><span class='highlight'>Passive:</span> Your Goblins gain +3/+3/+3</p>",
    name: "Goblin Prince",
    mana: 10,
    attack: 4,
    brute: 10,
    health: 4,
    race: "Goblin",
    legend: 1
  },
  kingnilbog: {
    text: "<p><span class='highlight'>On play:</span> The next minion you play is free</p><p><span class='highlight'>On death:</span> The next spell you cast is free</p>",
    name: "King Nilbog",
    mana: 10,
    attack: 4,
    brute: 4,
    health: 10,
    race: "Goblin",
    legend: 1
  },
  /* Beasts */
  thragtusk: {
    text: "<p><span class='highlight'>Charge</span></p>",
    name: "Thragtusk",
    mana: 1,
    attack: 2,
    brute: 3,
    health: 1,
    race: "Beast"
  },
  lionheartwarrior: {
    text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>",
    name: "Lionheart Warrior",
    mana: 2,
    attack: 2,
    brute: 2,
    health: 3,
    race: "Beast"
  },
  dodongo: {
    text: "<p>At the end of your turn deal 1 damage to all other minions who aren't beasts</p>",
    name: "Dodongo",
    mana: 3,
    attack: 3,
    brute: 3,
    health: 4,
    race: "Beast"
  },
  lycan: {
    text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain Charge</p>",
    name: "Lycan",
    mana: 4,
    attack: 5,
    brute: 2,
    health: 4,
    race: "Beast"
  },
  lurkingcreature: {
    text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy regain Stealth</p>",
    name: "Lurking Creature",
    mana: 5,
    attack: 6,
    brute: 4,
    health: 4,
    race: "Beast"
  },
  jazallionheart: {
    text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Restore 3 health to your hero</p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>",
    name: "Jazal Lionheart",
    mana: 6,
    attack: 4,
    brute: 3,
    health: 7,
    race: "Beast"
  },
  baloth: {
    text: "<p><span class='highlight'>Passive:</span> Gain 0/+1/0 for each damaged minion</p>",
    name: "Baloth",
    mana: 7,
    attack: 8,
    brute: 6,
    health: 7,
    race: "Beast"
  },
  titan: {
    text: "<p>At the start of your turn restore this minion's health to full</p>",
    name: "Titan",
    mana: 8,
    attack: 8,
    brute: 5,
    health: 10,
    race: "Beast"
  },
  mountayn: {
    text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Gain 0/0/+2 for each other beast on the board</p>",
    name: "Mountayn",
    mana: 9,
    attack: 4,
    brute: 4,
    health: 12,
    race: "Beast"
  },
  grommash: {
    text: "<p>At the end of your turn gain +1/+1/+1</p><p><span class='highlight'>Passive:</span> If this minion takes damage gain +2/+2/+2</p>",
    name: "Grommash",
    mana: 10,
    attack: 10,
    brute: 10,
    health: 10,
    race: "Beast",
    legend: 1
  },
  /* Demons */
  goathead: {
    text: "<p><span class='highlight'>On death:</span> Deal 3 damage to your hero</p>",
    name: "Goathead",
    mana: 1,
    attack: 2,
    brute: 2,
    health: 3,
    race: "Demon"
  },
  brutedemon: {
    text: "<p><span class='highlight'>Passive:</span> Whenever this minion takes damage deal 2 damage to your hero</p>",
    name: "Brute Demon",
    mana: 2,
    attack: 3,
    brute: 7,
    health: 3,
    race: "Demon"
  },
  fallenknight: {
    text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 1 damage to this minion and restore 1 health to your hero</p>",
    name: "Fallen Knight",
    mana: 3,
    attack: 1,
    brute: 1,
    health: 7,
    race: "Demon"
  },
  hellequin: {
    text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>On play:</span> Gain +2/+2/+2 for each card played this turn</p><p><span class='highlight'>On death:</span> Deal damage equal to this minion's attack to all non-Demon minions</p>",
    name: "Hellequin",
    mana: 4,
    attack: 0,
    brute: 0,
    health: 1,
    race: "Demon"
  },
  dusk: {
    text: "<p><span class='highlight'>Fury</span></p><p>At the end of your turn deal 1 damage to your other non-Demons minions",
    name: "Dusk",
    mana: 5,
    attack: 5,
    brute: 3,
    health: 5,
    race: "Demon"
  },
  fallen: {
    text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 3 damage to both players</p>",
    name: "Fallen",
    mana: 6,
    attack: 7,
    brute: 7,
    health: 6,
    race: "Demon"
  },
  inquisitor: {
    text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Spells cost health instead of mana</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>",
    name: "Inquisitor",
    mana: 7,
    attack: 8,
    brute: 2,
    health: 2,
    race: "Demon"
  },
  demonknight: {
    text: "<p><span class='highlight'>On play:</span> Deal 3 damage to all non-Demon minions</p><p><span class='highlight'>On death:</span> Deal 7 damage to your hero</p>",
    name: "Demon Knight",
    mana: 8,
    attack: 7,
    brute: 8,
    health: 7,
    race: "Demon"
  },
  bellakor: {
    text: "<p><span class='highlight'>On play:</span> Deal 5 damage to a minion, if it dies gain +3/+3/+3</p><p><span class='highlight'>On death:</span> Destroy all non-Demon minions on your board</p>",
    name: "Bel Lakor",
    mana: 9,
    attack: 6,
    brute: 6,
    health: 6,
    race: "Demon"
  },
  doom: {
    text: "<p><span class='highlight'>On death:</span> Destroy all minions, restore 1 health to your hero for each minion destroyed</p><p><span class='highlight'>Passive:</span> All your Demons gain +2/+2/+2</p>",
    name: "Doom",
    mana: 10,
    attack: 6,
    brute: 6,
    health: 6,
    race: "Demon",
    legend: 1
  },
  /* Druids */
  themire: {
    text: "<p><span class='highlight'>Taunt</span></p>",
    name: "The Mire",
    mana: 1,
    attack: 1,
    brute: 1,
    health: 4,
    race: "Druid"
  },
  youngmarshsnake: {
    text: "<p><span class='highlight'>Passive:</span> Destroy any minion that got damaged by this</p>",
    name: "Young Marsh Snake",
    mana: 2,
    attack: 1,
    brute: 1,
    health: 4,
    race: "Druid"
  },
  healingelf: {
    text: "<p><span class='highlight'>On play:</span> Restore 4 health to your hero</p><p><span class='highlight'>On death:</span> Restore 2 health to all friendly minions</p>",
    name: "Healing Elf",
    mana: 3,
    attack: 2,
    brute: 1,
    health: 4,
    race: "Druid"
  },
  vorstclaw: {
    text: "<p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy restore 5 health to your hero</p>",
    name: "Vorstclaw",
    mana: 4,
    attack: 4,
    brute: 1,
    health: 4,
    race: "Druid"
  },
  junglemage: {
    text: "<p><span class='highlight'>On death:</span> Give all Druid minions 0/0/+3</p><p>At the end of your turn restore 2 health to all friendly minions</p>",
    name: "Jungle Mage",
    mana: 5,
    attack: 2,
    brute: 2,
    health: 6,
    race: "Druid"
  },
  kurnou: {
    text: "<p><span class='highlight'>Charge</span></p><p><span class='highlight'>Passive:</span> All Druid minions gain charge</p>",
    name: "Kurnou",
    mana: 6,
    attack: 7,
    brute: 0,
    health: 5,
    race: "Druid"
  },
  voodoodoctor: {
    text: "<p><span class='highlight'>On play:</span> Add a Voodoo spell to your deck</p><p><span class='highlight'>Passive:</span> Whenever the opponent gets damaged restore 2 health to your hero</p>",
    name: "Voodoo Doctor",
    mana: 7,
    attack: 2,
    brute: 1,
    health: 8,
    race: "Druid"
  },
  treantprotector: {
    text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>Passive:</span> Whenever this minion takes damage restore 2 health to your hero</p>",
    name: "Treant Protector",
    mana: 8,
    attack: 6,
    brute: 3,
    health: 10,
    race: "Druid"
  },
  basilisk: {
    text: "<p><span class='highlight'>Passive:</span> Whenever a minion gets healed deal 2 damage to all enemy minions</p><p><span class='highlight'>On death:</span> Restore all minions to full health</p>",
    name: "Basilisk",
    mana: 9,
    attack: 8,
    brute: 9,
    health: 8,
    race: "Druid"
  },
  colosuss: {
    text: "<p><span class='highlight'>On play:</span> Restore health of all friendly minions</p><p><span class='highlight'>Passive:</span> Your hero is immune to damage</p>",
    name: "Colosuss",
    mana: 10,
    attack: 12,
    brute: 0,
    health: 12,
    race: "Druid",
    legend: 1
  },
  /*Spells */
  invasion: {
    text: "<p><span class='highlight'>Effect:</span> Fill your entire board with 2/3/2 Goblins</p>",
    name: "Invasion",
    mana: 7,
    race: "Spell"
  },
  silentdeath: {
    text: "<p><span class='highlight'>Target:</span> Enemy minion</p><p><span class='highlight'>Effect:</span> Destroy an enemy minion</p>",
    name: "Silent Death",
    mana: 5,
    race: "Spell"
  },
  voodoo: {
    text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> Whenever this minion loses health deal that much back to the opponent</p>",
    name: "Voodoo",
    mana: 3,
    race: "Spell"
  },
  playingwithfire: {
    text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> If at the start of your next turn the friendly minion still lives deal 5 damage to all enemy minions. If this is not the case deal 5 damage to all of your own minions</p>",
    name: "Playing With Fire",
    mana: 6,
    race: "Spell"
  },
  manacrystal: {
    text: "<p><span class='highlight'>Effect:</span> Gain 1 extra Mana crystal this turn</p>",
    name: "Mana Crystal",
    mana: 0,
    race: "Spell"
  }
};

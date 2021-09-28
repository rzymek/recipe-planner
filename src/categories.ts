const categories: { [category: string]: string[] } = {
  nabiał: [
    'smietana UHT 18%',
    'ser żółty (krojony)',
    "mleko",
    "jajka",
  ],
  mięso: [
    'mięso mielone wołowe',
    'pierś kurczaka',
    'kiełbasa ~15cm',
    "sucha krakowka",
    "żeberka wędzone",
    "mięso na gulasz",
    "kabanosy chili",
    "karkówka",
    "wędzony boczek",
    "polędwiczki wieprzowe",
    "żeberka surowe",
  ],
  warzywa: [
    'marchew',
    'ziemniaki myte',
    'kapusty (główka)',
    'cebula',
    'pieczarki',
    'natka pietruszki',
    'pomidory',
    "ziemniaki",
    "czerwona papryka",
    "suchego grochu łuskanego (połówki)",
    "kapusta kiszona",
  ],
  pieczywo: [
    'bułka kajzerka',
    'podłużne bułki do currywurst',
    "chleb biały krojony",
    "tortilla",
  ],
  przetwory: [
    'ketchup ostry',
    'jalapenos',
    'ogórki konserwowe',
    'cebulka prażona',
    'olej rzepakowy',
    'makaron tagliatelle',
    "kasza gryczana",
    "makaron spagetti",
    "chocopuffs/cini minis",
    "pomidory krojone puszka / przecier pomidorowy",
    "rum do grogu",
    "czekolada gożka",
    "czerwona fasola puszka",
    "kukurydza puszka",
    "suszone śliwki",
    "zakwasu żytniego do żurku",
    "żurawina",
    "mąka",
    "kawa",
  ],
  akcesoria: [
    "mokre chustki",
    "papier toaletowy",
    "płyn do mycia naczyń",
    "worki na śmieci",
  ],
  przyprawy: [
    'curry/kurkuma',
    'czosnek granulowany',
    'zioła prowansalskie',
    "sól",
    "cukier",
    "czosnek granulowany/płatki",
    "goździki",
    "majeranek",
    "ziarna jałowca",
    "chilli",
    "oregano",
    "pieprz",
    "proszek do pieczenia",
  ],
  leki: [
    "apap/ibuprom",
    "helsi / Porost Islandzki / isla",
    "reni",
  ]
}
export function category(item: string): string | undefined {
  for (let categoriesKey in categories) {
    if (categories[categoriesKey].includes(item)) {
      return categoriesKey;
    }
  }
}

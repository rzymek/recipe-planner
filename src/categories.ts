const categories: { [category: string]: string[] } = {
  nabiał: [
    'smietana UHT 18%',
    'ser żółty (krojony)',
  ],
  mięso: [
    'mięso mielone wołowe',
    'pierś kurczaka',
    'kiełbasa ~15cm',
  ],
  warzywa: [
    'marchew',
    'ziemniaki myte',
    'kapusty (główka)',
    'cebula',
    'pieczarki',
    'natka pietruszki',
    'pomidory',
  ],
  pieczywo: [
    'bułka kajzerka',
    'podłużne bułki do currywurst',
  ],
  przetwory: [
    'ketchup ostry',
    'jalapenos',
    'ogórki konserwowe',
    'cebulka prażona',
    'olej rzepakowy',
    'makaron tagliatelle',
  ],
  przyprawy: [
    'curry/kurkuma',
    'czosnek granulowany',
    'zioła prowansalskie',
  ]
}

export function category(item: string): string | undefined {
  for (let categoriesKey in categories) {
    if (categories[categoriesKey].includes(item)) {
      return categoriesKey;
    }
  }
}

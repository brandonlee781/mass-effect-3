export interface Planet {
  id: string
  name: string
  location: number
}

export interface WarAsset {
  id: string
  location: string
  asset: string
  link?: string | null
}

export interface System {
  id: string
  name: string
  link?: string
  assets: WarAsset[]
  locations: Planet[]
  relay: Boolean
  depot: Boolean
}

export interface SearchAndRescue {
  id: string
  name: string
  link?: string
  requirement?: string | null
  systems: System[]
}

const searchAndRescues: SearchAndRescue[] = [
  {
    id: 'ckq18pm66000prkva1nee97j1',
    link: '/wiki/Aethon_Cluster',
    name: 'Aethon Cluster',
    systems: [
      {
        id: 'ckq18pm66000qrkva63avd57m',
        link: '/wiki/Aru',
        name: 'Aru',
        assets: [
          {
            id: 'ckq18pm66000rrkva0hum0qc2',
            location: 'Irune',
            asset: 'Artifact: Book of Plenix',
            link: '/wiki/Irune:_Book_of_Plenix',
          },
          {
            id: 'ckq18pm67000urkva5og49ffk',
            location: 'West of Irune, north-west of asteroid belt',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm67000xrkva4rz9gu8d',
            location: 'Cherk Sab',
            asset: 'Volus Fabrication Units',
            link: '/wiki/Volus',
          },
        ],
        locations: [
          {
            id: 'ckq18pmf000cdrkvab8qqfupg',
            name: 'Cherk Sab',
            location: 1,
          },
          {
            id: 'ckq18pmf000cerkvablln2goc',
            name: 'Doldit',
            location: 2,
          },
          {
            id: 'ckq18pmf000cfrkva8ezl15s1',
            name: 'Irune',
            location: 3,
          },
          {
            id: 'ckq18pmf000cgrkva5wlsea1l',
            name: 'Jak Ser',
            location: 4,
          },
          {
            id: 'ckq18pmf000chrkva5u7rdrla',
            name: 'Locil',
            location: 5,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm67000zrkva1iht2ag3',
        link: '/wiki/Esori',
        name: 'Esori',
        assets: [
          {
            id: 'ckq18pm670010rkva5nmpbrla',
            location: 'Solu Paolis',
            asset: 'Volus Dreadnought Kwunu',
            link: '/wiki/War_Assets/Alien#Volus_Dreadnought_Kwunu',
          },
          {
            id: 'ckq18pm680013rkva8dwc40i0',
            location: 'East-south-east of star, between 3rd and 4th ring',
            asset: 'Wreckage - 300 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pmie00cirkvafdopbhj7',
            name: 'Atos Irn',
            location: 1,
          },
          {
            id: 'ckq18pmie00cjrkva55er27pb',
            name: 'Kailo',
            location: 2,
          },
          {
            id: 'ckq18pmie00ckrkvab98h1pn7',
            name: 'Mola',
            location: 3,
          },
          {
            id: 'ckq18pmie00clrkva72bz9hrs',
            name: 'Solu Paolis',
            location: 4,
          },
          {
            id: 'ckq18pmie00cmrkvaajxx4en2',
            name: 'Yan Tao',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm680015rkva4i071wny',
        link: '/wiki/Nura',
        name: 'Nura',
        assets: [
          {
            id: 'ckq18pm680016rkvaeynv49ri',
            location: 'Oma Ker',
            asset: 'Intel: Volus Intelligence Archives',
            link: '/wiki/Intel_Terminal#Volus_Intelligence_Archives',
          },
          {
            id: 'ckq18pm680019rkva0od1fwzv',
            location: 'Northeast of Star, before 3rd ring',
            asset: 'Wreckage - 250 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pmm100cnrkva55kv82ws',
            name: 'Gorgun',
            location: 1,
          },
          {
            id: 'ckq18pmm100corkva3n4a7ckj',
            name: 'Lahu',
            location: 2,
          },
          {
            id: 'ckq18pmm100cprkva0bt86e5b',
            name: 'Oma Ker',
            location: 3,
          },
          {
            id: 'ckq18pmm100cqrkvah4jt3atp',
            name: 'Welm Urun',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm68001brkvahnu171uc',
        link: '/wiki/Satu_Arrd',
        name: 'Satu Arrd',
        assets: [
          {
            id: 'ckq18pm68001crkvagn82htd3',
            location: 'Nalisin',
            asset: 'Volus Engineering Team',
            link: '/wiki/War_Assets/Crucible#Volus_Engineering_Team',
          },
          {
            id: 'ckq18pm68001frkva0d1ydnqp',
            location: 'West-southwest of star, near 3rd ring',
            asset: 'Wreckage - 200 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0007rkvad34c5hmw',
  },
  {
    id: 'ckq18pm69001grkvaeil3bk7p',
    link: '/wiki/Apien_Crest',
    name: 'Apien Crest',
    systems: [
      {
        id: 'ckq18pm69001hrkvacxav7v0m',
        link: '/wiki/Castellus',
        name: 'Castellus',
        assets: [
          {
            id: 'ckq18pm69001irkva5inr82ta',
            location: 'South of Fiax, East of Nios',
            asset: 'Wreckage - 350 fuel',
          },
          {
            id: 'ckq18pm69001lrkvagvk454wf',
            location: 'Digeris',
            asset: 'Artifact: Banner of the 1st Regiment',
            link: '/wiki/Apien_Crest:_Banner_of_the_First_Regiment',
          },
        ],
        locations: [
          {
            id: 'ckq18pmxi00crrkva7qgw9az4',
            name: 'Carborix',
            location: 1,
          },
          {
            id: 'ckq18pmxi00csrkva7d7c6wxo',
            name: 'Nios',
            location: 2,
          },
          {
            id: 'ckq18pmxi00ctrkvaccru1kpe',
            name: 'Digeris',
            location: 3,
          },
          {
            id: 'ckq18pmxi00curkvachav62ob',
            name: 'Fiax',
            location: 4,
          },
          {
            id: 'ckq18pmxi00cvrkva1xcx3j3q',
            name: 'Iritum',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm69001nrkva1iqt4pkl',
        link: '/wiki/Gemmae',
        name: 'Gemmae',
        assets: [
          {
            id: 'ckq18pm69001orkvaewlre6eq',
            location: 'Pheiros',
            asset: 'Turian 79th Flotilla',
            link: '/wiki/War_Assets/Turian#Turian_79th_Flotilla',
          },
          {
            id: 'ckq18pm69001rrkva8z9ibpgm',
            location: 'South of Pheiros',
            asset: 'Wreckage - 800 fuel',
          },
          {
            id: 'ckq18pm69001urkva1urd6acc',
            location: 'West of Pheiros',
            asset: 'Wreckage - 750 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
    ],
    requirement: null,
  },
  {
    id: 'ckq18pm69001vrkva1u7p5yxn',
    link: '/wiki/Arcturus_Stream',
    name: 'Arcturus Stream',
    systems: [
      {
        id: 'ckq18pm6a001wrkvahlqie9is',
        link: '/wiki/Arcturus',
        name: 'Arcturus',
        assets: [
          {
            id: 'ckq18pm6a001xrkvah7roawbd',
            location: 'Arcturus Station',
            asset: 'Intel: Intel from Battle of Arcturus',
            link: '/wiki/Intel_Terminal#Intel_from_the_Battle_of_Arcturus',
          },
          {
            id: 'ckq18pm6a0020rkva7qs97mzn',
            location: 'West of Themis',
            asset: 'Wreckage - 350 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pn7p00cwrkvabqu91zip',
            name: 'Alcyoneus',
            location: 1,
          },
          {
            id: 'ckq18pn7p00cxrkva7moz9d3v',
            name: 'Arcturus Station',
            location: 2,
          },
          {
            id: 'ckq18pn7p00cyrkvagndv9pjo',
            name: 'Eirene',
            location: 3,
          },
          {
            id: 'ckq18pn7p00czrkva93s9f7v8',
            name: 'Eunomia',
            location: 4,
          },
          {
            id: 'ckq18pn7p00d0rkvabgym3iik',
            name: 'Themis',
            location: 5,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6a0022rkva5pjndhum',
        link: '/wiki/Euler',
        name: 'Euler',
        assets: [
          {
            id: 'ckq18pm6a0023rkva3k3a9phn',
            location: 'Southwest of Yukawa',
            asset: 'Wreckage - 100 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pnax00d1rkva5g01cilr',
            name: 'Benning',
            location: 1,
          },
          {
            id: 'ckq18pnax00d2rkvaf2i7d4n7',
            name: 'Fermi',
            location: 2,
          },
          {
            id: 'ckq18pnax00d3rkvaa5v8e926',
            name: 'Silva',
            location: 3,
          },
          {
            id: 'ckq18pnax00d4rkva62ji0p56',
            name: 'Yukawa',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0005rkva4okr8tqy',
  },
  {
    id: 'ckq18pm6a0024rkvaaadt399t',
    link: '/wiki/Argos_Rho',
    name: 'Argos Rho',
    systems: [
      {
        id: 'ckq18pm6a0025rkva05l7alg6',
        link: '/wiki/Gorgon',
        name: 'Gorgon',
        assets: [
          {
            id: 'ckq18pm6a0026rkvab0n4bt39',
            location: 'Camaron',
            asset: 'Advanced Power Relays',
            link: '/wiki/War_Assets/Crucible#Advanced_Power_Relays',
          },
        ],
        locations: [
          {
            id: 'ckq18pnhp00d5rkva7v303hox',
            name: 'Camaron',
            location: 1,
          },
          {
            id: 'ckq18pnhp00d6rkva21todtul',
            name: 'Sharblu',
            location: 2,
          },
          {
            id: 'ckq18pnhq00d7rkva1s2x2p1r',
            name: 'Slekon',
            location: 3,
          },
          {
            id: 'ckq18pnhq00d8rkvaca59chra',
            name: 'Unidentified Space Facility',
            location: 4,
          },
          {
            id: 'ckq18pnhq00d9rkva6gc31on4',
            name: 'Vectra',
            location: 5,
          },
          {
            id: 'ckq18pnhq00darkva5jxc46jj',
            name: 'Wuo',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6a0028rkvaengh9xd8',
        link: '/wiki/Hydra',
        name: 'Hydra',
        assets: [
          {
            id: 'ckq18pm6a0029rkva64i936gk',
            location: 'South of Star, 2nd ring',
            asset: 'Wreckage - 270 fuel',
          },
          {
            id: 'ckq18pm6b002crkva8hty98fw',
            location: 'Canrum',
            asset: 'Haptic Optics Array',
            link: '/wiki/War_Assets/Crucible#Haptic_Optics_Array',
          },
        ],
        locations: [
          {
            id: 'ckq18pnl200dbrkvadw5gb0mo',
            name: 'Canrum',
            location: 1,
          },
          {
            id: 'ckq18pnl200dcrkva8kcubrqb',
            name: 'Metgos',
            location: 2,
          },
          {
            id: 'ckq18pnl200ddrkvaa6sxczq0',
            name: 'Syba',
            location: 3,
          },
          {
            id: 'ckq18pnl200derkva92rx22v7',
            name: 'Theyar',
            location: 4,
          },
          {
            id: 'ckq18pnl200dfrkva14bm348c',
            name: 'Varmalus',
            location: 5,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6b002erkva67fwhhgv',
        link: '/wiki/Phoenix',
        name: 'Phoenix',
        assets: [
          {
            id: 'ckq18pm6b002frkvagvnp2bi6',
            location: 'Pinnacle Station',
            asset: 'Turian Spec Ops Team',
            link: '/wiki/Turian',
          },
          {
            id: 'ckq18pm6b002irkvah1zqcn11',
            location: "Intai'sei",
            asset: 'Artifact: Fossilized Kakliosaur',
            link: '/wiki/Citadel:_Kakliosaur_Fossil',
          },
          {
            id: 'ckq18pm6b002lrkvacdsvgqzc',
            location: "East-north-east of Intai'sei",
            asset: 'Wreckage - 450 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pnoe00dgrkvacua5dfpi',
            name: 'Carbonaceous Asteroid',
            location: 1,
          },
          {
            id: 'ckq18pnoe00dhrkva51occ38h',
            name: "Intai'sei",
            location: 2,
          },
          {
            id: 'ckq18pnoe00dirkvabpce6ox2',
            name: 'Mass Effect',
            location: 3,
          },
          {
            id: 'ckq18pnoe00djrkva2ec07qh6',
            name: 'Mass Effect 3',
            location: 4,
          },
          {
            id: 'ckq18pnoe00dkrkva4x479eky',
            name: 'Patashi',
            location: 5,
          },
          {
            id: 'ckq18pnoe00dlrkva0rhqc58e',
            name: 'Pinnacle Station',
            location: 6,
          },
          {
            id: 'ckq18pnoe00dmrkva5z1q1b10',
            name: 'Sylsalto',
            location: 7,
          },
          {
            id: 'ckq18pnoe00dnrkva6hylguz8',
            name: 'Tuntau',
            location: 8,
          },
          {
            id: 'ckq18pnoe00dorkva30bp8fgw',
            name: 'Vebinok',
            location: 9,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000arkva2yhg91dz',
  },
  {
    id: 'ckq18pm6b002mrkvaan6r7yqg',
    link: '/wiki/Athena_Nebula',
    name: 'Athena Nebula',
    systems: [
      {
        id: 'ckq18pm6b002nrkva4z2w94cr',
        link: '/wiki/Ialessa',
        name: 'Ialessa',
        assets: [
          {
            id: 'ckq18pm6b002orkvagv67776m',
            location: 'East of star, between third and fourth ring',
            asset: 'Wreckage - 500 fuel',
          },
          {
            id: 'ckq18pm6b002rrkva7pstbbio',
            location: 'Trikalon',
            asset: 'Asari Engineers',
            link: '/wiki/War_Assets/Asari#Asari_Engineers',
          },
        ],
        locations: [
          {
            id: 'ckq18pnuu00dprkva7t2k5td1',
            name: 'Ilmnos',
            location: 1,
          },
          {
            id: 'ckq18pnuu00dqrkvae3y15frw',
            name: 'Nossia',
            location: 2,
          },
          {
            id: 'ckq18pnuu00drrkvacv6a3i3y',
            name: 'Sanves',
            location: 3,
          },
          {
            id: 'ckq18pnuu00dsrkvae1h3ad8r',
            name: 'Trikalon',
            location: 4,
          },
          {
            id: 'ckq18pnuu00dtrkvahvryasql',
            name: 'Zylium',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6c002trkvacx0173nj',
        link: '/wiki/Orisoni',
        name: 'Orisoni',
        assets: [
          {
            id: 'ckq18pm6c002urkvah2wn7txp',
            location: 'Egalic',
            asset: 'Asari Research Ships',
            link: '/wiki/War_Assets/Asari#Asari_Research_Ships',
          },
          {
            id: 'ckq18pm6c002xrkva1j7j4g46',
            location: 'East-southeast of star, between second and third ring',
            asset: 'Wreckage - 350 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pny400durkvaf7lrbkt5',
            name: 'Egalic',
            location: 1,
          },
          {
            id: 'ckq18pny400dvrkvadkkndhyv',
            name: 'Kralla',
            location: 2,
          },
          {
            id: 'ckq18pny400dwrkva7qu44ftn',
            name: 'Niacal',
            location: 3,
          },
          {
            id: 'ckq18pny400dxrkva7gd3e8bj',
            name: 'Thissioni',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6c002zrkva7r25hp4c',
        link: '/wiki/Parnitha',
        name: 'Parnitha',
        assets: [
          {
            id: 'ckq18pm6c0030rkvadwl29qen',
            location: 'Tevura',
            asset: 'Asari Cruiser Cybaen',
            link: '/wiki/Asari',
          },
        ],
        locations: [
          {
            id: 'ckq18po1c00dyrkvaba3s3k2h',
            name: 'Athame',
            location: 1,
          },
          {
            id: 'ckq18po1c00dzrkvaa8y66v42',
            name: 'Janiri',
            location: 2,
          },
          {
            id: 'ckq18po1c00e0rkva1ki6bsrc',
            name: 'Kurinth',
            location: 3,
          },
          {
            id: 'ckq18po1c00e1rkvaeaypd9ny',
            name: 'Lucen',
            location: 4,
          },
          {
            id: 'ckq18po1c00e2rkvac36ue3nt',
            name: 'Piares',
            location: 5,
          },
          {
            id: 'ckq18po1c00e3rkvab96k1kzk',
            name: 'Tevura',
            location: 6,
          },
          {
            id: 'ckq18po1c00e4rkvaad0z42bn',
            name: 'Thessia',
            location: 7,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6c0032rkvabvn7gjta',
        link: '/wiki/Tomaros',
        name: 'Tomaros',
        assets: [
          {
            id: 'ckq18pm6c0033rkvac68hbz03',
            location: 'South of Niagolon',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm6c0036rkvac1fe8iyo',
            location: 'Pronoia',
            asset: 'Asari Cruiser Nefrane',
            link: '/wiki/War_Assets/Asari#Asari_Cruiser_Nefrane',
          },
        ],
        locations: [
          {
            id: 'ckq18po4h00e5rkva9y1u7aho',
            name: 'Beness',
            location: 1,
          },
          {
            id: 'ckq18po4i00e6rkva4d6lcslq',
            name: 'Lusia',
            location: 2,
          },
          {
            id: 'ckq18po4i00e7rkvab4gsd8ts',
            name: 'Niagolon',
            location: 3,
          },
          {
            id: 'ckq18po4i00e8rkva5o07efl3',
            name: 'Pronoia',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6d0038rkva0rww7l6g',
        link: '/wiki/Vernio',
        name: 'Vernio',
        assets: [
          {
            id: 'ckq18pm6d0039rkva5xpg5olj',
            location: 'Polissa',
            asset: 'Artifact: Hesperia Period Statue',
            link: '/wiki/Athena_Nebula:_Hesperia-Period_Statue',
          },
          {
            id: 'ckq18pm6d003crkvafi6a7hix',
            location: 'Northeast of star, just past asteroid belt',
            asset: 'Wreckage - 400 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18po7p00e9rkvagchz0yga',
            name: 'Nauti',
            location: 1,
          },
          {
            id: 'ckq18po7p00earkva7me6ad8s',
            name: 'Polissa',
            location: 2,
          },
          {
            id: 'ckq18po7p00ebrkvacvgm22ol',
            name: 'Promavess',
            location: 3,
          },
          {
            id: 'ckq18po7p00ecrkva2j6phpf6',
            name: 'Sotera',
            location: 4,
          },
          {
            id: 'ckq18po7p00edrkva5kp11lgj',
            name: 'Tritogenith',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0008rkva6l6zhw1z',
  },
  {
    id: 'ckq18pm6d003drkva0f6r3rii',
    link: '/wiki/Attican_Beta',
    name: 'Attican Beta',
    systems: [
      {
        id: 'ckq18pm6d003erkva5dcedncl',
        link: '/wiki/Hercules',
        name: 'Hercules',
        assets: [
          {
            id: 'ckq18pm6d003frkva7v4d4aib',
            location: 'Eletania',
            asset: 'Interferometric Array',
            link: '/wiki/War_Assets/Crucible#Interferometric_Array',
          },
          {
            id: 'ckq18pm6d003irkva7jih2ltz',
            location: 'Southeast of star, between 2nd and 3rd ring',
            asset: 'Wreckage - 370 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18poev00eerkva96elexak',
            name: 'Eletania',
            location: 1,
          },
          {
            id: 'ckq18poev00efrkva6qrb07gv',
            name: 'Syided',
            location: 2,
          },
          {
            id: 'ckq18poev00egrkva0f77awar',
            name: 'Xathorron',
            location: 3,
          },
          {
            id: 'ckq18poev00ehrkva1hcabsl8',
            name: 'Zatorus',
            location: 4,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6e003krkva6pzwelur',
        link: '/wiki/Theseus',
        name: 'Theseus',
        assets: [
          {
            id: 'ckq18pm6e003lrkva6c4z24xn',
            location: 'Feros',
            asset: 'ExoGeni Scientists',
            link: '/wiki/ExoGeni',
          },
          {
            id: 'ckq18pm6e003orkvab08e495j',
            location: 'Northeast of star, east of Feros',
            asset: 'Wreckage - 240 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pohz00eirkva239d158z',
            name: 'Feros',
            location: 1,
          },
          {
            id: 'ckq18pohz00ejrkva951fhh5l',
            name: 'Logan',
            location: 2,
          },
          {
            id: 'ckq18pohz00ekrkva8ivf97pm',
            name: 'Quana',
            location: 3,
          },
          {
            id: 'ckq18pohz00elrkvaelkh8div',
            name: 'Sharring',
            location: 4,
          },
          {
            id: 'ckq18pohz00emrkva7qyh2v9v',
            name: 'Sytau',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0007rkvad34c5hmw',
  },
  {
    id: 'ckq18pm6e003prkva0tx0h6yw',
    link: '/wiki/Caleston_Rift',
    name: 'Caleston Rift',
    systems: [
      {
        id: 'ckq18pm6e003qrkva9gs38sr1',
        link: '/wiki/Aysur',
        name: 'Aysur',
        assets: [
          {
            id: 'ckq18pm6e003rrkvadm6p0y1z',
            location: 'North-north-east of the star, just outside fourth ring',
            asset: 'Wreckage - 150 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18pooi00enrkvaaenh82md',
            name: 'Agnin',
            location: 1,
          },
          {
            id: 'ckq18pooi00eorkva24g32h9t',
            name: 'Alformus',
            location: 2,
          },
          {
            id: 'ckq18pooi00eprkva0tk9cpvq',
            name: 'Arvuna',
            location: 3,
          },
          {
            id: 'ckq18pooi00eqrkva6ami70zj',
            name: 'Dranen',
            location: 4,
          },
          {
            id: 'ckq18pooi00errkva4okz9pji',
            name: 'Mahavid',
            location: 5,
          },
          {
            id: 'ckq18pooi00esrkva0l5tfvr3',
            name: 'Nahata Belt',
            location: 6,
          },
          {
            id: 'ckq18pooi00etrkva35gjay2w',
            name: 'Shasu',
            location: 7,
          },
          {
            id: 'ckq18pooi00eurkvahwrhhfqa',
            name: 'Shir',
            location: 8,
          },
          {
            id: 'ckq18pooi00evrkva5xce2k9o',
            name: 'Tamgauta',
            location: 9,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6e003trkva6klyh4of',
        link: '/wiki/Balor',
        name: 'Balor',
        assets: [
          {
            id: 'ckq18pm6e003urkvaf09m50p7',
            location: 'North of the star, between second and third ring',
            asset: 'Wreckage - 350 fuel1',
            link: '#Leviathan',
          },
          {
            id: 'ckq18pm6e003xrkva89vn2fsn',
            location: 'Bres (asteroid belt north of star)',
            asset: 'Synthdiamond Heat Sinks1',
            link: '/wiki/War_Assets/Alliance#Synthdiamond_Heat_Sinks',
          },
        ],
        locations: [
          {
            id: 'ckq18pory00ewrkva9dogbr7c',
            name: 'Bres',
            location: 1,
          },
          {
            id: 'ckq18pory00exrkva6gpi1r4h',
            name: 'Caleston',
            location: 2,
          },
          {
            id: 'ckq18pory00eyrkvacbq1gs7f',
            name: 'Cernunnos',
            location: 3,
          },
          {
            id: 'ckq18pory00ezrkvaa69f0hcl',
            name: 'Elatha',
            location: 4,
          },
          {
            id: 'ckq18pory00f0rkva5zv60lft',
            name: 'Fomor Belt',
            location: 5,
          },
          {
            id: 'ckq18pory00f1rkva5nfj7paf',
            name: 'Partholon',
            location: 6,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr000drkvaauxb6dk7',
  },
  {
    id: 'ckq18pm6f003yrkvabqslaj8t',
    link: '/wiki/Crescent_Nebula',
    name: 'Crescent Nebula',
    systems: [
      {
        id: 'ckq18pm6f003zrkva7xek1mb6',
        link: '/wiki/Lusarn',
        name: 'Lusarn',
        assets: [
          {
            id: 'ckq18pm6f0040rkva270y76vu',
            location: 'Beyalt (asteroid belt northwest of star)',
            asset: 'Salvage - 10,000 credits1',
            link: '#Leviathan',
          },
          {
            id: 'ckq18pm6f0043rkvabwh78khi',
            location:
              'East of star and southwest of Tarith, between third and fourth ring',
            asset: 'Wreckage - 150 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18poyt00f2rkvadq8lhnxo',
            name: 'Beyalt',
            location: 1,
          },
          {
            id: 'ckq18poyt00f3rkvafrwiag2i',
            name: 'Doriae',
            location: 2,
          },
          {
            id: 'ckq18poyt00f4rkvaggub9cfn',
            name: 'Euntanta',
            location: 3,
          },
          {
            id: 'ckq18poyt00f5rkva9fggfa7w',
            name: 'Jontan',
            location: 4,
          },
          {
            id: 'ckq18poyt00f6rkvahnplgosk',
            name: 'Tarith',
            location: 5,
          },
          {
            id: 'ckq18poyt00f7rkva7erj1snd',
            name: 'Xetic',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6f0045rkva6vi74lap',
        link: '/wiki/Tasale',
        name: 'Tasale',
        assets: [
          {
            id: 'ckq18pm6f0046rkva1mw6h0f4',
            location: 'Illium',
            asset: 'Liquid Assets1',
            link: '/wiki/War_Assets/Alien#Liquid_Assets',
          },
          {
            id: 'ckq18pm6f0049rkvae5t1f84d',
            location: 'North of Illium, just above the third ring',
            asset: 'Wreckage - 350 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18pp1y00f8rkvaap1c8p8c',
            name: 'Beregale',
            location: 1,
          },
          {
            id: 'ckq18pp1y00f9rkvacit89sof',
            name: 'Illium',
            location: 2,
          },
          {
            id: 'ckq18pp1y00farkvag1uagsul',
            name: 'Naxell',
            location: 3,
          },
          {
            id: 'ckq18pp1y00fbrkva69nzg0ec',
            name: 'Ponolus',
            location: 4,
          },
          {
            id: 'ckq18pp1y00fcrkva1rmo8hn8',
            name: 'Teukria',
            location: 5,
          },
          {
            id: 'ckq18pp1y00fdrkvaa7ey5ty0',
            name: 'Thail',
            location: 6,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr000jrkva6i4m796j',
  },
  {
    id: 'ckq18pm6f004arkva45er192y',
    link: '/wiki/Exodus_Cluster',
    name: 'Exodus Cluster',
    systems: [
      {
        id: 'ckq18pm6f004brkva47p4gspm',
        link: '/wiki/Asgard',
        name: 'Asgard',
        assets: [
          {
            id: 'ckq18pm6f004crkvaem9lgm50',
            location: 'Tyr',
            asset: 'Alliance Naval Exploration Flotilla',
            link: '/wiki/War_Assets/Alliance#Alliance_Naval_Exploration_Flotilla',
          },
          {
            id: 'ckq18pm6g004frkvacnxp4mjv',
            location: 'Terra Nova',
            asset: 'Alliance Cruiser Shanghai',
            link: '/wiki/War_Assets/Alliance#Alliance_Cruiser_Shanghai',
          },
          {
            id: 'ckq18pm6g004irkva2lut0xso',
            location: 'Loki',
            asset: 'Alliance Spec Ops Team Delta',
            link: '/wiki/War_Assets/Alliance#Alliance_Spec_Ops_Team_Delta',
          },
          {
            id: 'ckq18pm6g004lrkva7ga42fsi',
            location: 'Northwest of star, between third and fourth ring',
            asset: 'Wreckage - 250 fuel',
          },
          {
            id: 'ckq18pm6g004orkva2fji01rt',
            location: 'Borr',
            asset: 'Intel: Remains of Reaper Destroyer',
            link: '/wiki/Intel_Terminal#Remains_of_a_Reaper_Destroyer',
          },
        ],
        locations: [
          {
            id: 'ckq18pp8800ferkva46hk1s9e',
            name: 'Asteroid X57',
            location: 1,
          },
          {
            id: 'ckq18pp8800ffrkva61ox27yp',
            name: 'Borr',
            location: 2,
          },
          {
            id: 'ckq18pp8800fgrkva3t1sgazy',
            name: 'Loki',
            location: 3,
          },
          {
            id: 'ckq18pp8800fhrkva04qjcwrc',
            name: 'Terra Nova',
            location: 4,
          },
          {
            id: 'ckq18pp8800firkvaec9l20pt',
            name: 'Tyr',
            location: 5,
          },
          {
            id: 'ckq18pp8800fjrkvagpz6hskh',
            name: 'Properties',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6g004qrkva1alyh9yr',
        link: '/wiki/Utopia',
        name: 'Utopia',
        assets: [
          {
            id: 'ckq18pm6g004rrkva8kho1qj9',
            location: 'South of Eden Prime, between second and third ring',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm6h004urkva7wo3atwd',
            location: 'Zion',
            asset: 'Prothean Data Files',
            link: '/wiki/War_Assets/Crucible#Prothean_Data_Files',
          },
        ],
        locations: [
          {
            id: 'ckq18ppbb00fkrkva9h9q55dw',
            name: 'Arcadia',
            location: 1,
          },
          {
            id: 'ckq18ppbb00flrkva5x3fc8tt',
            name: 'Eden Prime',
            location: 2,
          },
          {
            id: 'ckq18ppbb00fmrkva7u1k2azv',
            name: 'Mass Effect',
            location: 3,
          },
          {
            id: 'ckq18ppbb00fnrkva922u20k8',
            name: 'Mass Effect 3',
            location: 4,
          },
          {
            id: 'ckq18ppbb00forkvaapy6bn4e',
            name: 'Nirvana',
            location: 5,
          },
          {
            id: 'ckq18ppbb00fprkva9fo9brtd',
            name: 'Xanadu',
            location: 6,
          },
          {
            id: 'ckq18ppbb00fqrkva4nmm7rgb',
            name: 'Zion',
            location: 7,
          },
        ],
        relay: true,
        depot: false,
      },
    ],
    requirement: null,
  },
  {
    id: 'ckq18pm6h004vrkva4tt4duk2',
    link: '/wiki/Gemini_Sigma',
    name: 'Gemini Sigma',
    systems: [
      {
        id: 'ckq18pm6h004wrkvacpdm1tsr',
        link: '/wiki/Han',
        name: 'Han',
        assets: [
          {
            id: 'ckq18pm6h004xrkvacnvdf4k5',
            location: 'East of star, between fourth and fifth ring',
            asset: 'Wreckage - 470 fuel',
          },
          {
            id: 'ckq18pm6h0050rkva646i3m08',
            location: 'Mavigon',
            asset: 'Salvage - 10,000 credits',
          },
        ],
        locations: [
          {
            id: 'ckq18ppk200frrkva3xv54zql',
            name: 'Farcrothu',
            location: 1,
          },
          {
            id: 'ckq18ppk200fsrkvafzn3fi4m',
            name: 'Huningto',
            location: 2,
          },
          {
            id: 'ckq18ppk200ftrkvaf9bdb5xd',
            name: 'Mavigon',
            location: 3,
          },
          {
            id: 'ckq18ppk200furkva4t9abby4',
            name: 'Paravin',
            location: 4,
          },
          {
            id: 'ckq18ppk200fvrkva4k3n1krn',
            name: 'Patatanlis',
            location: 5,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6h0052rkvaghdlhqdz',
        link: '/wiki/Ming',
        name: 'Ming',
        assets: [
          {
            id: 'ckq18pm6h0053rkva5wb83yh6',
            location: 'Southeast of star, below Antiroprus',
            asset: 'Wreckage - 320 fuel',
          },
          {
            id: 'ckq18pm6h0056rkva944nhasv',
            location: 'Parag',
            asset: 'Alliance Cruiser Nairobi, Alliance Third Fleet',
            link: '/wiki/Alliance',
          },
        ],
        locations: [
          {
            id: 'ckq18ppnf00fwrkvacmp1gg5s',
            name: 'Altanorch',
            location: 1,
          },
          {
            id: 'ckq18ppnf00fxrkva996h3njc',
            name: 'Antiroprus',
            location: 2,
          },
          {
            id: 'ckq18ppnf00fyrkva8eb883e6',
            name: 'MSV Worthington',
            location: 3,
          },
          {
            id: 'ckq18ppnf00fzrkva0bkn86xs',
            name: 'Parag',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0004rkvab6jr6ufp',
  },
  {
    id: 'ckq18pm6h0057rkva549bbctc',
    link: '/wiki/Hades_Gamma',
    name: 'Hades Gamma',
    systems: [
      {
        id: 'ckq18pm6h0058rkva0obb3khv',
        link: '/wiki/Antaeus',
        name: 'Antaeus',
        assets: [
          {
            id: 'ckq18pm6h0059rkva106jhako',
            location:
              'Southwest of the Mass Relay, between the fifth and sixth ring',
            asset: 'Wreckage - 300 fuel',
          },
          {
            id: 'ckq18pm6i005crkva7ycn6bvg',
            location: 'Trebin',
            asset: 'Salvage - 10,000 credits',
          },
        ],
        locations: [
          {
            id: 'ckq18ppvf00g0rkva8prk31ip',
            name: 'Ageko',
            location: 1,
          },
          {
            id: 'ckq18ppvf00g1rkva4dt7csow',
            name: 'Edmos',
            location: 2,
          },
          {
            id: 'ckq18ppvf00g2rkvafbn6e6d5',
            name: 'Hunidor',
            location: 3,
          },
          {
            id: 'ckq18ppvf00g3rkva8j4nd7on',
            name: 'Ploba',
            location: 4,
          },
          {
            id: 'ckq18ppvf00g4rkva4qx9gajj',
            name: 'Trebin',
            location: 5,
          },
          {
            id: 'ckq18ppvf00g5rkvadcu1by1n',
            name: 'Vemal',
            location: 6,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6i005erkvaebrl52ee',
        link: '/wiki/Cacus',
        name: 'Cacus',
        assets: [
          {
            id: 'ckq18pm6i005frkva4iwo46jc',
            location: 'Chohe',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6i005irkvaeo397jc7',
            location: 'West of Xamarri, between fourth and fifth ring',
            asset: 'Wreckage - 400 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18ppyr00g6rkva9uh9cwta',
            name: 'Chohe',
            location: 1,
          },
          {
            id: 'ckq18ppyr00g7rkva9s1m3d1s',
            name: 'Faringor',
            location: 2,
          },
          {
            id: 'ckq18ppyr00g8rkva57nr4h51',
            name: 'Treyarmus',
            location: 3,
          },
          {
            id: 'ckq18ppyr00g9rkva4va2cy6a',
            name: 'Xamarri',
            location: 4,
          },
          {
            id: 'ckq18ppyr00garkvag4qhcucx',
            name: 'Zayarter',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6i005krkvag9902vzd',
        link: '/wiki/Dis',
        name: 'Dis',
        assets: [
          {
            id: 'ckq18pm6i005lrkva4p6ka521',
            location: 'Northeast of Nearrum',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm6i005orkvahquabs3i',
            location: 'Klensal',
            asset: 'Salvage - 10,000 credits',
          },
        ],
        locations: [
          {
            id: 'ckq18pq2k00gbrkvab7kdh2px',
            name: 'Gremar',
            location: 1,
          },
          {
            id: 'ckq18pq2k00gcrkvacpe0czub',
            name: 'Jartar',
            location: 2,
          },
          {
            id: 'ckq18pq2k00gdrkvab9t6andb',
            name: 'Klensal',
            location: 3,
          },
          {
            id: 'ckq18pq2k00gerkva8dbkby4o',
            name: 'Metallic Asteroid',
            location: 4,
          },
          {
            id: 'ckq18pq2k00gfrkva67did71e',
            name: 'Nearrum',
            location: 5,
          },
          {
            id: 'ckq18pq2k00ggrkva21a38oiv',
            name: 'Raysha',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6i005qrkva2bpq7ub7',
        link: '/wiki/Farinata',
        name: 'Farinata',
        assets: [
          {
            id: 'ckq18pm6j005rrkva2pft982n',
            location: 'Between star and Juntauma',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm6j005urkvadcug11s6',
            location: 'Juntauma',
            asset: 'Alliance Frigate Agincourt, Alliance First Fleet',
            link: '/wiki/War_Assets/Alliance#Alliance_First_Fleet',
          },
        ],
        locations: [
          {
            id: 'ckq18pq5x00ghrkva00nd9ak8',
            name: 'Juntauma',
            location: 1,
          },
          {
            id: 'ckq18pq5x00girkva3jj68qh1',
            name: 'MSV Ontario',
            location: 2,
          },
          {
            id: 'ckq18pq5x00gjrkva237vdxuu',
            name: 'Nepneu',
            location: 3,
          },
          {
            id: 'ckq18pq5x00gkrkva3u34c658',
            name: 'Rocky Asteroid',
            location: 4,
          },
          {
            id: 'ckq18pq5x00glrkva892c5srj',
            name: 'Tunshagon',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6j005wrkvaffdwcw32',
        link: '/wiki/Plutus',
        name: 'Plutus',
        assets: [
          {
            id: 'ckq18pm6j005xrkvagdzn9g0g',
            location: 'Nonuel',
            asset: 'Special Ops Team Zeta, 103rd Marine Division',
            link: '/wiki/War_Assets/Alliance#103rd_Marine_Division',
          },
        ],
        locations: [
          {
            id: 'ckq18pq9900gmrkva3qmvgv3a',
            name: 'Clocrolis',
            location: 1,
          },
          {
            id: 'ckq18pq9900gnrkvactjy9hjq',
            name: 'Maidla',
            location: 2,
          },
          {
            id: 'ckq18pq9900gorkvagt6x3u5b',
            name: 'Mingito',
            location: 3,
          },
          {
            id: 'ckq18pq9900gprkva99xx67i1',
            name: 'Nonuel',
            location: 4,
          },
          {
            id: 'ckq18pq9900gqrkva6b74fn5m',
            name: 'Veyaria',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: null,
  },
  {
    id: 'ckq18pm6j005yrkva0zw1aj9o',
    link: '/wiki/Hades_Nexus',
    name: 'Hades Nexus',
    systems: [
      {
        id: 'ckq18pm6j005zrkva8vtd5suf',
        link: '/wiki/Hekate',
        name: 'Hekate',
        assets: [
          {
            id: 'ckq18pm6j0060rkvaa2117vfq',
            location:
              'East of star and Southwest of Mass Relay, between second and third rings',
            asset: 'Wreckage - 380 fuel',
          },
          {
            id: 'ckq18pm6k0063rkva5x7w2p1b',
            location: 'Asteria',
            asset: 'Alliance Frigate Hong Kong, Alliance Fifth Fleet',
            link: '/wiki/War_Assets/Alliance#Alliance_Fifth_Fleet',
          },
        ],
        locations: [
          {
            id: 'ckq18pqgy00grrkvah5kg51tq',
            name: 'Asteria',
            location: 1,
          },
          {
            id: 'ckq18pqgy00gsrkva38ml0ihx',
            name: 'Bothros',
            location: 2,
          },
          {
            id: 'ckq18pqgy00gtrkva9ez084wh',
            name: 'Ker',
            location: 3,
          },
          {
            id: 'ckq18pqgy00gurkvacvf84je0',
            name: 'Triodia',
            location: 4,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6k0065rkvaeqfl8ue2',
        link: '/wiki/Hoplos',
        name: 'Hoplos',
        assets: [
          {
            id: 'ckq18pm6k0066rkva0ilycv11',
            location: 'Kopis',
            asset: 'Artifact: Obelisk of Karza',
            link: '/wiki/Hades_Nexus:_Obelisk_of_Karza',
          },
          {
            id: 'ckq18pm6k0069rkva3qck1ayd',
            location: 'West of star, near fourth ring',
            asset: 'Wreckage - 250 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pqkd00gvrkva4ug37ypr',
            name: 'Aegis',
            location: 1,
          },
          {
            id: 'ckq18pqkd00gwrkvagq448fo0',
            name: 'Kopis',
            location: 2,
          },
          {
            id: 'ckq18pqkd00gxrkva7t5igibj',
            name: 'Mass Effect 2',
            location: 3,
          },
          {
            id: 'ckq18pqkd00gyrkva83a058iy',
            name: 'Mass Effect 3',
            location: 4,
          },
          {
            id: 'ckq18pqkd00gzrkvahw500sgj',
            name: 'Makhaira',
            location: 5,
          },
          {
            id: 'ckq18pqkd00h0rkvac5ei7cqt',
            name: 'Talaria',
            location: 6,
          },
          {
            id: 'ckq18pqkd00h1rkva1yb710po',
            name: 'Trident',
            location: 7,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6k006brkva4lhd49ex',
        link: '/wiki/Pamyat',
        name: 'Pamyat',
        assets: [
          {
            id: 'ckq18pm6k006crkvahvdn1llm',
            location: 'Dobrovolski',
            asset: 'Alliance Frigate Leipzig, Alliance First Fleet',
            link: '/wiki/War_Assets/Alliance#Alliance_First_Fleet',
          },
          {
            id: 'ckq18pm6k006frkva9m8ed8om',
            location: 'South of star, between third ring and asteroid belt',
            asset: 'Wreckage - 100 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pqnx00h2rkva7p0h1duz',
            name: 'Chazov Belt',
            location: 1,
          },
          {
            id: 'ckq18pqnx00h3rkva3x6u1cuk',
            name: 'Dobrovolski',
            location: 2,
          },
          {
            id: 'ckq18pqny00h4rkvaa2uo805f',
            name: 'Komarov',
            location: 3,
          },
          {
            id: 'ckq18pqny00h5rkva647adgt6',
            name: 'Patsayev',
            location: 4,
          },
          {
            id: 'ckq18pqny00h6rkva4xba981n',
            name: 'Volkov',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6k006hrkvac6g7aiu3',
        link: '/wiki/Sheol',
        name: 'Sheol',
        assets: [
          {
            id: 'ckq18pm6l006irkvaeb7xh4fl',
            location: 'Gei Hinnom',
            asset: 'Artifact: Prothean Sphere',
            link: '/wiki/Hades_Nexus:_Prothean_Sphere',
          },
        ],
        locations: [
          {
            id: 'ckq18pqr900h7rkva5ol03r7o',
            name: 'Gei Hinnom',
            location: 1,
          },
          {
            id: 'ckq18pqr900h8rkva20f50osx',
            name: 'Mass Effect 2',
            location: 2,
          },
          {
            id: 'ckq18pqr900h9rkvabnp8fn7i',
            name: 'Mass Effect 3',
            location: 3,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000drkvaauxb6dk7',
  },
  {
    id: 'ckq18pm6l006jrkva2ul0cgn7',
    link: '/wiki/Hourglass_Nebula',
    name: 'Hourglass Nebula',
    systems: [
      {
        id: 'ckq18pm6l006krkva9l480oax',
        link: '/wiki/Faryar',
        name: 'Faryar',
        assets: [
          {
            id: 'ckq18pm6l006lrkva9yimcj42',
            location: 'Alingon',
            asset: 'Shadow Broker Starship Tech',
            link: '/wiki/War_Assets/Crucible#Shadow_Broker_Starship_Tech',
          },
          {
            id: 'ckq18pm6l006orkva5cqtgx0q',
            location: 'Northwest of Alingon',
            asset: 'Wreckage - 600 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pqxj00harkvad7ea3v2q',
            name: 'Alingon',
            location: 1,
          },
          {
            id: 'ckq18pqxj00hbrkva855cb4l5',
            name: 'Antictra',
            location: 2,
          },
          {
            id: 'ckq18pqxj00hcrkva1wht1r8f',
            name: 'Daratar',
            location: 3,
          },
          {
            id: 'ckq18pqxj00hdrkva00df031r',
            name: 'Nephros',
            location: 4,
          },
          {
            id: 'ckq18pqxj00herkva4kmihcgl',
            name: 'Quarem',
            location: 5,
          },
          {
            id: 'ckq18pqxj00hfrkvad5n26ir0',
            name: 'Tunfigel',
            location: 6,
          },
          {
            id: 'ckq18pqxj00hgrkva2aaodd78',
            name: 'Wenrum',
            location: 7,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6l006qrkvachspb519',
        link: '/wiki/Osun',
        name: 'Osun',
        assets: [
          {
            id: 'ckq18pm6l006rrkva1wdde2zx',
            location: 'Erinle',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6l006urkva2t3z1tjj',
            location: 'Southwest of Erinle',
            asset: 'Wreckage - 100 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pr1300hhrkva03obawm2',
            name: 'Aganju',
            location: 1,
          },
          {
            id: 'ckq18pr1300hirkva1acp9f8m',
            name: 'Erinle',
            location: 2,
          },
          {
            id: 'ckq18pr1300hjrkvabdpjhb4q',
            name: 'Olokun',
            location: 3,
          },
          {
            id: 'ckq18pr1300hkrkva7wtg2gxj',
            name: 'Orunmila',
            location: 4,
          },
          {
            id: 'ckq18pr1300hlrkva4tttd6va',
            name: 'Prison Ship Purgatory',
            location: 5,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6l006wrkvaal5vcw0j',
        link: '/wiki/Ploitari',
        name: 'Ploitari',
        assets: [
          {
            id: 'ckq18pm6l006xrkva84c4gbmp',
            location: 'Zanethu',
            asset: 'Terminus Freighters',
            link: '/wiki/War_Assets/Crucible#Terminus_Freighters',
          },
        ],
        locations: [
          {
            id: 'ckq18pr4c00hmrkva8ijp51b8',
            name: 'Aigela',
            location: 1,
          },
          {
            id: 'ckq18pr4c00hnrkva13jw79lg',
            name: 'Synalus',
            location: 2,
          },
          {
            id: 'ckq18pr4c00horkva8bbpgw2w',
            name: 'Thegan',
            location: 3,
          },
          {
            id: 'ckq18pr4c00hprkva0p05aifd',
            name: 'Zanethu',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6m006zrkva3fdyhtnk',
        link: '/wiki/Sowilo',
        name: 'Sowilo',
        assets: [
          {
            id: 'ckq18pm6m0070rkvaa8wq4nfa',
            location: 'Hagalaz',
            asset: 'Shadow Broker Support Team',
            link: '/wiki/War_Assets/Alien#Shadow_Broker_Support_Team',
          },
          {
            id: 'ckq18pm6m0073rkva68sn5jo1',
            location: 'North of star (Between 4th & 5th Rings)',
            asset: 'Wreckage - 200 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pr7n00hqrkvaap0b29hw',
            name: 'Ansuz',
            location: 1,
          },
          {
            id: 'ckq18pr7n00hrrkvabce233w8',
            name: 'Hagalaz',
            location: 2,
          },
          {
            id: 'ckq18pr7n00hsrkvahp72gngd',
            name: 'Isa',
            location: 3,
          },
          {
            id: 'ckq18pr7n00htrkvagn4t0tbv',
            name: 'Kenaz',
            location: 4,
          },
          {
            id: 'ckq18pr7n00hurkvahs0jfjl1',
            name: 'Thurisaz',
            location: 5,
          },
          {
            id: 'ckq18pr7n00hvrkvaht7p3f7u',
            name: 'Uruz',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000frkvads1e2l6r',
  },
  {
    id: 'ckq18pm6m0074rkva3geofhb5',
    link: '/wiki/Ismar_Frontier',
    name: 'Ismar Frontier',
    systems: [
      {
        id: 'ckq18pm6m0075rkva2h71akb5',
        link: '/wiki/Aquila',
        name: 'Aquila',
        assets: [
          {
            id: 'ckq18pm6m0076rkvahyez3ucw',
            location: 'Metaponto',
            asset: 'Intel: Advanced Biotic Implants',
            link: '/wiki/Intel_Terminal#Advanced_Biotic_Implants',
          },
        ],
        locations: [
          {
            id: 'ckq18prel00hwrkvae2sc74ig',
            name: 'Lepini',
            location: 1,
          },
          {
            id: 'ckq18prem00hxrkvaegiqh23f',
            name: 'Metaponto',
            location: 2,
          },
          {
            id: 'ckq18prem00hyrkva4o3da48k',
            name: 'Pollino',
            location: 3,
          },
          {
            id: 'ckq18prem00hzrkvact8zgjyh',
            name: 'Vecchio',
            location: 4,
          },
          {
            id: 'ckq18prem00i0rkvac652c2zd',
            name: 'Volturno',
            location: 5,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr000lrkva7huoac6j',
  },
  {
    id: 'ckq18pm6m0077rkva6bhs9hcy',
    link: '/wiki/Kite%27s_Nest',
    name: "Kite's Nest",
    systems: [
      {
        id: 'ckq18pm6m0078rkvaemqx41iw',
        link: '/wiki/Harsa',
        name: 'Harsa',
        assets: [
          {
            id: 'ckq18pm6m0079rkvafzj43wvm',
            location: 'Verush',
            asset: 'Intel: Weapon Upgrade Kit',
            link: '/wiki/Intel_Terminal#Weapon_Upgrade_Kit',
          },
          {
            id: 'ckq18pm6m007crkvagpkeaqsz',
            location: 'West of Verush',
            asset: 'Wreckage - 300 fuel',
          },
          {
            id: 'ckq18pm6n007frkva4ptfh610',
            location: "Khar'shan",
            asset: 'Artifact: Pillars of Strength',
            link: '/wiki/Kite%27s_Nest:_Pillars_of_Strength',
          },
        ],
        locations: [
          {
            id: 'ckq18prlp00i1rkva4nv31ovn',
            name: 'Dezda',
            location: 1,
          },
          {
            id: 'ckq18prlp00i2rkva6tzp8att',
            name: 'Ilem',
            location: 2,
          },
          {
            id: 'ckq18prlp00i3rkvafsnc81lq',
            name: "Khar'shan",
            location: 3,
          },
          {
            id: 'ckq18prlp00i4rkvaeuuq801k',
            name: 'Spekilas',
            location: 4,
          },
          {
            id: 'ckq18prlp00i5rkva808ugt9k',
            name: 'Verush',
            location: 5,
          },
        ],
        relay: true,
        depot: false,
      },
      {
        id: 'ckq18pm6n007hrkvaezgk69kz',
        link: '/wiki/Indris',
        name: 'Indris',
        assets: [
          {
            id: 'ckq18pm6n007irkvabs7b7net',
            location: 'Cholis',
            asset: 'Governor Grothan Pazness1',
            link: '/wiki/War_Assets/Alien#Governor_Grothan_Pazness',
          },
          {
            id: 'ckq18pm6n007lrkva0egocu07',
            location: 'North North-East of star just outside second ring',
            asset: 'Wreckage - 300 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18prov00i6rkvaa5q3fjam',
            name: 'Camala',
            location: 1,
          },
          {
            id: 'ckq18prov00i7rkva570x74yu',
            name: 'Cholis',
            location: 2,
          },
          {
            id: 'ckq18prov00i8rkvabxkl59pz',
            name: 'Hiba',
            location: 3,
          },
          {
            id: 'ckq18prov00i9rkva0q8y3ir5',
            name: 'Kaver Station',
            location: 4,
          },
          {
            id: 'ckq18prov00iarkva3vm94qg5',
            name: 'Maklan',
            location: 5,
          },
          {
            id: 'ckq18prov00ibrkvaclse9xj2',
            name: 'Ramlat',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6n007nrkvaa5rm95g5',
        link: '/wiki/Untrel',
        name: 'Untrel',
        assets: [
          {
            id: 'ckq18pm6n007orkva7v6a8mbx',
            location: 'Adek',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6n007rrkva7oubbw2u',
            location: 'Southwest of Adek',
            asset: 'Wreckage - 100 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18prsn00icrkva38xw45tf',
            name: 'Adek',
            location: 1,
          },
          {
            id: 'ckq18prsn00idrkva0rnq47ie',
            name: 'Ezka',
            location: 2,
          },
          {
            id: 'ckq18prsn00ierkva97x07apa',
            name: 'Klos',
            location: 3,
          },
          {
            id: 'ckq18prsn00ifrkvaajwsd4lm',
            name: 'Uza',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6n007trkva2fsrfcp9',
        link: '/wiki/Vular',
        name: 'Vular',
        assets: [
          {
            id: 'ckq18pm6n007urkvahi3k19oz',
            location: 'Vana',
            asset: 'Black Market Artifacts',
            link: '/wiki/Aria:_Blue_Suns',
          },
          {
            id: 'ckq18pm6o007xrkva25mi1fhv',
            location: 'Northwest of star, third ring',
            asset: 'Wreckage - 150 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
    ],
    requirement: null,
  },
  {
    id: 'ckq18pm6o007yrkva2havblow',
    link: '/wiki/Krogan_DMZ',
    name: 'Krogan DMZ',
    systems: [
      {
        id: 'ckq18pm6o007zrkva1syv1err',
        link: '/wiki/Dranek',
        name: 'Dranek',
        assets: [
          {
            id: 'ckq18pm6o0080rkvag4br5rmi',
            location: 'Rothla',
            asset: 'Shadow Broker Wet Squad',
            link: '/wiki/War_Assets/Alien#Shadow_Broker_Wet_Squad',
          },
          {
            id: 'ckq18pm6o0083rkva0v1k55yz',
            location: 'Southeast of star, between second and third ring',
            asset: 'Wreckage - 200 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18ps2z00igrkva4ay7by9f',
            name: 'Dor',
            location: 1,
          },
          {
            id: 'ckq18ps2z00ihrkva9z5257v9',
            name: 'Kelim',
            location: 2,
          },
          {
            id: 'ckq18ps2z00iirkvag4de00ke',
            name: 'Rothla',
            location: 3,
          },
          {
            id: 'ckq18ps2z00ijrkvaezhsfgg8',
            name: 'Sazgoth',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6o0085rkvaeew93eyg',
        link: '/wiki/Nith',
        name: 'Nith',
        assets: [
          {
            id: 'ckq18pm6o0086rkva0kt9fvex',
            location: 'Northeast of star, between first and second ring',
            asset: 'Wreckage - 300 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0004rkvab6jr6ufp',
  },
  {
    id: 'ckq18pm6o0087rkva6rms4faq',
    link: '/wiki/Minos_Wasteland',
    name: 'Minos Wasteland',
    systems: [
      {
        id: 'ckq18pm6o0088rkva1d8e5xr9',
        link: '/wiki/Fortis',
        name: 'Fortis',
        assets: [
          {
            id: 'ckq18pm6o0089rkvahabldp0t',
            location: 'South of Mass Relay',
            asset: 'Wreckage - 200 fuel',
          },
          {
            id: 'ckq18pm6p008crkvaczwzcak8',
            location: 'Pietas',
            asset: 'Salvage - 10,000 credits',
          },
        ],
        locations: [
          {
            id: 'ckq18psc000ikrkvagm8s5h3p',
            name: 'Aequitas',
            location: 1,
          },
          {
            id: 'ckq18psc000ilrkvaeb6o2ow9',
            name: 'Pietas',
            location: 2,
          },
          {
            id: 'ckq18psc000imrkva20ck0pr0',
            name: 'Vir',
            location: 3,
          },
        ],
        relay: true,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0003rkva8yni2092',
  },
  {
    id: 'ckq18pm6p008drkva6acz0gfp',
    link: '/wiki/Nimbus_Cluster',
    name: 'Nimbus Cluster',
    systems: [
      {
        id: 'ckq18pm6p008erkvaci85917p',
        link: '/wiki/Agaiou',
        name: 'Agaiou',
        assets: [
          {
            id: 'ckq18pm6p008frkva49mr9hls',
            location: 'Carcosa',
            asset: 'Artifact: Library of Asha',
            link: '/wiki/Nimbus_Cluster:_Library_of_Asha',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6p008hrkva50638p55',
        link: '/wiki/Kallini',
        name: 'Kallini',
        assets: [
          {
            id: 'ckq18pm6p008irkvagodk18lk',
            location: 'South of Pania',
            asset: 'Wreckage - 300 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6p008krkvaf2f53jyd',
        link: '/wiki/Pelion',
        name: 'Pelion',
        assets: [
          {
            id: 'ckq18pm6p008lrkvahj3n0l0l',
            location: 'South of Aitis',
            asset: 'Wreckage - 650 fuel',
          },
          {
            id: 'ckq18pm6p008orkvahm355crz',
            location: 'Trategos',
            asset: 'Intel: Intact Reaper Weapon',
            link: '/wiki/Intel_Terminal#Intact_Reaper_Weapon',
          },
          {
            id: 'ckq18pm6p008rrkva8g4t27o8',
            location: 'Northeast of Trategos',
            asset: 'Wreckage - 750 fuel',
          },
          {
            id: 'ckq18pm6q008urkva1iiph4ma',
            location: 'Northwest of Sthenia',
            asset: 'Wreckage - 750 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18psp100inrkvae7g1dzfd',
            name: 'Aitis',
            location: 1,
          },
          {
            id: 'ckq18psp100iorkva6sxwh9mf',
            name: 'Sthenia',
            location: 2,
          },
          {
            id: 'ckq18psp100iprkvab6lo6at9',
            name: 'Trategos',
            location: 3,
          },
          {
            id: 'ckq18psp100iqrkva5om906rz',
            name: 'Zosteros',
            location: 4,
          },
        ],
        relay: true,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr0008rkva6l6zhw1z',
  },
  {
    id: 'ckq18pm6q008vrkvabbbp95ab',
    link: '/wiki/Nubian_Expanse',
    name: 'Nubian Expanse',
    systems: [
      {
        id: 'ckq18pm6q008wrkvagna6b7e5',
        link: '/wiki/Dakka',
        name: 'Dakka',
        assets: [
          {
            id: 'ckq18pm6q008xrkva4z289j4o',
            location: 'Pragia',
            asset: 'Intel: Research Data from Pragia',
            link: '/wiki/Intel_Terminal#Research_Data_From_Pragia',
          },
          {
            id: 'ckq18pm6q0090rkva3be349d5',
            location: 'Southeast of star, between 3rd and 4th ring.',
            asset: 'Wreckage - 350 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pswl00irrkva2m2haz3p',
            name: 'Alkonost',
            location: 1,
          },
          {
            id: 'ckq18pswm00isrkvagcceevs3',
            name: 'Bannik',
            location: 2,
          },
          {
            id: 'ckq18pswm00itrkva9lgzgz3n',
            name: 'Gamayun',
            location: 3,
          },
          {
            id: 'ckq18pswm00iurkvaav75c0ca',
            name: 'Pragia',
            location: 4,
          },
          {
            id: 'ckq18pswm00ivrkvacznt4evz',
            name: 'Zirnitra',
            location: 5,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6q0092rkva89bahksm',
        link: '/wiki/Kalabsha',
        name: 'Kalabsha',
        assets: [
          {
            id: 'ckq18pm6q0093rkvadvtv3zuo',
            location: 'Yamm',
            asset: 'Alliance Marine Recon Unit, 103rd Marine Division',
            link: '/wiki/War_Assets/Alliance#103rd_Marine_Division',
          },
          {
            id: 'ckq18pm6q0096rkvagf2t75u4',
            location: 'Northeast of star, between 1st and 2nd ring',
            asset: 'Wreckage - 300 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6r0098rkva9ybo6hpv',
        link: '/wiki/Qertassi',
        name: 'Qertassi',
        assets: [
          {
            id: 'ckq18pm6r0099rkva9so8684g',
            location: 'Norehsa',
            asset: 'Alliance Frigate Trafalgar, Alliance Third Fleet',
            link: '/wiki/War_Assets/Alliance#Alliance_Third_Fleet',
          },
          {
            id: 'ckq18pm6r009crkva7wnu4un5',
            location: 'Northeast of Norehsa',
            asset: 'Wreckage - 50 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000frkvads1e2l6r',
  },
  {
    id: 'ckq18pm6r009drkvaaosx1q63',
    link: '/wiki/Pylos_Nebula',
    name: 'Pylos Nebula',
    systems: [
      {
        id: 'ckq18pm6r009erkvafyh6bxl1',
        link: '/wiki/Dirada',
        name: 'Dirada',
        assets: [
          {
            id: 'ckq18pm6r009frkva16232v37',
            location: 'Sineus',
            asset: 'Radiation Shielding Sheath1',
            link: '/wiki/War_Assets/Crucible#Radiation_Shielding_Sheath',
          },
          {
            id: 'ckq18pm6r009irkva14gx1422',
            location: 'Northeast of the star and south-southeast of Sineus',
            asset: 'Wreckage - 250 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18pt9a00iwrkvactu19jw1',
            name: 'Canalus',
            location: 1,
          },
          {
            id: 'ckq18pt9a00ixrkvaeprbc8dy',
            name: 'Siano',
            location: 2,
          },
          {
            id: 'ckq18pt9a00iyrkva0qkefepv',
            name: 'Sineus',
            location: 3,
          },
          {
            id: 'ckq18pt9a00izrkva5f9n0rvo',
            name: 'Thenusi',
            location: 4,
          },
          {
            id: 'ckq18pt9a00j0rkvaasmu1op5',
            name: 'Vioresa',
            location: 5,
          },
          {
            id: 'ckq18pt9a00j1rkva50tob5vn',
            name: 'Zeth',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6r009krkva0epk1xbr',
        link: '/wiki/Nariph',
        name: 'Nariph',
        assets: [
          {
            id: 'ckq18pm6r009lrkva5snp36yt',
            location: 'Isale',
            asset: 'Jovian Dissertation1',
            link: '/wiki/War_Assets/Crucible#Jovian_Dissertation',
          },
          {
            id: 'ckq18pm6r009orkva1oc6avom',
            location: 'Northeast of the star, between first and second ring',
            asset: 'Wreckage - 300 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18ptcd00j2rkva0sdad7o4',
            name: 'Isale',
            location: 1,
          },
          {
            id: 'ckq18ptcd00j3rkva4pdd549l',
            name: 'Jonus',
            location: 2,
          },
          {
            id: 'ckq18ptcd00j4rkvaejuh4nsd',
            name: 'MSV Broken Arrow',
            location: 3,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6s009qrkvahz4t57bo',
        link: '/wiki/Zaherin',
        name: 'Zaherin',
        assets: [
          {
            id: 'ckq18pm6s009rrkvahvip26e4',
            location:
              'South of the outermost planet Rotesk, just outside third ring',
            asset: 'Wreckage - 350 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18ptfh00j5rkvaca9k8enc',
            name: 'Azrahas',
            location: 1,
          },
          {
            id: 'ckq18ptfh00j6rkva29qz6f9f',
            name: 'Ehstag',
            location: 2,
          },
          {
            id: 'ckq18ptfh00j7rkvafonf6s0z',
            name: 'Namakli',
            location: 3,
          },
          {
            id: 'ckq18ptfh00j8rkva9ghq7gaz',
            name: 'Rotesk',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000krkvadfb2036b',
  },
  {
    id: 'ckq18pm6s009srkva6gj44kw1',
    link: '/wiki/The_Shrike_Abyssal',
    name: 'The Shrike Abyssal',
    systems: [
      {
        id: 'ckq18pm6s009trkva85hsc98u',
        link: '/wiki/Kyzil',
        name: 'Kyzil',
        assets: [
          {
            id: 'ckq18pm6s009urkvagyo2bx6z',
            location: 'Heshtok',
            asset: 'Void Devils Fighter Wing1',
            link: '/wiki/War_Assets/Alien#Void_Devils_Fighter_Wing',
          },
          {
            id: 'ckq18pm6s009xrkvaa9b5hfi5',
            location: 'South of Rustaka',
            asset: 'Wreckage - 350 fuel1',
            link: '#Leviathan',
          },
        ],
        locations: [
          {
            id: 'ckq18ptmg00j9rkvagl3s5u6w',
            name: 'Naskral',
            location: 1,
          },
          {
            id: 'ckq18ptmg00jarkvadidoas2a',
            name: 'Heshtok',
            location: 2,
          },
          {
            id: 'ckq18ptmg00jbrkvafeqg73ji',
            name: 'Parasc',
            location: 3,
          },
          {
            id: 'ckq18ptmg00jcrkva7gwbeef3',
            name: 'Lihrat',
            location: 4,
          },
          {
            id: 'ckq18ptmg00jdrkva1swy42x7',
            name: 'Rustaka',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6s009zrkva0rjag1jn',
        link: '/wiki/Thal',
        name: 'Thal',
        assets: [
          {
            id: 'ckq18pm6s00a0rkva0c4l2088',
            location: 'West of the star, between first and second ring',
            asset: 'Wreckage - 400 fuel1',
            link: '#Leviathan',
          },
          {
            id: 'ckq18pm6s00a3rkva56l49eny',
            location: 'Tyrix (North part of the asteroid belt closest to star)',
            asset: 'Vorcha Labor Team1',
            link: '/wiki/War_Assets/Alien#Vorcha_Labor_Team',
          },
        ],
        locations: [
          {
            id: 'ckq18ptpk00jerkvabiza4oit',
            name: 'Altakiril',
            location: 1,
          },
          {
            id: 'ckq18ptpk00jfrkva32vsciik',
            name: 'Garan',
            location: 2,
          },
          {
            id: 'ckq18ptpk00jgrkvahe5a10xj',
            name: 'Rakari Belt',
            location: 3,
          },
          {
            id: 'ckq18ptpk00jhrkva1015dyik',
            name: 'Sarait',
            location: 4,
          },
          {
            id: 'ckq18ptpk00jirkvag3b64gzs',
            name: 'Tyrix',
            location: 5,
          },
          {
            id: 'ckq18ptpk00jjrkvahims9vpi',
            name: 'Virits',
            location: 6,
          },
          {
            id: 'ckq18ptpk00jkrkvacldm76dz',
            name: 'Xerceo',
            location: 7,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6t00a5rkva4t7z7mej',
        link: '/wiki/Urla_Rast',
        name: 'Urla Rast',
        assets: [
          {
            id: 'ckq18pm6t00a6rkva2dw2cio4',
            location: 'Talis Fia',
            asset: 'Artifact: Prothean Obelisk',
            link: '/wiki/Shrike_Abyssal:_Prothean_Obelisk',
          },
          {
            id: 'ckq18pm6t00a9rkva20q7gx8m',
            location: 'Northeast of star near outermost orbital ring',
            asset: 'Wreckage - 300 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18ptsz00jlrkva6t212o7e',
            name: 'Bovis Tor',
            location: 1,
          },
          {
            id: 'ckq18ptsz00jmrkva7ooy0ca9',
            name: 'Doz Atab',
            location: 2,
          },
          {
            id: 'ckq18ptsz00jnrkva6suy1tcb',
            name: 'Rosh',
            location: 3,
          },
          {
            id: 'ckq18ptsz00jorkva4yovgwz0',
            name: 'Talis Fia',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6t00abrkvab2kc9h6d',
        link: '/wiki/Xe_Cha',
        name: 'Xe Cha',
        assets: [
          {
            id: 'ckq18pm6t00acrkva1zixgfqj',
            location: 'Zada Ban',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6t00afrkva581862qk',
            location: 'Southeast of star, between second and third ring',
            asset: 'Wreckage - 150 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18ptw200jprkva5sox1hby',
            name: 'Aphras',
            location: 1,
          },
          {
            id: 'ckq18ptw200jqrkva9osvc383',
            name: 'Tosal Nym',
            location: 2,
          },
          {
            id: 'ckq18ptw200jrrkvaamlvaetu',
            name: 'Vem Osca',
            location: 3,
          },
          {
            id: 'ckq18ptw200jsrkva4z944j76',
            name: 'Zada Ban',
            location: 4,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr0003rkva8yni2092',
  },
  {
    id: 'ckq18pm6t00agrkvabhi39o42',
    link: '/wiki/Sigurd%27s_Cradle',
    name: "Sigurd's Cradle",
    systems: [
      {
        id: 'ckq18pm6t00ahrkva2qwq5ktd',
        link: '/wiki/Decoris',
        name: 'Decoris',
        assets: [
          {
            id: 'ckq18pm6t00airkvaf732dny6',
            location: 'Laena',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6t00alrkva0xnag9j9',
            location: 'Southern part of Decoris between the orbital rings',
            asset: 'Wreckage - 350 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6u00anrkva3xeeapok',
        link: '/wiki/Lenal',
        name: 'Lenal',
        assets: [
          {
            id: 'ckq18pm6u00aorkva8x232dyd',
            location: 'Triginta Petra',
            asset: 'Dextro Rations1',
            link: '/wiki/War_Assets/Turian#Dextro_Rations',
          },
        ],
        locations: [
          {
            id: 'ckq18pu5v00jtrkva0yuyenam',
            name: 'Choitadix',
            location: 1,
          },
          {
            id: 'ckq18pu5v00jurkva0rf221c2',
            name: 'Laconix',
            location: 2,
          },
          {
            id: 'ckq18pu5v00jvrkvac0ye799v',
            name: 'Nutus',
            location: 3,
          },
          {
            id: 'ckq18pu5v00jwrkvae5au0twm',
            name: 'Triginta Petra',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6u00aqrkva9vaz1kw5',
        link: '/wiki/Mil',
        name: 'Mil',
        assets: [
          {
            id: 'ckq18pm6u00arrkva70bufe95',
            location: 'Chalkhos',
            asset: 'Husk Neural Map1',
            link: '/wiki/War_Assets/Asari#Husk_Neural_Map',
          },
        ],
        locations: [
          {
            id: 'ckq18pu9900jxrkva1y7719oj',
            name: 'Akraia',
            location: 1,
          },
          {
            id: 'ckq18pu9900jyrkva3t95g4h0',
            name: 'Chalkhos',
            location: 2,
          },
          {
            id: 'ckq18pu9900jzrkva8qwp620p',
            name: 'Lisir',
            location: 3,
          },
          {
            id: 'ckq18pu9900k0rkvabwfhh4nc',
            name: 'Mylasi',
            location: 4,
          },
          {
            id: 'ckq18pu9900k1rkvad3dlhumk',
            name: 'Selvos',
            location: 5,
          },
          {
            id: 'ckq18pu9900k2rkva0jo7gwj2',
            name: 'Terapso',
            location: 6,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6u00atrkva0dh7cb98',
        link: '/wiki/Skepsis',
        name: 'Skepsis',
        assets: [
          {
            id: 'ckq18pm6u00aurkva6156422j',
            location: 'Watson',
            asset: 'Javelin Missile Launchers',
            link: '/wiki/War_Assets/Crucible#Javelin_Missile_Launchers',
          },
          {
            id: 'ckq18pm6u00axrkvafilc41iq',
            location: 'East-northeast of Crick, near outermost ring',
            asset: 'Wreckage - 200 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18puch00k3rkva2yqv16j4',
            name: 'Crick',
            location: 1,
          },
          {
            id: 'ckq18puch00k4rkva1gw8dkn8',
            name: 'Darwin',
            location: 2,
          },
          {
            id: 'ckq18puch00k5rkva514a0srj',
            name: 'Franklin',
            location: 3,
          },
          {
            id: 'ckq18puch00k6rkvacohceec4',
            name: 'Keimowitz',
            location: 4,
          },
          {
            id: 'ckq18puch00k7rkvaeq3i6wr0',
            name: 'Pauling',
            location: 5,
          },
          {
            id: 'ckq18puci00k8rkva5uf46ayc',
            name: 'Wallace',
            location: 6,
          },
          {
            id: 'ckq18puci00k9rkva77gq8qq8',
            name: 'Watson',
            location: 7,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr0002rkvah8dg2195',
  },
  {
    id: 'ckq18pm6u00ayrkvah1eh2oim',
    link: '/wiki/Silean_Nebula',
    name: 'Silean Nebula',
    systems: [
      {
        id: 'ckq18pm6u00azrkva3ggy7xjg',
        link: '/wiki/Kypladon',
        name: 'Kypladon',
        assets: [
          {
            id: 'ckq18pm6u00b0rkva3saa0k9f',
            location: 'Hanalei',
            asset: 'Dr. Jelize',
            link: '/wiki/War_Assets/Asari#Dr._Jelize',
          },
        ],
        locations: [
          {
            id: 'ckq18puj700karkva18z73um3',
            name: 'Cyone',
            location: 1,
          },
          {
            id: 'ckq18puj700kbrkva7rnx497t',
            name: 'Hanalei',
            location: 2,
          },
          {
            id: 'ckq18puj700kcrkvac4zlauzd',
            name: 'Katebolo',
            location: 3,
          },
          {
            id: 'ckq18puj700kdrkva6pce5dhq',
            name: 'Tropai',
            location: 4,
          },
        ],
        relay: true,
        depot: true,
      },
      {
        id: 'ckq18pm6v00b2rkva6axy0kzw',
        link: '/wiki/Loropi',
        name: 'Loropi',
        assets: [
          {
            id: 'ckq18pm6v00b3rkvafl0g9rds',
            location: 'East of Wreckage, just outside 1st ring',
            asset: 'Wreckage - 300 fuel',
          },
          {
            id: 'ckq18pm6v00b6rkvagf048r78',
            location: 'Yasilium',
            asset: 'Armali Sniper Unit',
            link: '/wiki/War_Assets/Asari#Armali_Sniper_Unit',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6v00b8rkvae3v85yaw',
        link: '/wiki/Nahuala',
        name: 'Nahuala',
        assets: [
          {
            id: 'ckq18pm6v00b9rkva4fjn1sqd',
            location: 'Hyetiana',
            asset: 'Serrice Guard',
            link: '/wiki/War_Assets/Asari#Serrice_Guard',
          },
          {
            id: 'ckq18pm6v00bcrkvagpnc54re',
            location: 'West of Agessia, between 2nd ring and asteroid belt',
            asset: 'Wreckage - 250 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6v00berkva3t1g6blf',
        link: '/wiki/Phontes',
        name: 'Phontes',
        assets: [
          {
            id: 'ckq18pm6v00bfrkvagdss2v7s',
            location: 'Dekuuna',
            asset: 'Artifact: Code of the Ancients',
            link: '/wiki/Dekuuna:_Code_of_the_Ancients',
          },
          {
            id: 'ckq18pm6w00birkvagi3y4xhc',
            location: 'Oltan',
            asset: 'Elcor Flotilla',
            link: '/wiki/Elcor',
          },
          {
            id: 'ckq18pm6w00blrkva2s49ck4u',
            location:
              'East of Lenamund - South of Telluune, between second and third rings',
            asset: 'Wreckage - 175 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pusn00kerkvafuekg6b5',
            name: 'Dekuuna',
            location: 1,
          },
          {
            id: 'ckq18pusn00kfrkvacsf93z28',
            name: 'Lenuamund',
            location: 2,
          },
          {
            id: 'ckq18pusn00kgrkva6j5dcrl1',
            name: 'Oltan',
            location: 3,
          },
          {
            id: 'ckq18pusn00khrkvac5w52qrx',
            name: 'Sangel',
            location: 4,
          },
          {
            id: 'ckq18pusn00kirkvabpp02j30',
            name: 'Telluune',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6w00bnrkvadwkp6w6e',
        link: '/wiki/Teyolia',
        name: 'Teyolia',
        assets: [
          {
            id: 'ckq18pm6w00borkvaeaf7a051',
            location: 'Nevos',
            asset: 'Artifact: Rings of Alune',
            link: '/wiki/Silean_Nebula:_Rings_of_Alune',
          },
          {
            id: 'ckq18pm6w00brrkva0g335eot',
            location: 'Quirezia',
            asset: 'Salvage - 10,000 credits',
          },
          {
            id: 'ckq18pm6w00burkva705r5p59',
            location: 'East-southeast of star - between 3rd and 4th ring',
            asset: 'Wreckage - 375 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18puw100kjrkvahdddhepr',
            name: 'Atebolos',
            location: 1,
          },
          {
            id: 'ckq18puw100kkrkva6phz1y7e',
            name: 'Loxia',
            location: 2,
          },
          {
            id: 'ckq18puw100klrkvabyzzb2br',
            name: 'Nevos',
            location: 3,
          },
          {
            id: 'ckq18puw100kmrkva5n2y6tjp',
            name: 'Quirezia',
            location: 4,
          },
        ],
        relay: false,
        depot: false,
      },
    ],
    requirement: 'ckq18plxr000drkvaauxb6dk7',
  },
  {
    id: 'ckq18pm6x00bvrkva9or99t0i',
    link: '/wiki/Valhallan_Threshold',
    name: 'Valhallan Threshold',
    systems: [
      {
        id: 'ckq18pm6x00bwrkva37tvh042',
        link: '/wiki/Micah',
        name: 'Micah',
        assets: [
          {
            id: 'ckq18pm6x00bxrkvacw417eg1',
            location: 'Elohi',
            asset: 'Emergency Fuel Pods',
            link: '/wiki/War_Assets/Crucible#Emergency_Fuel_Pods',
          },
          {
            id: 'ckq18pm6x00c0rkva2bt5bskh',
            location: 'Farlas (in asteroid belt)',
            asset: 'Element Zero Converter',
            link: '/wiki/War_Assets/Crucible#Element_Zero_Converter',
          },
          {
            id: 'ckq18pm6y00c3rkvadf4dd8cx',
            location: 'Southeast of star, near asteroid belt',
            asset: 'Wreckage - 340 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pvw100knrkvaa7o62qr8',
            name: 'Dumah',
            location: 1,
          },
          {
            id: 'ckq18pvw100korkvag9x91sv9',
            name: 'Elohi',
            location: 2,
          },
          {
            id: 'ckq18pvw100kprkvahe6lgkyt',
            name: 'Farlas',
            location: 3,
          },
          {
            id: 'ckq18pvw100kqrkva87lmg6x5',
            name: 'Israfil',
            location: 4,
          },
          {
            id: 'ckq18pvw100krrkvaagwf3gbk',
            name: 'Kakabel',
            location: 5,
          },
        ],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6y00c5rkvacs0s9lza',
        link: '/wiki/Paz',
        name: 'Paz',
        assets: [
          {
            id: 'ckq18pm6y00c6rkva5d4d6t2z',
            location: 'Garvug',
            asset: 'Artifact: Prothean Data Disks',
            link: '/wiki/Valhallan_Threshold:_Prothean_Data_Drives',
          },
          {
            id: 'ckq18pm6y00c9rkvagu074e55',
            location: 'East of star',
            asset: 'Wreckage - 160 fuel',
          },
        ],
        locations: [],
        relay: false,
        depot: false,
      },
      {
        id: 'ckq18pm6y00cbrkvagp4rhg72',
        link: '/wiki/Raheel-Leyya',
        name: 'Raheel-Leyya',
        assets: [
          {
            id: 'ckq18pm6y00ccrkva2btebrq8',
            location: 'Northeast of larger star',
            asset: 'Wreckage - 95 fuel',
          },
        ],
        locations: [
          {
            id: 'ckq18pw1r00ksrkva8uy0e51i',
            name: 'The Migrant Fleet',
            location: 1,
          },
        ],
        relay: true,
        depot: true,
      },
    ],
    requirement: 'ckq18plxr0008rkva6l6zhw1z',
  },
]

export default searchAndRescues

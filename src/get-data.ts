const axios = require('axios')
const cheerio = require('cheerio')
const cuid = require('cuid')
const fs = require('fs/promises')

const getMissions = () => {
  return [
    { id: cuid(), name: 'Prologue: Earth' },
    { id: cuid(), name: 'Priority: Mars' },
    { id: cuid(), name: 'Priority: The Citadel I' },
    { id: cuid(), name: 'Priority: Palaven' },
    { id: cuid(), name: "Priority: Sur'Kesh" },
    { id: cuid(), name: 'Attican Traverse: Krogan Team' },
    { id: cuid(), name: 'Tuchanka: Turian Platoon' },
    { id: cuid(), name: 'Priority: Tuchanka' },
    { id: cuid(), name: 'Priority: The Citadel II' },
    { id: cuid(), name: 'Priority: Perseus Veil' },
    { id: cuid(), name: 'Priority: Geth Dreadnought' },
    { id: cuid(), name: 'Rannoch: Admiral Koris' },
    { id: cuid(), name: 'Rannoch: Geth Fighter Squadrons' },
    { id: cuid(), name: 'Priority: Rannoch' },
    { id: cuid(), name: 'Priority: The Citadel III' },
    { id: cuid(), name: 'Priority: Thessia' },
    { id: cuid(), name: 'Priority: Horizon' },
    { id: cuid(), name: 'Priority: Cerberus Headquarters' },
    { id: cuid(), name: 'Priority: Earth' },
    { id: cuid(), name: 'Leviathan: Find Garneau' },
    { id: cuid(), name: 'Leviathan: Find Ann Bryson' },
    { id: cuid(), name: 'Ismar Frontier: Prototype Components' },
  ]
}

const types = `
  export interface Planet {
    id: string;
    name: string;
    location: number;
  }

  export interface WarAsset {
    id: string;
    location: string;
    asset: string;
    link?: string | null;
  }

  export interface System {
    id: string;
    name: string;
    link?: string;
    assets: WarAsset[];
    locations: Planet[];
    relay: Boolean;
    depot: Boolean;
  }

  export interface SearchAndRescue {
    id: string;
    name: string;
    link?: string;
    requirement?: string | null;
    systems: System[];
  }
`

const site = axios.create({
  baseURL: 'https://masseffect.fandom.com',
})

interface Cluster extends Object {
  [key: string]: any
}

const getCluster = (cluster: Object, $: any) => {
  const clusterEl = $(cluster).find('a')
  return {
    id: cuid(),
    link: clusterEl.attr('href') as string,
    name: clusterEl.attr('title') as string,
    systems: {},
    requirement: null,
  }
}

const getSystem = (system: Object, $: any) => {
  const systemEl = $(system).find('a')
  return {
    id: cuid() as string,
    link: systemEl.attr('href') as string,
    name: systemEl.attr('title') as string,
    assets: [],
    locations: [],
    relay: false,
  }
}

const getAsset = (location: Object, asset: Object, $: any) => {
  const locationEl = $(location)
  const assetEl = $(asset)
  return {
    id: cuid() as string,
    location: locationEl.text().replace(/\n/, '') as string,
    asset: assetEl.text().replace(/\n/, '') as string,
    link: assetEl.find('a').attr('href') as string,
  }
}

async function main() {
  const missions = getMissions()
  const { data } = await site.get('/wiki/Search_and_Rescue')
  const $ = cheerio.load(data)
  const tableRows = $('table.wikitable.sortable tbody tr')

  const clusters: Cluster = {}

  for (const rowNode of tableRows) {
    if (rowNode.name === 'tr' && rowNode.children.length) {
      const rowEl = $(rowNode)
      const [cluster, system, location, asset] = rowEl.find('td').toArray()
      const clusterObj = getCluster(cluster, $)
      const systemObj = getSystem(system, $)
      const assetObj = getAsset(location, asset, $)

      if (!clusters[clusterObj.name]) {
        clusters[clusterObj.name] = clusterObj
      }

      if (!clusters[clusterObj.name].systems[systemObj.name]) {
        clusters[clusterObj.name].systems[systemObj.name] = systemObj
      }

      if (
        clusters[clusterObj.name].systems[systemObj.name].assets.findIndex(
          (a: any) => a.location === assetObj.location,
        ) < 0
      ) {
        clusters[clusterObj.name].systems[systemObj.name].assets.push(assetObj)
      }
    }
  }

  const clusterArray = Object.keys(clusters)
    .map((key: string) => clusters[key])
    .filter(c => !!c.name)

  for await (const cluster of clusterArray) {
    if (cluster.link) {
      const { data } = await site.get(cluster.link)
      const clusterPage = cheerio.load(data)
      const priority = clusterPage("b:contains('Prerequisite:')")
        .last()
        .parent()
        .find('a')
      const priorityTitle = priority.attr('title')
      if (priorityTitle) {
        const priorityId = missions.find(
          (m: any) => m.name === priorityTitle,
        )?.id
        cluster.requirement = priorityId
      }
    }
    const systems = Object.keys(cluster.systems).map(
      (key: string) => cluster.systems[key],
    )
    const systemArray = []

    for await (const system of systems) {
      if (system.link) {
        const { data } = await site.get(system.link)
        const systemPage = cheerio.load(data)
        const contents = systemPage('#toc ul li.toclevel-1 a .toctext')
          .toArray()
          .map((i: any) => systemPage(i).text())
          .filter((text: string) => text !== 'Trivia')
        const hasRelay = contents
          .map((c: string) => c.toLowerCase())
          .includes('mass relay')
        system.relay = hasRelay
        const hasDepot = contents
          .map((c: string) => c.toLowerCase())
          .includes('fuel depot')
        system.depot = hasDepot

        system.locations = contents
          .filter(
            (c: string) =>
              c.toLowerCase() !== 'fuel depot' &&
              c.toLowerCase() !== 'mass relay',
          )
          .map((c: string, index: number) => ({
            id: cuid(),
            name: c,
            location: index + 1,
          }))
      }
      systemArray.push(system)
    }
    cluster.systems = systemArray
  }
  const content = `
    ${types}

    const searchAndRescues: SearchAndRescue[] = ${JSON.stringify(
      clusterArray,
      null,
      2,
    )}

    export default searchAndRescues;
  `
  await fs.writeFile('./src/search-and-rescue.ts', content, { flag: 'w+' })
  await fs.writeFile(
    './src/missions.ts',
    `export default ${JSON.stringify(missions, null, 2)}`,
    { flag: 'w+' },
  )
}

main()

import { computed, onMounted, ref, watch } from 'vue'
import searchAndRescue from '../search-and-rescue'
import useMissions from './useMissions'

interface Selected {
  [key: string]: {
    checked: boolean;
    partialChecked: boolean;
  }
}

const completed = ref<Selected | null>(null)

export default function useSearchAndRescue() {
  const { completed: completedMissions, missions } = useMissions()

  onMounted(() => {
    if (!completed.value) {
      const local: Selected = JSON.parse(localStorage.getItem('searchAndRescueCompleted') || '{}')
      completed.value = local
    }
  })

  watch(completed, (newVal) => {
    localStorage.setItem('searchAndRescueCompleted', JSON.stringify(newVal))
  })

  const items = computed(() => {
    const missionsCompleted = completedMissions.value
    const getData = (item: any, type: string, fn = (i: any) => i.name) => ({
      completed: completed.value?.[item.id]?.checked || completed.value?.[item.id]?.partialChecked,
      name: fn(item),
      link: item.link,
      requirement: missions.find(m => m.id === item.requirement) || null,
      requirementMet: missionsCompleted.findIndex(c => c.id === item.requirement) >= 0,
      type,
    })

    return searchAndRescue.map(cluster => {
      const key = cluster.id
      const data = getData(cluster, 'cluster')

      const children = cluster.systems.map(system => {
        const key = system.id
        const data = getData(system, 'system')
        const children = system.assets.map(asset => {
          const key = asset.id
          const data = getData(asset, 'asset', (item) => {
            return `${item.location} - ${item.asset}`
          })
          return {
            key,
            data,
          }
        })

        return {
          key,
          data,
          children,
        }
      })

      return {
        key,
        data,
        children,
      }
    })
  })

  return {
    completed,
    items,
  }
}
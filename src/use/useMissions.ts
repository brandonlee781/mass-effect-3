import { ref, computed } from '@vue/reactivity'
import { onMounted, watch } from 'vue'
import missions from '../missions'

export interface Mission {
  id: string;
  name: string
}

const completed = ref<Mission[]>([])
export default function useMissions() {
  onMounted(() => {
    if (!completed.value?.length) {
      const local: Mission[] = JSON.parse(localStorage.getItem('missionsCompleted') || '[]')
      completed.value = local
    }
  })

  watch(completed, (newVal) => {
    localStorage.setItem('missionsCompleted', JSON.stringify(newVal))
  })

  return {
    completed,
    missions,
  }
}
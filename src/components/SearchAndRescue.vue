<template>
  <TreeTable v-model:selectionKeys="completed" :value="items" :filters="filters" filterMode="lenient" selectionMode="checkbox" sortMode="single">
    <template #header>
        <div class="p-text-right">
            <div class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
            </div>
        </div>
    </template>
    <Column field="name" header="Name" :expander="true" :sortable="true">
      <template #body="{ node: { data } }">
        <a v-if="data.link" target="_blank" :href="`https://masseffect.fandom.com/${data.link}`" >
          {{ data.name }}
        </a>
        <span v-else>
          {{ data.name }}
        </span>
      </template>
    </Column>
    <Column field="requirement" header="Requirement" :sortable="true">
      <template #body="{ node: { data } }">
        <span :class="{ req: true, 'is-met': data.requirementMet }">
          {{ data.requirement && data.requirement.name }}
        </span>
      </template>
    </Column>
    <Column header="Completed" headerStyle="width:8rem;">
      <template #body="{ node: { children, data } }">
        {{ getPercentCompleted(children, data.type) }}
      </template>
    </Column>
  </TreeTable>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSearchAndRescue from '../use/useSearchAndRescue'

interface PercentChildren {
  data: { completed: boolean };
  children: PercentChildren[];
}

export default defineComponent({
  name: 'SearchAndRescue',
  setup(/*props, ctx*/) {
    const filters = ref({ global: '' })
    const { completed, items } = useSearchAndRescue()

    const getPercentCompleted = (children: PercentChildren[], type: string) => {
      if (!children?.length || type === 'asset') return ''
      let total = 0
      let completed = 0

      if (type === 'system') {
        total = children.length
        completed = children.filter((c) => c.data.completed).length
      }

      if (type === 'cluster') {
        const grandchildren = children.map(c => c.children).reduce((a, b) => a.concat(b), []).filter(Boolean)
        total = grandchildren.length ? grandchildren.length : 0
        completed = grandchildren.length ? grandchildren.filter(g => g.data.completed).length : 0
      }

      return `${(100 * (completed / total)).toFixed(0)}%`
    }

    return { filters, completed, items, getPercentCompleted };
  },
});
</script>

<style lang="scss" scoped>
.req {
  color: red;

  &.is-met {
    color: black;
  }
}
</style>

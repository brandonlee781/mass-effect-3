<template>
  <DataTable v-model:selection="completed" :value="missions" dataKey="id" responsiveLayout="scroll" >
    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
    <Column field="name" header="Name"></Column>
  </DataTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMissions from '../use/useMissions';

export default defineComponent({
  name: 'Missions',
  setup(/*props, ctx*/) {
    const { completed, missions } = useMissions()
    return { completed, missions };
  },
});
</script>

<style lang="scss" scoped>

</style>

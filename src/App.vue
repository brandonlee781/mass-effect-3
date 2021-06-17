<template>
  <TabView>
    <TabPanel header="Missions">
      <Missions />
    </TabPanel>
    <TabPanel header="Search and Rescue">
      <SearchAndRescue />
    </TabPanel>
  </TabView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Missions from './components/Missions.vue'
import SearchAndRescue from './components/SearchAndRescue.vue'

export default defineComponent({
  name: 'App',
  components: {
    Missions,
    SearchAndRescue
  },
})
</script>

<style>

</style>

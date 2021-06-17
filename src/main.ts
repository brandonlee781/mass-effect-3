import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';    

const app = createApp(App)

app.use(PrimeVue)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('TreeTable', TreeTable)
app.component('Column', Column)
app.component('DataTable', DataTable)
app.component('InputText', InputText)

app.mount('#app')

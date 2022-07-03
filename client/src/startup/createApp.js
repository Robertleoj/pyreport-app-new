/* === Vue === */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';

/* === Plugins === */
// import './plugins';
import {default as vuetify} from './vuetify';

/* === Main App === */
// import App from '../../ui/components/App.vue';
import router from './routes';

import App from '/src/components/App';
// import LoadScript from 'vue-plugin-load-script';

Vue.use(VueRouter);
Vue.use(Vuetify);
// Vue.use(LoadScript);

// console.log(vuetify)

function createApp() {
    const app = new Vue({
        vuetify,
        router,
        render: h => h(App),
    });

    return {
        app: app.$mount('#app')
    }
}

export default createApp;

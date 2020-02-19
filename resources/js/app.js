require('./bootstrap');

import Vue from 'vue'
import { InertiaApp } from '@inertiajs/inertia-vue'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import './loader.scss'

Vue.config.productionTip = false
// Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp);

let app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)

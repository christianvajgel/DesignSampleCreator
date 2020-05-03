import Vue from 'vue'
import VueRouter from 'vue-router'
import DesignSamples from "@/components/DesignSamples";

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'DesignSamples',
            component:DesignSamples
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
});
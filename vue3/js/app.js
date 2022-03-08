var routes = [
    {path : '/', component: Home},
    {path : '/program', component: Program},
    {path : '/about', component: About},
    {path : '/contact', component: Contact},
];

var router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
var app = Vue.createApp({

    data(){
        return{
            judul: "Belajar Vue 3"
        }
    }
});
app.use(router);
app.mount('#app');
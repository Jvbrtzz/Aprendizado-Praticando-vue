import Categoria from "@/views/Categoria.vue";
import DadosIngredientes from "@/views/DadosIngredientes.vue";
import Ingredientes from "@/views/Ingredientes.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
        path:'/',
        name:'Categorias',
        component: Categoria

    },
    {
        path:'/i',
        name:'Ingredientes',
        component: Ingredientes
    },
    {
        path:'/c',
        name:'DadosIngredientes',
        component: DadosIngredientes
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;
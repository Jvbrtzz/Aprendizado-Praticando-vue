<template>
    <div class="dados-ingredientes">
        <h1>Lista de Ingredientes</h1>
        <ul>
            <li v-for="ingrediente in categoria" :key="ingrediente.id">
                <strong>{{ ingrediente.nome }}</strong> - {{ ingrediente.ingredientes }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { obterCategorias } from '@/http';

export default {
    name: "DadosIngredientes",
    setup() {
        const store = useStore();

        // Computed para acessar o estado da store
        const categoria = computed(() => store.state.categoria);

        // Busca os dados da API e atualiza a store
        const carregarCategorias = async () => {
            const categorias = await obterCategorias();
            categorias.forEach((cat) => {
                store.commit('SET_CATEGORIA', cat);
            });
        };

        // Carrega as categorias ao montar o componente
        onMounted(() => {
            carregarCategorias();
        });

        return {
            categoria,
        };
    },
};
</script>

<style scoped>
.dados-ingredientes {
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    color: #2c3e50;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #ecf0f1;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
<template>
    <div class="dados-ingredientes">
        <h1>Lista de Ingredientes</h1>
        <ul>
            <li v-for="ingrediente in categoria" :key="ingrediente.id">
                <strong>{{ ingrediente.nome }}</strong> - {{ ingrediente.ingredientes }}
                <button class="trash" @click="removerIngrediente(ingrediente.nome)">Apagar</button>
                <button class="edit" @click="abrirModal(ingrediente)">Editar</button>
            </li>
        </ul>
        <!-- Modal Component -->
        <ModalEditar
            :visivel="modalAberto"
            :ingredienteInicial="ingredienteEditado"
            @salvar="salvarEdicao"
            @fechar="fecharModal"
        />
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { REMOVE_INGREDIENTE, CLEAR_CATEGORIAS } from '@/store/mutations-type';
import { GET_CATEGORIA } from '@/store/actrion-type';
import ModalEditar from '@/modal/ModalEditar.vue';

export default {
    name: 'DadosIngredientes',
    components: {
        ModalEditar,
    },
    setup() {
        const store = useStore();

        // Computed para acessar o estado da store
        const categoria = computed(() => store.state.categoria);

        // Modal e edição
        const modalAberto = ref(false);
        const ingredienteEditado = ref({ nome: '' });

        const abrirModal = (ingrediente: { nome: string }) => {
            ingredienteEditado.value = { ...ingrediente }; // Atualiza o ingrediente selecionado
            modalAberto.value = true; // Abre o modal
        };

        const fecharModal = () => {
            modalAberto.value = false;
        };

        const salvarEdicao = (dados: { nomeOriginal: string; nomeAtualizado: string }) => {
            const ingrediente = categoria.value.find(i => i.nome === dados.nomeOriginal);
            if (ingrediente) {
                ingrediente.nome = dados.nomeAtualizado; // Atualiza o nome do ingrediente
            }
            fecharModal();
        };

        // Busca os dados da API e atualiza a store usando a action
        const carregarCategorias = async () => {
            store.commit(CLEAR_CATEGORIAS);
            await store.dispatch(GET_CATEGORIA);
        };

        // Carrega as categorias ao montar o componente
        onMounted(() => {
            carregarCategorias();
        });

        return {
            categoria,
            modalAberto,
            ingredienteEditado,
            abrirModal,
            fecharModal,
            salvarEdicao,
        };
    },
    methods: {
        removerIngrediente(name: string) {
            this.$store.commit(REMOVE_INGREDIENTE, name);
        },
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

button.edit {
    margin-left: 10px;
}

modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
}

.modal-content input {
    width: 78%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.modal-content button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal-content button:first-of-type {
    background: #2ecc71;
    color: white;
}

.modal-content button:last-of-type {
    background: #e74c3c;
    color: white;
}
</style>
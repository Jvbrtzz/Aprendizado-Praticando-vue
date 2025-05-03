<template>
    <div class="modal" v-if="visivel">
        <div class="modal-content">
            <h2>Editar Ingrediente</h2>
            <label for="nome">Nome:</label>
            <input id="nome" v-model="ingrediente.nome" type="text" />
            <button @click="salvar">Salvar</button>
            <button @click="$emit('fechar')">Cancelar</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: 'ModalEditar',
    props: {
        visivel: {
            type: Boolean,
            required: true,
        },
        ingredienteInicial: {
            type: Object,
            required: true,
        },
    },
    emits: ['salvar', 'fechar'],
    setup(props, { emit }) {
        const ingrediente = ref({ ...props.ingredienteInicial });

        // Atualiza o ingrediente local quando a prop muda
        watch(
            () => props.ingredienteInicial,
            (novoIngrediente) => {
                ingrediente.value = { ...novoIngrediente }; // Atualiza o valor local
            },

        );
        const salvar = () => {
            emit('salvar', {
                nomeOriginal: props.ingredienteInicial.nome, // Nome original
                nomeAtualizado: ingrediente.value.nome, // Nome atualizado
            });
        };

        return {
            ingrediente,
            salvar,
        };
    },
});
</script>

<style scoped>
.modal {
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
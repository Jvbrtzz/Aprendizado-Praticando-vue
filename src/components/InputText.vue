<template>
    <div class="form-container">
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" placeholder="Enter name" />
            </div>
            <div class="form-group">
                <label for="ingredient">Ingredient:</label>
                <input type="text" id="ingredient" v-model="ingredient" placeholder="Enter ingredient" />
            </div>
            <div class="form-group">
                <label for="picture">Picture:</label>
                <input type="file" id="picture" @change="onFileChange" />
            </div>
            <button type="button" class="btn" @click="aoClicar">Add</button>
        </form>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: 'textInput',
    props: {},
    data() {
        return {
            name: '',
            ingredient: '',
            picture: null,
        };
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            this.picture = file ? URL.createObjectURL(file) : null;
        },
        aoClicar() {
            if (!this.name || !this.ingredient.length) {
                alert('Preencha todos os campos!');
                return;
            }
            // Armazena os valores antes de limpar os campos
            const nome = this.name;
            const ingredientes = this.ingredient;
            const imagem = this.picture;

            // Comita a mutação para salvar o estado
            if (this.store) {
                this.store.commit("SET_CATEGORIA", {
                    nome,
                    ingredientes,
                    imagem,
                });
            } else {
                console.error("Store não encontrada!");
            }

            // Limpa os campos após salvar
            this.name = '';
            this.ingredient = '';
            this.picture = null;

            // Emite o evento com os valores armazenados
            this.$emit('adicionar-ingrediente', nome, ingredientes, imagem);
        },
    },
    setup() {
        const store = useStore();
        return {
            store,
        };
    },
};
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #007bff;
}

.btn {
    padding: 10px 15px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}
</style>
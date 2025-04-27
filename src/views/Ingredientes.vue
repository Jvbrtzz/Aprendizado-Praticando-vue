<template>
    <main class="conteudo-principal">
    <InputText @adicionar-ingrediente="adicionarIngrediente" />
      <section class="cards"
        v-if="categoria.length">
        <CategoriaCard
          v-for="(cat, index) in categoria"
          :key="index"
          :category="cat"
        />        
      </section>
      <p v-else class="paragrafo">No List</p>
    </main>
  </template>
  
  <script lang="ts">
  import CategoriaCard from '@/components/CardCategoria.vue'
  import { obterCategorias } from '@/http'
  import InputText from '@/components/InputText.vue'
  import type ICategoria from '@/interface/ICategoria'
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  export default {
    name: 'Ingredientes',
    components: {
      CategoriaCard,
      InputText
    },
    data() {
      return {
        categoria: [] as ICategoria[],        
      }
    },
    methods: {
      adicionarIngrediente(nome: string, ingrediente: string[], imagem: string | null) {
        
        if (!nome || !ingrediente.length) {
          alert('Preencha todos os campos!')
          return
        }
        this.categoria.push({
          nome: nome,
          ingredientes: ingrediente,
          imagem: imagem,
        });
      },
    },
    async created() {
      this.categoria = await obterCategorias()
    },    
  }
  </script>
  
  <style scoped>
  .conteudo-principal {
    padding: 60px 20px;
    background-color: #f8f9fa;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }
  
  .intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px;
  }
  
  .intro h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .intro p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
  }
  
  .card {
    background-color: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    width: 300px;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-8px);
  }
  
  .card h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  
  .card p {
    color: #666;
  }
  </style>

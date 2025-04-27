<template>
    <main class="conteudo-principal">
      <section class="intro">
        <h2>Conheça o nosso projeto</h2>
        <p>
          Oferecemos soluções modernas e eficientes para transformar suas ideias em realidade digital.
          Seja bem-vindo ao futuro da web.
        </p>
      </section>
      <router-view></router-view>  
    </main>
  </template>
  
  <script lang="ts">
  import CategoriaCard from '@/components/CardCategoria.vue'
  import type ICategoria from '@/interface/ICategoria'
  
  export default {
    name: 'ConteudoPrincipal',
    components: {
      CategoriaCard,
    },
    data() {
      return {
 
      }
    },
    methods: {}
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
  
  </style>

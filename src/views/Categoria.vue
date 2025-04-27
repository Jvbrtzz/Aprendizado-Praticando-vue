<template>
    <main class="conteudo-principal">
      <section class="cards">
        <div
          v-if="cards.length"
          class="card"
          v-for="(card, index) in cards"
          :key="index"
        >
          <h3>
            <template v-if="card.titulo === 'Igredientes Rápidos'">
              <router-link :to="'/i'">{{ card.icone }} {{ card.titulo }}</router-link>
            </template>
            <template v-else-if="card.titulo === 'Dados Ingredientes'">
              <router-link :to="'/c'">{{ card.icone }} {{ card.titulo }}</router-link>
            </template>
            <template v-else>
              {{ card.icone }} {{ card.titulo }}
            </template>
          </h3>
          <p>{{ card.descricao }}</p>
        </div>
        <p v-else class="paragrafo">No List</p>
      </section>
    </main>
</template>

<script lang="ts">
export default {
  name: 'Cartegoria',
  data() {
    return {
      cards: [
        {
          icone: '🚀',
          titulo: 'Igredientes Rápidos',
          descricao: 'Adicione ingredientes de forma rápida e fácil.'
        },
        {
          icone: '🎨',
          titulo: 'Dados Ingredientes',
          descricao: 'Interfaces elegantes que encantam seus usuários.'
        },
        {
          icone: '🔒',
          titulo: 'Segurança',
          descricao: 'Soluções seguras para proteger dados e privacidade.'
        }
      ]
    }
  },
};
</script>

<style scoped>
.conteudo-principal {
  padding: 60px 20px;
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
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

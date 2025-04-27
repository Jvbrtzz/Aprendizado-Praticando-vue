<script lang="ts">
import type ICategoria from '@/interface/ICategoria';
import type { PropType } from 'vue';

export default {
  name: 'CategoriaCard',
  props: {
    category: {
      type: Object as PropType<ICategoria>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <h3>{{ category.nome }} {{ category.ingredientes }}</h3>
    <p>{{ category.imagem }}</p>
  </div>
</template>

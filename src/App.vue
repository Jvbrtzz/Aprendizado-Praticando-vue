<script lang="ts">
import Banner from './components/Banner.vue';
import MainContent from './components/MainContent.vue';

export default {
  components: {Banner: Banner, MainContent: MainContent}
}
</script>

<template>
    <Banner/>
    <body>
      <MainContent/>
    </body>
</template>


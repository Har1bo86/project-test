<script>
import Header from './components/Header.vue';
import Selectors from './components/Selectors.vue';
import Films from './components/Films.vue';

export default {
  components: { Header, Selectors, Films },
}

</script>

<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss"></style>

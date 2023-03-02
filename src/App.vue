<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLangStore } from '@/stores';
import { watch } from 'vue';

const { locale } = useI18n();
const langStore = useLangStore();
watch(
  () => langStore.lang,
  (val) => {
    locale.value = val;
  }
);
</script>

<template>
  <header></header>
  <main><RouterView></RouterView></main>
  <footer></footer>
</template>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  position: relative;
  margin: 80px auto 0;
  max-width: 1472px;
  height: 100%;
  padding: 0 16px;
  min-height: calc(100vh - 339px);
  background-color: var(--o-color-bg1);
  margin-top: 80px;
  overflow: hidden;

  @media (max-width: 1100px) {
    margin-top: 48px;
  }
}
</style>

<script lang="ts" setup>
import SummitSchedule from './components/SummitSchedule.vue';
</script>
<template>
  <div class="demo">
    <SummitSchedule />
  </div>
</template>

<style scoped lang="scss">
.demo {
  padding-top: var(--o-gap-7);
  display: flex;
  flex-direction: column;
  gap: var(--o-gap-5) 0;
  overflow: hidden;
}
</style>

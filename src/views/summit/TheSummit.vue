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
  padding: var(--o-gap-7) 0;
  display: flex;
  flex-direction: column;
  gap: var(--o-gap-5) 0;
  overflow: hidden;
}
</style>

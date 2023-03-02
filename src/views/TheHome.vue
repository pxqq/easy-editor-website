<script lang="ts" setup>
import Pagination from './dome/ThePagination.vue';
import Dropdown from './dome/TheDropdown.vue';
import Input from './dome/TheInput.vue';
import Select from './dome/TheSelect.vue';
import Table from './dome/TheTable.vue';
import Tabs from './dome/TheTabs.vue';
import Drawer from './dome/TheDrawer.vue';
import CheckBox from './dome/TheCheckbox.vue';
import Switch from './dome/TheSwitch.vue';
import Radio from './dome/TheRadio.vue';
import Breadcrumb from './dome/TheBreadcrumb.vue';
import Card from './dome/TheCard.vue';

import { ElMessage } from 'element-plus';

function changeSwith(val: string) {
  ElMessage({
    type: val ? 'success' : 'error',
    message: 'openEuler',
    duration: 3000,
  });
}
</script>
<template>
  <div class="demo">
    <Pagination />
    <Dropdown />
    <Input />
    <Select />
    <Table />
    <Tabs />
    <Drawer />
    <CheckBox />
    <Radio />
    <Card />
    <el-empty description="No Data" :image-size="340" />
    <Breadcrumb />
    <Switch @change-switch="changeSwith" />
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
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

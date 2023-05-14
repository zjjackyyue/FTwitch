<template>
  <!-- 用bootstrap做一个responsive的row和col，row中包含三个col -->
  <div class="stream-row my-flex my-flex-column my-justify-center">
    <div class="title color-purple">{{ title }}</div>
    <div class="row" style="margin-top: 1rem">
      <template v-for="item in data">
        <div class="col">
          <div class="item my-flex my-justify-center">
            <Card :data="item" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Card from "../card/Card.vue";
import { ref } from "vue";

const title = ref("Live Channels we think you'll like");

// 定义props
defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
.stream-row {
  flex-wrap: wrap;
  height: 100%;
  .title {
    width: 100%;
  }
  .item {
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
  }
}
</style>

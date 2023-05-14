<template>
  <div
    class="tag my-flex my-justify-center my-align-center font-i6-12 color-grey1"
  >
    {{ name }}
  </div>
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.tag {
  width: fit-content;
  height: 1.25rem;
  padding: 0 0.7rem;
  background-color: $color-grey3;
  border-radius: 0.625rem;
}
</style>

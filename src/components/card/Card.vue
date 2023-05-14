<template>
  <div class="card">
    <div class="image">
      <img v-if="data.image" :src="data.image" alt="" />
      <div v-else>没有图片</div>
    </div>

    <div class="introduction my-flex">
      <div class="profilePic">
        <img :src="data.profilePic" alt="" />
      </div>
      <div class="title-name-category-tags">
        <div class="title my-ellipsis color-white">{{ data.title }}</div>
        <div class="name my-ellipsis color-grey1">{{ data.name }}</div>
        <div class="category my-ellipsis color-grey1">{{ data.category }}</div>
        <div class="tags my-ellipsis my-flex">
          <template v-for="item in data.tags">
            <Tag :name="item" />
          </template>
        </div>
      </div>
      <div class="options color-white">
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "../tag/Tag.vue";

defineProps({
  data: {
    image: "",
    profilePic: "",
    title: "title",
    name: "name",
    category: "category",
    tags: ["resident evil", "hi", "GTA"],
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 29.09375rem;
  height: 23.83125rem;
  background-color: $color-dark1;
  .image {
    width: 29.09375rem;
    height: 16.365rem;
    img {
      width: 29.09375rem;
      height: 16.365rem;
      object-fit: cover;
    }
  }
  .introduction {
    height: 7.46625rem;
    width: 29.09375rem;
    .profilePic {
      flex-grow: 2.5;
      img {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .title-name-category-tags {
      flex-grow: 25.0625;
      padding-left: 0.5rem;
      .title {
        width: 24.419375rem;
        &:hover {
          color: $color-purple;
          cursor: pointer;
        }
      }
      .name {
        width: 24.419375rem;
        margin-top: 0.2rem;
        &:hover {
          cursor: pointer;
        }
      }
      .category {
        width: 24.419375rem;
        &:hover {
          color: $color-purple;
          cursor: pointer;
        }
      }
      // 标签
      .tags {
        margin-top: 0.5rem;
        gap: 0.2rem;
        > .tag {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    // 卡片右侧的选项
    .options {
      flex-grow: 1.4375;
      // 三个点
      i {
        width: 0.5rem;
        height: 0.5rem;
        &:hover {
          background-color: $color-grey3;
          border-radius: 15%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
  <div class="sidebar" :style="sidebarStyle">
    <div class="for-you my-flex" :style="sideBarTextStyle">
      <div v-if="sidebarState.state" class="title color-white font-r6-18">
        For You
      </div>
      <div
        class="collapse-button my-flex my-justify-center my-align-center"
        v-on:click="changeSidebarState"
      >
        <i
          v-if="sidebarState.state"
          class="bi bi-arrow-bar-left color-white"
        ></i>
        <i v-else class="bi bi-arrow-bar-right color-white"> </i>
      </div>
    </div>
    <div class="followed-channels my-flex" :style="sideBarTextStyle">
      <div v-if="sidebarState.state" class="title color-white font-i6-13">
        Followed Channels
      </div>
      <i v-if="!sidebarState.state" class="bi bi-balloon-heart color-white"></i>
    </div>
    <div class="channels my-flex my-flex-column">
      <template v-for="item in data.followedChannels">
        <SideBarItem :data="item" />
      </template>
    </div>
    <div v-if="sidebarState.state" class="show-more color-purple font-i6-13">
      Show More
    </div>
    <div class="recommended-channels my-flex" :style="sideBarTextStyle">
      <div
        v-if="sidebarState.state"
        class="title color-white color-white font-i6-13"
      >
        Recommended Channels
      </div>
      <i v-if="!sidebarState.state" class="bi bi-camera-video color-white"></i>
    </div>
    <div class="recommendation">
      <template v-for="item in data.recommendedChannels">
        <SideBarItem :data="item" />
      </template>
    </div>
    <div v-if="sidebarState.state" class="show-more color-purple font-i6-13">
      Show More
    </div>
  </div>
</template>

<script setup>
import SideBarItem from "@/components/sidebar-item/SidebarItem.vue";
import { useSidebarState } from "@/stores/sidebarState";
import { onBeforeMount, ref } from "vue";
import { getSidebarData } from "@/api/getSidebarData";
import { computed } from "vue";

const sidebarStyle = computed(() => ({
  width: sidebarState.state ? "15rem" : "5rem",
}));

const sideBarTextStyle = computed(() => ({
  justifyContent: sidebarState.state ? "space-between" : "center",
}));

// 获取sidebarState
const sidebarState = useSidebarState();

// 改变sidebarState
function changeSidebarState() {
  sidebarState.changeSidebarState();
}

// 定义数据
const data = ref({
  followedChannels: [
    {
      profilePic: "",
      name: "",
      category: "",
      status: false,
      viewers: Number,
    },
  ],
  recommendedChannels: [
    {
      profilePic: "",
      name: "",
      category: "",
      status: false,
      viewers: 0,
    },
  ],
});

// 获取数据
async function getData() {
  // console.log(await getSidebarData());
  data.value = await getSidebarData();
}

onBeforeMount(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: 15rem;
  height: calc(100vh - 3.5rem);
  padding: 0 1rem;
  background-color: $color-dark2;
  box-sizing: border-box;
  margin-top: 3.5rem;
  position: fixed;
  overflow-y: auto;
  // 更改 scrollbar 样式
  &::-webkit-scrollbar {
    width: 0.4rem;
    background-color: $color-dark2;
    // 更改 滑块样式
    &-thumb {
      background-color: $color-grey3;
      border-radius: 0.2rem;
    }
  }
  .for-you {
    .title {
      display: inline-block;
    }
    .collapse-button {
      width: 2rem;
      height: 2rem;
      border-radius: 20%;
      cursor: pointer;
      &:hover {
        background-color: $color-grey4;
      }
    }
  }
  .followed-channels {
    margin-top: 0.5rem;
  }
  .channels {
    margin-top: 1rem;
    .sidebar-item {
      margin-bottom: 0.5rem;
      flex-shrink: 1;
    }
  }
  .recommended-channels {
    margin-top: 1rem;
  }
  .recommendation {
    margin-top: 1rem;
    .sidebar-item {
      margin-bottom: 0.5rem;
    }
  }
  .show-more {
    margin-top: 0.2rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<!-- Ftwitch首页 -->
<template>
  <div class="ftwitch">
    <!-- 导航栏 -->
    <div class="navbar">
      <Navbar />
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 左侧 -->
      <div class="left">
        <Sidebar />
      </div>
      <!-- 右侧 -->
      <div class="right" :style="paddingLeft">
        <div class="up-carousel my-flex my-justify-center">
          <div class="index-carousel">
            <Carousel />
          </div>
        </div>
        <div class="up-stream-row my-flex my-justify-center">
          <StreamRow :data="cardData2" />
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar/navbar.vue";
import Sidebar from "@/components/sidebar/sidebar.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import StreamRow from "@/components/stream-Row/StreamRow.vue";
import { ref, computed } from "vue";
import { onMounted, onUnmounted, onBeforeMount } from "vue";
import { useWindowWidth } from "@/stores/windowWidth";
import { useSidebarState } from "@/stores/sidebarState";
import { getCardData } from "@/api/getCardData.js";

// 左侧占空间宽度
const sidebarState = useSidebarState();
const paddingLeft = computed(() => ({
  paddingLeft: sidebarState.state ? "15rem" : "5rem",
}));

//获取屏幕宽度，设置全局变量，调整页面布局
const windowWidth = useWindowWidth();

const handleResize = () => {
  windowWidth.setWidth(window.innerWidth);
};

// 卡片数据
const cardData = ref({
  data: [
    {
      image: String,
      profilePic: String,
      title: String,
      name: String,
      category: String,
      tags: Array,
    },
  ],
});

// 获取数据
async function getData() {
  cardData.value = await getCardData();
  console.log(cardData.value);
}

// 只获取卡片数据中数组的前两个元素
const cardData2 = computed(() => {
  return cardData.value.data.slice(0, 2);
});

// 组件挂载前，获取数据
onBeforeMount(() => {
  getData();
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
.ftwitch {
  margin: 0;
  padding: 0;
  height: 100vh;
  .navbar {
    position: fixed;
    width: 100%;
  }
  .main {
    width: 100%;
    height: calc(100vh - 3.5rem);
    .right {
      width: 100%;
      padding-left: 15rem;
      padding-top: 3.5rem;
      background-color: $color-dark2;
      height: auto;
      .up-carousel {
        margin-top: 1.5rem;
        height: 300px;
        .index-carousel {
          width: 60%;
          height: 100%;
        }
      }
      .up-stream-row {
        margin-top: 3rem;
      }
    }
  }
  .footer {
    height: 3rem;
    background-color: $color-dark2;
  }
}
</style>

<template>
  <div
    ref="popoverItem"
    class="sidebar-item my-flex"
    data-bs-toggle="popover"
    data-bs-trigger="hover focus"
    data-bs-placement="right"
    :data-bs-content="
      '<div class=&quot;custom-popover&quot;>' +
      data.name +
      ' - ' +
      (data.status ? data.category : 'Offline') +
      '</div>'
    "
    data-bs-html="true"
  >
    <div class="profilePic">
      <img :src="data.profilePic" alt="profilePic" />
    </div>
    <div
      v-if="sidebarState.state"
      class="name-and-category my-flex flex-column"
    >
      <div class="name color-grey2 font-i6-14">{{ data.name }}</div>
      <div v-if="data.status" class="category color-grey2 font-i4-13">
        {{ data.category }}
      </div>
    </div>
    <div v-if="sidebarState.state" class="status">
      <div v-if="data.status" class="online">
        <div class="status-dot"></div>
        <div class="viewers font-i4-13 color-grey2">{{ data.viewers }}</div>
      </div>
      <div
        v-if="!data.status"
        class="offline my-flex my-align-center font-i4-13 color-grey1"
      >
        offline
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as bootstrap from "bootstrap";
import { ref } from "vue";
import { useSidebarState } from "@/stores/sidebarState";

const sidebarState = useSidebarState();

const popoverItem = ref(null);

defineProps({
  data: {
    profilePic: String,
    name: String,
    category: String,
    status: Boolean,
    viewers: Number,
  },
});

// 初始化 popover
onMounted(() => {
  if (popoverItem.value) {
    new bootstrap.Popover(popoverItem.value);
  }
});
</script>

<style lang="scss" scoped>
.sidebar-item {
  &:hover {
    cursor: pointer;
    background-color: $color-grey4;
  }
  .profilePic {
    flex-grow: 1;
    img {
      width: 2.6rem;
      height: 2.6rem;
      margin: 0 auto;
      display: block;
      border-radius: 50%;
    }
  }
  .name-and-category {
    flex-grow: 8;
    .name {
    }
    .category {
    }
  }
  .status {
    flex-grow: 1;
    .online {
      display: flex;
      align-items: center;
      .status-dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #4caf50;
        margin-right: 0.5rem;
      }
      .viewers {
        font-size: 0.8rem;
      }
    }
    .offline {
      font-size: 0.8rem;
    }
  }
}
</style>
<style lang="scss">
.custom-popover {
  background-color: #000000;
  color: $color-grey1; // You may want to change the text color to white or another color for better contrast
  margin: 0;
  padding: 15px 20px;
  border-radius: 4px;
  font-size: 14px;
}
</style>

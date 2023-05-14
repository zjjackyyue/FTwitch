<template>
  <nav class="row navbar bg-dark">
    <div class="col-md-4 col-sm-6 col-6 my-flex">
      <a class="navbar-brand" href="#" style="margin-left: 10px">
        <img
          src="@/assets/images/navbar/twitch-favicon.png"
          alt="favicon"
          width="30"
          height="30"
        />
      </a>
      <div class="nav-sec">
        <ul class="navbar-nav" style="text-align: right">
          <li class="nav-item">
            <a
              v-if="!mediumSize"
              class="navbar-brand color-white font-r6-14"
              href="#"
              >Following</a
            >
            <i v-if="mediumSize" class="bi bi-balloon-heart color-white"></i>
          </li>
          <li class="nav-item">
            <a
              v-if="!mediumSize"
              class="navbar-brand color-white font-r6-14"
              href="#"
              >Browse</a
            >
            <i v-if="mediumSize" class="bi bi-book color-white"></i>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link active"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="padding-top: 7px"
            >
              <img
                src="@/assets/images/navbar/three-dots.png"
                alt="favicon"
                width="20"
                height="20"
              />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!mediumSize" class="col-md-4">
      <form class="d-flex" role="search">
        <input
          class="form-control font-i4-14 color-white"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-secondary"
          type="submit"
          style="padding-top: 2px"
        >
          <i class="bi bi-search"></i>
        </button>
      </form>
    </div>
    <div class="col-md-4 col-sm-6 col-6">
      <div class="nav-right my-flex my-justify-end my-align-center">
        <div v-if="mediumSize" class="right-search">
          <div class="my-flex my-align-center my-justify-center">
            <i class="bi bi-search color-white"></i>
          </div>
        </div>
        <div class="bell-chat-broadcast my-flex">
          <div class="my-flex my-align-center my-justify-center">
            <i class="bi bi-bell color-white"></i>
          </div>
          <div class="my-flex my-align-center my-justify-center">
            <i class="bi bi-chat color-white"></i>
          </div>
          <div class="my-flex my-align-center my-justify-center">
            <i class="bi bi-broadcast color-white"></i>
          </div>
        </div>
        <div class="get-bits">
          <div class="my-flex my-align-center">
            <i
              class="bi bi-cash-coin my-flex my-align-center my-justify-center color-white"
            ></i>
            <span class="font-r6-14 color-white my-flex my-align-center"
              >Get Bits</span
            >
          </div>
        </div>
        <div class="profilePic">
          <img
            src="../assets/crocodile.jpg"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { computed } from "vue";
import { useWindowWidth } from "@/stores/windowWidth";

const windowWidth = useWindowWidth();

const mediumSize = computed(() => {
  return windowWidth.width < 837;
});
</script>

<style lang="scss" scoped>
.nav-sec {
  display: inline-block;
}

.nav-sec li {
  display: inline-block;
}

.nav-right {
  text-align: right;
  margin-right: 10px;
}
</style>

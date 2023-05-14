<template>
  <div class="carousel my-flex my-justify-center my-align-center">
    <button @click="moveLeft" class="left-btn">
      <i class="bi bi-caret-left"></i>
    </button>
    <div class="contain-image my-flex my-justify-center">
      <div v-for="(img, index) in images" :key="index" class="image-container">
        <img :src="img.src" :style="{ zIndex: img.zIndex }" />
      </div>
    </div>
    <button @click="moveRight" class="right-btn">
      <i class="bi bi-caret-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://file.moetu.org/images/2021/03/14/Avatar.2009.Extended.UHD.Re-Grade.4000nit.2160p.HEVC.HDR.IVARUS.UKR.ENG.ExKinoRay.mkv_20210314_151701.271caf6c2f845f9c4b7.jpg",
          zIndex: 3,
        },
        {
          src: "https://file.moetu.org/images/2016/09/27/0368824.jpg",
          zIndex: 2,
        },
        {
          src: "https://file.moetu.org/images/2017/05/10/watch-dogs-2013821151855_106b80f.jpg",
          zIndex: 1,
        },
        // ... add more images here if needed
      ],
    };
  },
  methods: {
    moveLeft() {
      const lastImage = this.images.pop();
      this.images.unshift(lastImage);
      this.updateZIndices("left");
    },
    moveRight() {
      const firstImage = this.images.shift();
      this.images.push(firstImage);
      this.updateZIndices("right");
    },
    updateZIndices(direction) {
      this.images.forEach((img, index) => {
        if (direction === "left") {
          img.zIndex = index + 1;
        } else {
          img.zIndex = 3 - index;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 18.75rem;
  button {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  .contain-image {
    position: relative;
    height: 100%;
    flex-grow: 10;
    flex-shrink: 1;
    .image-container {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .left-btn {
    flex-grow: 1;
  }
  .right-btn {
    flex-grow: 1;
  }
}
</style>

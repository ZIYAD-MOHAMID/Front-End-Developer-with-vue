<template>
  <div id="gallery" class="gallery">
    <h2 class="main-title">Gallery</h2>
    <ul>
      <li class="btn" @click="active = '1'" :class="[active === '1' ? 'active' : '']">
        The first group
      </li>
      <li class="btn" @click="active = '2'" :class="[active === '2' ? 'active' : '']">
        The first group
      </li>
      <li class="btn" @click="active = '3'" :class="[active === '3' ? 'active' : '']">
        The third group
      </li>
    </ul>
    <div class="container">
      <div class="box" v-if="active === '1'">
        <div class="imge">
          <img src="../assedes/images/227416aaa.jpg" alt="" />
        </div>
      </div>
      <div class="box" v-if="active === '1'">
        <div class="imge">
          <img src="../assedes/images/508201bbb.webp" alt="" />
        </div>
      </div>
      <div class="box" v-if="active === '2'">
        <div class="imge">
          <img
            src="../assedes/images/978158-animals-owl-nature-branch-cyan-birds-forest-black.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="box" v-if="active === '2'">
        <div class="imge">
          <img
            src="../assedes/images/High_resolution_wallpaper_background666_ID_77701636488.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="box" v-if="active === '3'">
        <div class="imge">
          <img
            src="../assedes/images/High_resolution_wallpaper_background777_ID_77701915676.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="box" v-if="active === '3'">
        <div class="imge">
          <img
            src="../assedes/images/High_resolution_wallpaper_background888_ID_77701915613.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('1')
</script>

<style></style>

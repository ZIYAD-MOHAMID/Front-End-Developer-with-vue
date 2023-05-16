<template>
  <div class="our-skills" id="our-skills">
    <h2 class="main-title">Our Skills</h2>
    <div class="container">
      <img src="../assedes/images/our-skills.webp" alt="" />
      <div class="skills">
        <div class="skill">
          <h3>HTML<span>80%</span></h3>
          <div class="the-progress">
            <span style="width: 80%"></span>
          </div>
        </div>
        <div class="skill">
          <h3>CSS<span>85%</span></h3>
          <div class="the-progress">
            <span style="width: 85%"></span>
          </div>
        </div>
        <div class="skill">
          <h3>JavaScript<span>70%</span></h3>
          <div class="the-progress">
            <span style="width: 70%"></span>
          </div>
        </div>
        <div class="skill">
          <h3>Python<span>80%</span></h3>
          <div class="the-progress">
            <span style="width: 80%"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// const section = ref('.three')
const spams = ref('.the-progress span')

window.onscroll = function () {
  if (window.scrollY >= section.value.offsetTop) {
    spams.value.forEach((span) => {
      span.style.width = span.dataset.width
    })
  }
}
</script>

<style></style>

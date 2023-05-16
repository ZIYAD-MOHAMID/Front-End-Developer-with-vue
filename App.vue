<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const showMaga = ref(false)
</script>
<template>
  <div>
    <div class="header">
      <div class="container">
        <RouterLink to="/" class="logo">ZiZo</RouterLink>
        <ul class="main-nav">
          <li>
            <RouterLink to="/articales"><span class="btn">Articles</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery"><span class="btn">Gallery</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/features"><span class="btn">Features</span></RouterLink>
          </li>
          <li>
            <a @click="showMaga = !showMaga"><span class="btn">Other</span></a>
            <!-- start megamenu -->
            <div v-if="showMaga" class="mega-menu">
              <div class="imge">
                <img
                  src="./assedes/images/TYC-Communication-Product-Launch-PR-Agency-in-Delhi-India.jpg"
                  alt=""
                />
              </div>
              <ul class="links">
                <li>
                  <RouterLink @click="showMaga = false" to="/tastimonials"
                    ><i class="far fa-comments fa-fw"></i>Testimonials</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/team"
                    ><i class="far fa-user fa-fw"></i>Team Members</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/services"
                    ><i class="far fa-building fa-fw"></i>Services</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/skills"
                    ><i class="far fa-check-circle fa-fw"></i>Our Skills</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/how"
                    ><i class="far fa-clipboard fa-fw"></i>How it Works</RouterLink
                  >
                </li>
              </ul>
              <ul class="links">
                <li>
                  <RouterLink @click="showMaga = false" to="/latest"
                    ><i class="far fa-calendar-alt fa-fw"></i>Events</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/pricing"
                    ><i class="fas fa-server fa-fw"></i>Pricing Plans</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/videos"
                    ><i class="far fa-play-circle fa-fw"></i>Top Videos</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/stats"
                    ><i class="far fa-chart-bar fa-fw"></i>Stats</RouterLink
                  >
                </li>
                <li>
                  <RouterLink @click="showMaga = false" to="/request"
                    ><i class="far fa-percent fa-fw"></i>Request a Discount</RouterLink
                  >
                </li>
              </ul>
            </div>
            <!-- end megamenu -->
          </li>
        </ul>
      </div>
      <div class="progress"></div>
    </div>

    <RouterView @click="showMaga = false" />

    <div class="footer">
      <div class="container">
        <div class="box">
          <h3>ZiZo</h3>
          <ul class="social">
            <li>
              <a class="facbook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a class="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="youtube">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque esse veniam,
            blanditiis inventore doloribus. Blanditiis corrupti facere, non tenetur labore quisquam
            accusamus ipsum quos quibusdam laborum amet ab beatae?
          </p>
        </div>
        <div class="box">
          <ul class="links">
            <li><a>Important Link 1</a></li>
            <li><a>Important Link 2</a></li>
            <li><a>Important Link 3</a></li>
            <li><a>Important Link 4</a></li>
            <li><a>Important Link 5</a></li>
          </ul>
        </div>
        <div class="box">
          <div class="line">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class="info">Egypt, Giza, Inside The Sphinx, Rood Number 302</div>
          </div>
          <div class="line">
            <i class="far fa-clock fa-fw"></i>
            <div class="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div class="line">
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class="info">
              <span>+201157501306</span>
              <span>+201157501306</span>
            </div>
          </div>
        </div>
        <div class="box footer-gallery">
          <img src="./assedes/images/tree-1.jpg" alt="" />
          <img src="./assedes/images/tree-2.jpg" alt="" />
          <img src="./assedes/images/tree-3.jpg" alt="" />
          <img src="./assedes/images/tree-4.jpg" alt="" />
          <img src="./assedes/images/tree-5.jpg" alt="" />
          <img src="./assedes/images/tree-6.jpg" alt="" />
        </div>
      </div>
      <p class="copyright">Made With Love By ZiZo</p>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>

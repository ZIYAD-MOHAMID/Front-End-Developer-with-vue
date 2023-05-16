<template>
  <div class="discount" id="discount">
    <div class="image">
      <div class="content">
        <h2>We Have A Discount</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis saepe
          tenetur quos dolor dignissimos sequi dolorum hic ab impedit perspiciatis error! Sunt
          voluptates distinctio eaque labore, rerum illo tempora.
        </p>
        <img src="../assedes/images/S.png" alt="" />
      </div>
    </div>
    <div class="form">
      <div class="coutent">
        <h2>Request A Discount</h2>
        <form action="">
          <input class="input" type="email" placeholder="Your Email" name="email" v-model="email" />
          <input
            class="input"
            :type="field"
            placeholder="Your Password"
            name="name"
            v-model="name"
          />
          <input class="input" type="text" placeholder="Your Phone" name="mobile" v-model="text" />
          <textarea class="input" name="message" placeholder="Tell Us About Your Needs"></textarea>
          <input :disabled="!name || !email || !text" type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref(null)
const email = ref(null)
const text = ref(null)
const field = ref('password')
// function show() {
//   field.value === 'password' ? 'text' : 'password'
// }
</script>

<style></style>

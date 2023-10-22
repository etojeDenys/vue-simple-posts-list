<script setup lang="ts"></script>

<template>
  <div class="app">
    <div class="links">
      <router-link to="/" active-class="links__active">Home</router-link>
      <router-link to="/posts" active-class="links__active">Posts</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.links {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;

  padding: 20px 30px;
  border-bottom: 1px solid black;
}

.links * {
  font-size: 18px;
  text-decoration: none;
}

.links__active {
  font-weight: bolder;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="">
    <div></div>
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">company</RouterLink>
      <RouterLink to="/service">service</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
    </nav>
  </header>
</template>

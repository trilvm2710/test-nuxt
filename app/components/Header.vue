<template>
  <header class="navbar">
    <div class="container-fluid">
      <div class="header-left">
        <button class="menu-toggle" @click="toggleMenu">
          <div>
            <img
              v-if="isMenuOpen"
              src="../assets/images/close.png"
              alt="Close Menu"
            />
            <img v-else src="../assets/images/bar.png" alt="Open Menu" />
          </div>
        </button>
        <NuxtLink to="/" class="navbar-brand">
          <img src="../assets/images/logo.png" class="logo" alt="Logo" />
        </NuxtLink>

        <nav :class="['navbar-menu', { 'is-active': isMenuOpen }]">
          <ul class="nav-links">
            <li class="nav-item active">
              <NuxtLink to="/" class="nav-link" @click="closeMenu"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMenu"
                >items1</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMenu"
                >items2</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMenu"
                >items3</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMenu"
                >items4</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <button class="btn btn-primary">sign up</button>
        <button class="btn btn-secondary">log in</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

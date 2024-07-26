<template>
  <nav
    class="rounded-sm w-full p-4 bg-white flex items-center justify-between mb-6"
  >
    <div class="flex gap-x-2 items-center">
      <Icon icon="solar:link-circle-bold" class="text-purple-600 text-[24px]" />
      <h1 class="font-bold text-[20px]">devlinks</h1>
    </div>
    <div class="gap-x-5 hidden lg:flex">
      <RouterLink to="/">
        <button
          class="py-2 md:px-4 rounded flex gap-x-1 items-center font-semibold text-gray-600"
        >
          <Icon icon="flowbite:link-solid" class="text-[16px] font-bold" />
          <span>links</span>
        </button>
      </RouterLink>
      <RouterLink to="/profile">
        <button
          class="flex items-center py-2 px-4 font-semibold text-gray-600 gap-1"
        >
          <Icon icon="iconamoon:profile-circle" class="text-[16px]" />
          <span>Profile Detail</span>
        </button>
      </RouterLink>
    </div>
    <div class="flex items-center">
      <RouterLink to="/preview" class="hidden lg:block">
        <button
          class="py-2 px-3 rounded border border-purple-600 font-semibold text-purple-600"
        >
          Preview
        </button>
      </RouterLink>
      <button @click="toggleMobileMenu" class="lg:hidden">
        <Icon icon="mdi:menu" class="text-[24px] text-gray-600" />
      </button>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md rounded-b-sm"
    >
      <RouterLink to="/" @click="toggleMobileMenu">
        <button
          class="py-2 px-4 w-full text-left font-semibold text-gray-600 border-b border-gray-200 flex"
        >
          <Icon icon="flowbite:link-solid" class="text-[16px] font-bold" />
          <span>links</span>
        </button>
      </RouterLink>
      <RouterLink to="/profile" @click="toggleMobileMenu">
        <button
          class="py-2 px-4 w-full text-left font-semibold text-gray-600 border-b border-gray-200 flex"
        >
          <Icon icon="iconamoon:profile-circle" class="text-[16px]" />
          <span>Profile Detail</span>
        </button>
      </RouterLink>
      <RouterLink to="/preview" @click="toggleMobileMenu">
        <button
          class="py-2 px-4 w-full text-left font-semibold text-purple-600 border-b border-gray-200 flex"
        >
          Preview
        </button>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

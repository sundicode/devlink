<template>
  <div class="min-h-screen py-4 mx-auto container">
    <nav
      class="rounded-sm w-full p-4 bg-white flex items-center justify-between mb-6"
    >
      <div class="flex gap-x-2 items-center">
        <Icon
          icon="solar:link-circle-bold"
          class="text-purple-600 text-[24px]"
        />
        <h1 class="font-bold text-[20px]">devlinks</h1>
      </div>
      <div class="gap-x-5 hidden lg:flex">
        <RouterLink to="/">
          <button
            class="py-2 px-4 rounded flex gap-x-1 items-center font-semibold text-gray-600"
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
            class="py-2 px-4 w-full text-left font-semibold text-gray-600 border-b border-gray-200"
          >
            <Icon icon="flowbite:link-solid" class="text-[16px] font-bold" />
            <span>links</span>
          </button>
        </RouterLink>
        <RouterLink to="/profile" @click="toggleMobileMenu">
          <button
            class="py-2 px-4 w-full text-left font-semibold text-gray-600 border-b border-gray-200"
          >
            <Icon icon="iconamoon:profile-circle" class="text-[16px]" />
            <span>Profile Detail</span>
          </button>
        </RouterLink>
        <RouterLink to="/preview" @click="toggleMobileMenu">
          <button
            class="py-2 px-4 w-full text-left font-semibold text-purple-600 border-b border-gray-200"
          >
            Preview
          </button>
        </RouterLink>
      </div>
    </nav>
    <div class="md:flex gap-7">
      <div
        class="bg-white md:w-[40%] h-[85vh] flex items-center justify-center md:px-24 px-5 md:py-10 py-3"
      >
        <div
          class="w-full border-2 border-gray-800 rounded-[40px] md:p-5 p-3 h-full"
        >
          <div
            class="w-full border-2 border-gray-800 rounded-[50px] md:p-5 p-3 h-full"
          >
            <div class="">
              <div
                class="w-full flex items-center flex-col gap-y-3 mb-10 mt-10"
              >
                <div class="w-[90px] h-[90px] rounded-full bg-gray-50"></div>
                <div
                  class="bg-gray-100 p-2 rounded-[30px] w-[70%] mx-auto"
                ></div>
                <div
                  class="bg-gray-100 p-1 rounded-[30px] w-[40%] mx-auto"
                ></div>
              </div>

              <div class="w-full p-8 flex flex-col gap-y-2 overflow-y-scroll">
                <div
                  class="w-full p-4 rounded-lg bg-gray-100"
                  v-for="(link, i) of userLinks"
                  :key="i"
                  :style="{
                    background: link.platform.colorCode,
                    color: 'white',
                  }"
                >
                  <RouterLink :to="link.link">
                    <div class="flex justify-between items-center">
                      <div class="flex gap-x-2">
                        <Icon :icon="link.platform.icon" class="text-[20px]" />
                        <p class="font-semibold">{{ link.platform.name }}</p>
                      </div>
                      <Icon
                        icon="flowbite:arrow-right-solid"
                        class="text-[20px]"
                      />
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white md:w-[60%] min-h-[85vh] px-12 py-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { RouterView } from "vue-router";
import useLinksStore from "../store/links";
import { ref } from "vue";

const { userLinks } = useLinksStore();

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style>
a.router-link-exact-active button {
  @apply text-purple-600 bg-purple-100 rounded;
}
.overflow-y-scroll::-webkit-scrollbar {
  display: none;
}
body {
  @apply bg-gray-100;
}

/* Hide scrollbar for IE/Edge */
.overflow-y-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

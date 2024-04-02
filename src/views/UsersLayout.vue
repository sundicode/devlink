<template>
  <div class="container min-h-screen bg-gray-100 py-4">
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
      <div class="flex gap-x-5">
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
      <RouterLink to="/preview">
        <button
          class="py-2 px-3 rounded border border-purple-600 font-semibold text-purple-600"
        >
          Preview
        </button>
      </RouterLink>
    </nav>
    <div class="md:flex gap-7">
      <div
        class="bg-white md:w-[40%] min-h-[85vh] flex items-center justify-center"
      >
        <div class="w-[45%] relative">
          <img src="/phone-3.png" alt="phone" class="w-full" />
          <div
            class="absolute inset-0 py-12 flex flex-col justify-start items-center w-full"
          >
            <div class="w-full flex items-center flex-col gap-y-3 mb-10 mt-10">
              <div class="w-[90px] h-[90px] rounded-full bg-gray-50"></div>
              <div class="bg-gray-100 p-2 rounded-[30px] w-[70%] mx-auto"></div>
              <div class="bg-gray-100 p-1 rounded-[30px] w-[40%] mx-auto"></div>
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

const { userLinks } = useLinksStore();
</script>

<style scoped>
a.router-link-exact-active button {
  @apply text-purple-600 bg-purple-100 rounded;
}
.overflow-y-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE/Edge */
.overflow-y-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

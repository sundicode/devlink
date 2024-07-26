<template>
  <div class="min-h-screen py-4 mx-auto container">
    <Navbar />
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
                <div>
                  <div class="relative mb-6">
                    <img
                      v-if="userProfile.avatar"
                      :src="
                        userProfile.avatar || 'https://via.placeholder.com/150'
                      "
                      alt="Avatar"
                      class="rounded-full w-24 h-24 mx-auto"
                    />
                  </div>
                  <h2
                    class="font-bold text-2xl text-center"
                    v-if="userProfile.firstName || userProfile.lastName"
                  >
                    {{ userProfile.firstName }} {{ userProfile.lastName }}
                  </h2>
                  <p class="text-gray-500" v-if="userProfile.email">
                    {{ userProfile.email }}
                  </p>
                </div>
                <div
                  class="w-[90px] h-[90px] rounded-full bg-gray-50"
                  v-if="!userProfile.avatar"
                ></div>
                <div
                  class="bg-gray-100 p-2 rounded-[30px] w-[70%] mx-auto"
                  v-if="!userProfile.firstName"
                ></div>
                <div
                  class="bg-gray-100 p-1 rounded-[30px] w-[40%] mx-auto"
                  v-if="!userProfile.email"
                ></div>
              </div>

              <div class="w-full p-6 flex flex-col gap-y-2 overflow-y-scroll">
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
import Navbar from "../components/Navbar.vue";
import { useProfileStore } from "../store/user-profile";

const { userLinks } = useLinksStore();
const { userProfile } = useProfileStore();
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

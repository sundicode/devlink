<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-100">
    <Navbar />

    <div class="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-sm">
      <div class="relative mb-6">
        <input
          type="file"
          @change="onFileChange"
          class="absolute inset-0 opacity-0 cursor-pointer"
          accept="image/*"
        />
        <img
          :src="userProfile.avatar || 'https://via.placeholder.com/150'"
          alt="Avatar"
          class="rounded-full w-24 h-24 mx-auto"
        />
      </div>
      <h2 class="font-bold text-2xl">
        {{ userProfile.firstName }} {{ userProfile.lastName }}
      </h2>
      <p class="text-gray-500">{{ userProfile.email }}</p>
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
              <Icon icon="flowbite:arrow-right-solid" class="text-[20px]" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <button class="mt-4 py-2 px-6 rounded bg-purple-600 text-white font-bold">
      Share Link
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useProfileStore } from "../store/user-profile";
import useLinksStore from "../store/links";
import Navbar from "../components/Navbar.vue";

const { userProfile } = useProfileStore();
const { userLinks } = useLinksStore();

const onFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      userProfile.avatar = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
nav {
  position: relative;
  z-index: 10;
}
nav button {
  transition: all 0.2s;
}
nav button:hover {
  transform: translateY(-2px);
}
</style>

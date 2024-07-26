<template>
  <h2 class="font-bold text-2xl mb-4">Profile Details</h2>
  <p class="text-gray-500 mb-6">
    Add your details to create a personal touch to your profile.
  </p>
  <div class="flex flex-col gap-6 mb-6">
    <div class="flex flex-col items-center gap-4">
      <div class="relative">
        <input
          type="file"
          @change="onFileChange"
          class="absolute inset-0 opacity-0 cursor-pointer"
          accept="image/*"
        />
        <img
          :src="userProfile.avatar || 'https://via.placeholder.com/150'"
          alt="Avatar"
          class="rounded-full w-32 h-32"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white"
        >
          <Icon icon="mdi:camera" class="text-2xl" />
        </div>
      </div>
      <p class="text-xs text-gray-500">
        Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
      </p>
    </div>
    <div class="flex-1">
      <div class="mb-4">
        <label class="block text-gray-700">First name*</label>
        <input
          type="text"
          v-model="userProfile.firstName"
          class="w-full border rounded py-2 px-3 mt-1"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Last name*</label>
        <input
          type="text"
          v-model="userProfile.lastName"
          class="w-full border rounded py-2 px-3 mt-1"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          v-model="userProfile.email"
          class="w-full border rounded py-2 px-3 mt-1"
        />
      </div>
    </div>
  </div>
  <button
    @click="saveProfile"
    class="w-full py-2 px-4 rounded bg-purple-600 text-white font-bold"
  >
    Save
  </button>
  <p v-if="successMessage" class="mt-4 text-green-500">
    {{ successMessage }}
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useProfileStore } from "../store/user-profile";

const { userProfile } = useProfileStore();

const successMessage = ref("");

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

const saveProfile = () => {
  successMessage.value = "Your changes have been successfully saved!";
  setTimeout(() => {
    successMessage.value = "";
  }, 3000);
};
</script>

<style scoped>
input[type="file"] {
  height: 128px;
  width: 128px;
}
</style>

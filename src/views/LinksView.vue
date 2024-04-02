<template>
  <div>
    <h1 class="font-bold text-[2.4rem] text-gray-800 mb-1">
      Customize your links
    </h1>
    <p class="text-gray-400 mb-10">
      add/edit/remove links and share your profile to the rest of the world
    </p>
    <button
      class="py-2 px-3 w-full border-2 border-purple-500 rounded-md text-purple-600 flex items-center justify-center gap-x-3 font-bold mb-10"
      @click="addLink"
    >
      <Icon icon="ic:baseline-plus" class="text-purple-600 font-bold" />
      <span>Add new link</span>
    </button>
    <div class="overflow-scroll flex gap-y-4 flex-col h-[400px]">
      <div
        class="flex flex-col gap-y-2 bg-gray-50 p-5"
        v-for="(userLink, i) of userLinks"
        :key="i"
      >
        <div class="rounded flex justify-between items-center">
          <div class="font-bold text-gray-700 flex gap-x-2 items-center">
            <Icon icon="material-symbols-light:equal" class="text-gray-700" />
            #Link {{ i + 1 }}
          </div>
          <button class="text-gray-500" @click="removeUserLink(userLink.id)">
            remove
          </button>
        </div>

        <div>
          <label for="platform" class="text-[12px] mb-1">Platform</label>
          <div
            class="flex border border-gray-300 rounded-lg px-3 py-1 bg-white items-center"
          >
            <Icon :icon="userLink.platform.icon" class="text-[1.3rem]" />
            <select
              class="w-full p-[.5rem] border-0 outline-none bg-transparent"
              v-model="userLink.platform"
            >
              <option :value="link" v-for="(link, i) of links" :key="i">
                <Icon :icon="link.icon" />
                <span>{{ link.name }}</span>
              </option>
            </select>
          </div>
        </div>

        <div>
          <label for="platform" class="text-[12px] mb-1">link</label>
          <div
            class="flex border border-gray-300 rounded-lg px-3 py-1 bg-white items-center"
          >
            <Icon icon="flowbite:link-solid" class="text-[1.3rem]" />
            <input
              type="text"
              class="w-full p-[.5rem] border-0 outline-none bg-transparent"
              v-model="userLink.link"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <button @click="saveSetting">Save</button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import useLinksStore from "../store/links";
import { watch } from "vue";
const { links, userLinks, updateLink, removeLink } = useLinksStore();
const saveSetting = () => {
  console.log(userLinks);
};

watch(userLinks, (oldvalue, newvalue) => {
  updateLink(newvalue);
});
const addLink = () => {
  userLinks.push({
    id: Math.random() * 5000,
    platform: { icon: "", colorCode: "", name: "" },
    link: "",
  });
};

const removeUserLink = (name: string) => {
  removeLink(name);
};
</script>

<style scoped></style>

import { defineStore } from "pinia";
import { ref } from "vue";
import { UserLinkInterface } from "../interface";

const useLinksStore = defineStore("uselink", () => {
  const links = ref([
    {
      id: 1,
      name: "Facebook",
      icon: "mdi-facebook", // Iconify icon for Facebook
      colorCode: "#1877F2", // Facebook blue
    },
    {
      id: 2,
      name: "Twitter",
      icon: "mdi-twitter", // Iconify icon for Twitter
      colorCode: "#1DA1F2", // Twitter blue
    },
    {
      id: 3,
      name: "Instagram",
      icon: "mdi-instagram", // Iconify icon for Instagram
      colorCode: "#C13584", // Instagram pink
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: "mdi-linkedin", // Iconify icon for LinkedIn
      colorCode: "#0077B5", // LinkedIn blue
    },
    {
      name: "YouTube",
      icon: "mdi-youtube", // Iconify icon for YouTube
      colorCode: "#FF0000", // YouTube red
    },
    {
      id: 5,
      name: "Pinterest",
      icon: "mdi-pinterest", // Iconify icon for Pinterest
      colorCode: "#BD081C", // Pinterest red
    },
    {
      id: 6,
      name: "Snapchat",
      icon: "mdi-snapchat-ghost", // Iconify icon for Snapchat
      colorCode: "#FFFC00", // Snapchat yellow
    },
    {
      id: 7,
      name: "WhatsApp",
      icon: "mdi-whatsapp", // Iconify icon for WhatsApp
      colorCode: "#25D366", // WhatsApp green
    },
    {
      id: 8,
      name: "TikTok",
      icon: "mdi-tiktok", // Iconify icon for TikTok
      colorCode: "#000000", // TikTok black
    },
    {
      id: 9,
      name: "Reddit",
      icon: "mdi-reddit", // Iconify icon for Reddit
      colorCode: "#FF4500", // Reddit orange-red
    },
    {
      id: 10,
      name: "Tumblr",
      icon: "mdi-tumblr", // Iconify icon for Tumblr
      colorCode: "#36465D", // Tumblr dark blue
    },
    {
      name: "Flickr",
      icon: "mdi-flickr", // Iconify icon for Flickr
      colorCode: "#0063DC", // Flickr blue
    },
    {
      id: 11,
      name: "GitHub",
      icon: "mdi-github", // Iconify icon for GitHub
      colorCode: "#181717", // GitHub black
    },
    {
      id: 12,
      name: "Medium",
      icon: "mdi-medium", // Iconify icon for Medium
      colorCode: "#02B875", // Medium green
    },
    {
      id: 13,
      name: "WhatsApp",
      icon: "mdi-whatsapp", // Iconify icon for WhatsApp
      colorCode: "#25D366", // WhatsApp green
    },
    {
      id: 14,
      name: "Discord",
      icon: "mdi-discord", // Iconify icon for Discord
      colorCode: "#7289DA", // Discord purple
    },
    {
      id: 15,
      name: "Twitch",
      icon: "mdi-twitch", // Iconify icon for Twitch
      colorCode: "#6441A5", // Twitch purple
    },
    {
      id: 16,
      name: "Telegram",
      icon: "mdi-telegram", // Iconify icon for Telegram
      colorCode: "#0088CC", // Telegram blue
    },
    {
      id: 17,
      name: "Vimeo",
      icon: "mdi-vimeo", // Iconify icon for Vimeo
      colorCode: "#1AB7EA", // Vimeo blue
    },
  ]);
  let userLinks = ref<UserLinkInterface[]>([
    {
      id: 1,
      platform: {
        name: "Facebook",
        icon: "mdi-facebook",
        colorCode: "#1877F2",
      },
      link: "",
    },
  ]);

  const addLink = () => {
    userLinks.value.push({
      id: Date.now(),
      platform: { icon: "", colorCode: "", name: "" },
      link: "",
    });
  };
  const removeLink = (id: number) => {
    const index = userLinks.value.findIndex((link) => link.id === id);
    if (index !== -1) {
      userLinks.value.splice(index, 1);
    }
  };

  const updateLink = (id: number, updatedLink: Partial<UserLinkInterface>) => {
    const index = userLinks.value.findIndex((link) => link.id === id);
    if (index !== -1) {
      userLinks.value[index] = { ...userLinks.value[index], ...updatedLink };
    }
  };

  return { links, addLink, updateLink, removeLink, userLinks };
});
export default useLinksStore;

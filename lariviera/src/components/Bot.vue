<template>
  <a
    class="Bot"
    href="https://console.dialogflow.com/api-client/demo/embedded/279f0968-c681-4fc4-a790-0b94206dab0c "
  >
    <img :src="chatbotGif" alt="gifchatbot" class="w-16 h-16" />
  </a>
</template>

<script setup>
import chatbotGif from "@/assets/img/icons8-chatbot.gif";
</script>

<style>
.Bot {
  position: fixed;
  bottom: 110px;
  right: 15px;
  z-index: 9999;
}
</style>

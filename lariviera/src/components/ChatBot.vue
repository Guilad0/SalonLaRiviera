<template>
  <div>
    <div v-if="showChat" class="chatbot-container">
      <button class="close-btn" @click="showChat = false">✖</button>

      <iframe
        allow="microphone;"
        width="350"
        height="430"
        class="chatbot-iframe"
        :src="iframeUrl"
      ></iframe>
    </div>

    <div
      class="chatbot-toggle-container"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <transition name="fade" class="">
        <div v-if="showTooltip && !showChat" class="tooltip">
          ¿Necesitas ayuda con tu consulta?
        </div>
      </transition>

      <img
        v-if="!showChat"
        :src="chatbotGif"
        alt="Abrir Chatbot"
        class="chatbot-toggle"
        @click="showChat = true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import chatbotGif from "@/assets/img/icons8-chatbot.gif";

const showChat = ref(false);
const showTooltip = ref(true);

onMounted(() => {
  setTimeout(() => {
    showTooltip.value = false;
  }, 2000);
});

const iframeUrl =
  "https://console.dialogflow.com/api-client/demo/embedded/279f0968-c681-4fc4-a790-0b94206dab0c";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 430px;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background-color: white;
  transition: all 0.3s ease-in-out;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
}

.close-btn:hover {
  background: darkred;
}

.chatbot-toggle-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

.tooltip {
  position: absolute;
  left: -250px;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.chatbot-toggle {
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s;
}

.chatbot-toggle:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .chatbot-container {
    width: 100%;
    height: 60vh;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
}
</style>

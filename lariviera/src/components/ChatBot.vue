<template>
  <div class="chatbot-container">
    <iframe allow="microphone;" width="350" height="430" :src="iframeUrl"></iframe>
  </div>
</template>

<script>
export default {
  name: "ChatBot",
  data() {
    return {
      iframeUrl:
        "https://console.dialogflow.com/api-client/demo/embedded/279f0968-c681-4fc4-a790-0b94206dab0c",
    };
  },
};
</script>

<style scoped>
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

.chatbot-iframe {
  width: 100%;
  height: 100%;
  border: none;
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

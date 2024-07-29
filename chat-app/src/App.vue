<template>
  <div class="chat-app">
    <ChatWindow :messages="messages" />
    <InputBox @sendMessage="sendMessage" />
  </div>
</template>

<script>
import ChatWindow from './components/ChatWindow.vue';
import InputBox from './components/InputBox.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ChatWindow,
    InputBox
  },
  computed: {
    ...mapState(['messages'])
  },
  methods: {
    ...mapMutations(['addMessage']),
    sendMessage(message) {
      this.addMessage(message);
    }
  }
};
</script>

<style>
.chat-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>

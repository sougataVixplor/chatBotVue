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
import axios from './axios';

export default {
  components: {
    ChatWindow,
    InputBox
  },
  computed: {
    ...mapState(['messages'])
  },
  async created() {
    await this.fetchMessages();
  },
  methods: {
    ...mapMutations(['addMessage']),
    async fetchMessages() {
      try {
        const response = await axios.get('/messages');
        this.addMessage(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    },
    async sendMessage(message) {
      try {
        await axios.post('/messages', { message });
        await this.fetchMessages(); // Optionally refresh messages
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }
};
</script>

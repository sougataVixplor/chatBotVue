<template>
  <div class="input-box">
    <input
      v-model="newMessage"
      @keyup.enter="handleSend"
      type="text"
      placeholder="Type your message"
    />
    <button @click="handleSend">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ''
    };
  },
  methods: {
    handleSend() {
      if (this.newMessage.trim()) {
        this.$emit('sendMessage', this.newMessage.trim());
        this.newMessage = '';
      }
    }
  }
};
</script>

<style>
.input-box {
  display: flex;
  padding: 8px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

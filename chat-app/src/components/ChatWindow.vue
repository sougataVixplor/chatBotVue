<template>
  <div class="chat-window">
    <div v-for="(message, index) in messages" :key="index" class="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages']
};
</script>

<style>
.chat-window {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.message {
  margin-bottom: 8px;
  padding: 8px;
  background-color: #f1f1f1;
  border-radius: 4px;
}
</style>

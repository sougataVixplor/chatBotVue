import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      messages: []
    };
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    }
  }
});

export default store;

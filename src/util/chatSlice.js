import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
      if (state.messages.length > 25) {
        state.messages.shift(); // keep only the latest 10 messages
      }
    }
  }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

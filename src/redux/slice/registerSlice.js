import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: {
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  },
};


const registerSlice = createSlice({
  name: "regis",
  initialState,
  reducers: {
    register: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

const { regis } = registerSlice.actions;
export { regis };
const registerReducer = registerSlice.reducer;

export default registerReducer;

import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE_USER_REDUX } from "../../../utils/constants/initialReduxUser";

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE_USER_REDUX,
  reducers: {
    addUser: (state, action) => {
      const { _id, first_name, last_name, email, phone, username, profile, account_id } =
        action.payload;
      state._id = _id;
      state.first_name = first_name;
      state.last_name = last_name;
      state.email = email;
      state.phone = phone;
      state.username = username;
      state.profile = profile;
      state.account_id = account_id;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

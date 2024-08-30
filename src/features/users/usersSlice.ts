import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  filter: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data as User[];
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filter"];
        value: string;
      }>
    ) => {
      state.filter[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "failed to fetch users";
      });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;

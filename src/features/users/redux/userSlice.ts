import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { User } from '../../../types';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface UserState {
  users: User[];
  status: Status;
  error?: any;
}

const initialState: UserState = {
  users: [],
  status: Status.IDLE,
  error: undefined,
};

export const fetchUsers = createAsyncThunk('get/getUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
});
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = Status.IDLE;
    });

    builder.addCase(fetchUsers.pending, state => {
      state.status = Status.LOADING;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.users = [];
      state.status = Status.FAILED;
      state.error = action.payload;
    });
  },
});

export const selectUsers = (state: RootState) => state.userState.users;
export default userSlice.reducer;

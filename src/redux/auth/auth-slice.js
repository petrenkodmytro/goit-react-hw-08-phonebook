import { register } from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  // Кожен токен це унікальний зашифрований рядок, який містить три блоки: заголовок (header), набір полів (payload) та сигнатуру.
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action){
        
    }
  },
});

export default authSlice.reducer;

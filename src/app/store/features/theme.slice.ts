import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..';
import { Color, ETheme } from '../../types';

// Define a type for the slice state
interface ThemeState {
  background?: string,
  theme: ETheme
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: "light",
  background: "https://thaitrien.com/wp-content/uploads/2020/08/75-nam-cmt8-va-quoc-khanh-2-9-thaitrien-2-1920x1080.png"
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ETheme>) => {
      state.theme = action.payload;
    },
    setBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    }
  }
})

export const { setBackground, setTheme } = counterSlice.actions

export const selectTheme = (state: RootState) => state.theme;

export default counterSlice.reducer
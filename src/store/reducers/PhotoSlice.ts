import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TPhoto = {
  file: string[];
  id: string;
};

export interface IPhotoState {
  photos: TPhoto[];
}

const initialState: IPhotoState = {
  photos: [],
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getUploadedPhoto: (state, action: PayloadAction<TPhoto>) => {
      state.photos.push(action.payload);
    },
  },
});

export default photoSlice.reducer;

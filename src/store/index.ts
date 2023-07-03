import { InitialState } from "../Types";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHomePageVideos } from "./reducer/getHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const store = configureStore({
  reducer: {
    youtube: YoutubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

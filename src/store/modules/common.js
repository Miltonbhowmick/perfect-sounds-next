import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "@/services/common.service";

export const fetchCategory = createAsyncThunk(
  "common/fetchCategory",
  async () => {
    return await fetchCategories();
  }
);

const commonSlice = createSlice({
  name: "common",
  initialState: {
    categories: null,
    subCategories: null,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSubCategories(state, action) {
      state.subCategories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = action.payload.results;
    });
    // [fetchCategories.rejected]: (state, action) => {
    //   state.categories = [];
    // },
  },
  selectors: {
    getCategories: (state) => state.categories,
    getSubCategories: (state) => state.subCategories,
  },
});

// export actions
export const { setCategories, setSubCategories } = commonSlice.actions;

// export selectors
export const { getCategories, getSubCategories } = commonSlice.selectors;
// export reducer
export default commonSlice.reducer;

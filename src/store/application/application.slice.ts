import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, QuestFilters } from 'const';

export type InitialState = {
  currentFilter: QuestFilters;
};

const initialState: InitialState = {
  currentFilter: QuestFilters.All,
};

export const applicationSlice = createSlice({
  name: NameSpace.Application,
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<QuestFilters>) {
      state.currentFilter = action.payload;
    },
  },
});

export const { changeFilter } = applicationSlice.actions;

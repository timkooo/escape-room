import { createSlice } from '@reduxjs/toolkit';
import { Quest } from 'types/quest';
import { NameSpace } from '../../const';
import { loadQuestById, loadQuests } from '../api-actions';

export type InitialState = {
  quests: Quest[];
  areQuestsLoading: boolean;
  currentQuest: Quest | null
  isCurrentQuestLoading: boolean;
};

const initialState: InitialState = {
  quests: [],
  areQuestsLoading: false,
  currentQuest: null,
  isCurrentQuestLoading: false,
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(loadQuests.fulfilled, (state, action) => {
      state.quests = action.payload;
      state.areQuestsLoading = false;
    })
    .addCase(loadQuests.pending, (state) => {
      state.areQuestsLoading = true;
    })
    .addCase(loadQuests.rejected, (state, action) => {
      state.areQuestsLoading = false;
      state.quests = [];
    })
    .addCase(loadQuestById.fulfilled, (state, action) => {
      state.currentQuest = action.payload;
      state.isCurrentQuestLoading = false;
    })
    .addCase(loadQuestById.pending, (state) => {
      state.isCurrentQuestLoading = true;
    })
  }
});
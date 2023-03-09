import { createSelector } from '@reduxjs/toolkit';
import { selectCurrentFilter } from 'store/application/application.selectors';
import { NameSpace, QuestFilters } from '../../const';
import { RootState } from '../../types/store';

export const selectQuests = (state: RootState) =>
  state[NameSpace.Quests].quests;
export const selectAreQuestsLoading = (state: RootState) =>
  state[NameSpace.Quests].areQuestsLoading;

export const selectFilteredQuests = createSelector(
  [selectQuests, selectCurrentFilter],
  (quests, currentFilter) => {
    if (currentFilter === QuestFilters.All) {
      return quests;
    }
    return quests.filter((quest) => quest.type === currentFilter);
  },
);

export const selectCurrentQuest = (state: RootState) =>
  state[NameSpace.Quests].currentQuest;
export const selectIsCurrentQuestLoading = (state: RootState) =>
  state[NameSpace.Quests].isCurrentQuestLoading;

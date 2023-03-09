import { createAsyncThunk } from '@reduxjs/toolkit';
import { Order } from 'types/order';
import { APIRoutes, NameSpace } from '../const';
import { api } from '../services/api';
import { Quest } from '../types/quest';

export const loadQuests = createAsyncThunk(
  `${NameSpace.Quests}/loadQuests`,
  async () => {
    const { data } = await api.get<Quest[]>(APIRoutes.Quests);
    return data;
  },
);

export const loadQuestById = createAsyncThunk(
  `${NameSpace.Quests}/loadQuestById`,
  async (questId: number) => {
    const { data } = await api.get<Quest>(`${APIRoutes.Quests}/${questId}`);
    return data;
  },
);

export const postOrder = createAsyncThunk(
  `${NameSpace.Application}/postOrder`,
  async (order: Order) => {
    await api.post(APIRoutes.Orders, order);
  },
);

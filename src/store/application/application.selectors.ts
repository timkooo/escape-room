import { NameSpace } from '../../const';
import { RootState } from '../../types/store';

export const selectCurrentFilter = (state: RootState) => state[NameSpace.Application].currentFilter;

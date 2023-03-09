import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export enum AppRoutes {
  Main = '/',
  DetailedQuest = 'detailed-quest/',
  PageNotFount = '/*',
  UnderDevelopment = '/under-development'
}

export enum APIRoutes {
  Quests = '/quests',
  Orders = '/orders',
}

export enum NameSpace {
  Application = 'APPLICATION',
  Quests = 'QUESTS',
}

export enum QuestFilters {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detecrive = 'detective',
  SciFi = 'sci-fi',
}

export const questFilterTitles = {
  [QuestFilters.All]: { title: 'Все квесты', Image: IconAllQuests },
  [QuestFilters.Adventures]: { title: 'Приключения', Image: IconAdventures },
  [QuestFilters.Horror]: { title: 'Ужасы', Image: IconHorrors },
  [QuestFilters.Mystic]: { title: 'Мистика', Image: IconMystic },
  [QuestFilters.Detecrive]: { title: 'Детектив', Image: IconDetective },
  [QuestFilters.SciFi]: { title: 'Sci-fi', Image: IconScifi },
};

export enum Coordinates {
  Latitude = 59.968157782725775, 
  Longitude = 30.3164913243737,
}

export enum Levels {
  Hard = 'hard',
  Medium = 'medium',
  Easy = 'easy',
}

export const translatedLevels = {
  [Levels.Hard]: 'сложный',
  [Levels.Medium]: 'средний',
  [Levels.Easy]: 'простой',
}
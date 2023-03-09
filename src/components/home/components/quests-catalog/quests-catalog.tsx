import * as S from './quests-catalog.styled';
import { QuestFilters, questFilterTitles } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks/rtkHooks';
import { changeFilter } from 'store/application/application.slice';
import { selectCurrentFilter } from 'store/application/application.selectors';
import QuestsList from './components/quests-list';

const QuestsCatalog = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectCurrentFilter);

  const handleFilterChange = (filter: QuestFilters) => {
    dispatch(changeFilter(filter));
  };

  return (
    <>
      <S.Tabs>
        {Object.values(QuestFilters).map((filter) => {
          const {title, Image} = questFilterTitles[filter];
          return (
          <S.TabItem key={filter} onClick={() => handleFilterChange(filter)}>
            <S.TabBtn isActive={currentFilter === filter ? 'isActive' : ''}>
              <Image />
              <S.TabTitle>{title}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );})}
      </S.Tabs>

      <QuestsList />
    </>
  );
};

export default QuestsCatalog;


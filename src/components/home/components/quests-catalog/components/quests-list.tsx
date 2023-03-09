import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from '../quests-catalog.styled';
import { useAppDispatch, useAppSelector } from 'hooks/rtkHooks';
import { useEffect } from 'react';
import { loadQuests } from 'store/api-actions';
import {
  selectAreQuestsLoading,
  selectFilteredQuests,
} from 'store/quests/quests.selectors';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { AppRoutes, translatedLevels } from 'const';

const QuestsList = () => {
  const dispatch = useAppDispatch();
  const filteredQuests = useAppSelector(selectFilteredQuests);
  const areQuestsLoading = useAppSelector(selectAreQuestsLoading);

  useEffect(() => {
    dispatch(loadQuests());
  }, [dispatch]);

  if (areQuestsLoading) {
    return <LoadingScreen />;
  }

  return filteredQuests.length !== 0? (
    <>
      <S.QuestsList>
        {filteredQuests.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={`${AppRoutes.DetailedQuest}${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width="344"
                  height="232"
                  alt="квест Склеп"
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {translatedLevels[quest.level]}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  ) : (
    <S.QuestsList>Не удалось загрузить список квестов</S.QuestsList>
  );
};

export default QuestsList;

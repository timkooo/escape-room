import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from 'hooks/rtkHooks';
import { loadQuestById } from 'store/api-actions';
import { useParams } from 'react-router-dom';
import {
  selectCurrentQuest,
  selectIsCurrentQuestLoading,
} from 'store/quests/quests.selectors';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { questFilterTitles, translatedLevels } from 'const';

const DetailedQuest = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const currentQuest = useAppSelector(selectCurrentQuest);
  const isCurrentQuestLoading = useAppSelector(selectIsCurrentQuestLoading);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  useEffect(() => {
    if (id) {
      dispatch(loadQuestById(+id));
    }
  }, [dispatch, id]);

  if (!currentQuest || isCurrentQuestLoading) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${currentQuest.coverImg}`}
          alt="Квест Маньяк"
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest.title}</S.PageTitle>
            <S.PageSubtitle>
              {questFilterTitles[currentQuest.type].title}
            </S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{currentQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {currentQuest.peopleCount[0]}–{currentQuest.peopleCount[1]}{' '}
                  чел
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>
                  {translatedLevels[currentQuest.level]}
                </S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{currentQuest.description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal onChangeVisibility={onBookingBtnClick} />
        )}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

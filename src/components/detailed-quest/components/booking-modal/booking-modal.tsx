import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useAppDispatch } from 'hooks/rtkHooks';
import { postOrder } from 'store/api-actions';
import { FC, useState } from 'react';
import { Order } from 'types/order';

type BookingModalProps = {
  onChangeVisibility: () => void;
};

const BookingModal: FC<BookingModalProps> = ({
  onChangeVisibility
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Order>({
    name: '',
    peopleCount: 0,
    phone: '',
    isLegal: false,
  });

  const handleFormChange = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckBoxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, isLegal: !formData.isLegal });
  };

  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    evt.preventDefault();
    await dispatch(postOrder(formData));
    onChangeVisibility();
  };

  const handleCloseModal = () => {
    setFormData({
      name: '',
      peopleCount: 0,
      phone: '',
      isLegal: false,
    });
    onChangeVisibility();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseModal}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="#"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleFormChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="peopleCount"
              placeholder="Количество участников"
              value={formData.peopleCount === 0 ? '' : formData.peopleCount}
              onChange={handleFormChange}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="isLegal"
              onChange={handleCheckBoxChange}
              checked={formData.isLegal}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;

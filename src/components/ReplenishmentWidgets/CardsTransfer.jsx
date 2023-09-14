import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./PaymentStyles";
import { CardTransferIcon } from "../../constants/icons";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import styled from "styled-components";
import { COLORS } from "../../constants/styled";
import CardPaymentForm from "../../Forms/CardPaymentForm";
import { useSelector } from "react-redux";
import LoginModal from "../../Forms/LoginModal";

const WidgetStyles = {
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
    }
    .rodal-mask {
      background-color: rgba(0, 0, 0, 0.414);
    }
  `,
};
const CardsTransfer = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: { cardNumber: "" },
  });
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const onSubmit = (data) => {
    if (isLoggedIn) {
      const { cardNumber } = data;
      setSelectedCard(cardNumber);
      setOpenModal(true);
    } else {
      reset();
      setLoginModalVisible(true);
    }
  };

  const closeCardModal = () => {
    setOpenModal(false);
    setSelectedCard(null);
  };

  return (
    <Styled.Wrapper>
      <Styled.MainInfo>
        <div>
          <CardTransferIcon height="24px" width="24px" />
        </div>
        <b>Transfer to card</b>
      </Styled.MainInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Requisites>
          <Styled.Input
            type="text"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber", { required: true, maxLength: 16 })}
          />
          <Styled.Button type="submit">
            <svg
              height="24px"
              width="24px"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"
                  fill="rgba(255, 255, 255, 0.87)"
                  fillRule="nonzero"
                ></path>
                <path d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </Styled.Button>
        </Styled.Requisites>
        <Styled.Description>
          VISA/MasterCard of Ukrainian and foreign banks
        </Styled.Description>
      </form>
      {user && (
        <WidgetStyles.CustomRodal
          width={500}
          height={500}
          visible={selectedCard !== null && isOpenModal}
          onClose={closeCardModal}
        >
          {selectedCard && (
            <CardPaymentForm
              card={selectedCard}
              closeCardModal={closeCardModal}
            />
          )}
        </WidgetStyles.CustomRodal>
      )}
      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
    </Styled.Wrapper>
  );
};

export default CardsTransfer;

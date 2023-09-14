import React from "react";
import Rodal from "rodal";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import LoginForm from "../pages/LoginForm";

const Styled = {
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
      .rodal-mask {
        background-color: rgba(0, 0, 0, 0.414);
      }
    }
  `,
};

const LoginModal = ({ visible, onClose }) => {
  return (
    <Styled.CustomRodal
      width={320}
      height={330}
      visible={visible}
      onClose={onClose}
    >
      <LoginForm closeLoginModal={onClose} />
    </Styled.CustomRodal>
  );
};

export default LoginModal;

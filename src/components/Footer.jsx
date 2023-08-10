import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    background: ${COLORS.FOOTER_BACKGROUND};
    z-index: 998;
    padding: 10px;
  `,
};

const Footer = () => {
  return (
    <Styled.Wrapper>
      <div>
        Department Regulations and tariffs About personal data Security API
      </div>
      <div>
        3700 free of charge from mobile +38-000-000-00-00 for calls abroad{" "}
      </div>
      <div>© 2023 CatBank License No. 22 dated 05/20/2023</div>
    </Styled.Wrapper>
  );
};

export default Footer;

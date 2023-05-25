import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    background: ${COLORS.FOOTER_BACKGROUND};
    z-index: 998;
  `,
};

const Footer = () => {
  return (
    <Styled.Wrapper>
      <div>
        Department Regulations and tariffs About personal data Security API
      </div>
      <div>
        3700 безкоштовно з мобільних +38-073-716-11-31для дзвінків з-за кордону
      </div>
      <div>© 2023 PrivatBank License No. 22 dated 03/19/1992</div>
    </Styled.Wrapper>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    background-repeat: no-repeat;
    background-clip: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-image: url(${({ bckgrImg }) => bckgrImg});
    background-size: cover;
  `,
  WrapperInfo: styled.div`
    /* box-sizing: border-box;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    width: max-content;
    height: max-content;
    background-color: rgba(255, 255, 255, 0.631);
    border-radius: 30px;
    padding: 38px 46px; */
  `,
  CarouselText: styled.p`
    color: rgb(31, 28, 24);
    font-size: 50px;
  `,
};

const CarouselItem = ({ item }) => {
  return (
    <Styled.Wrapper bckgrImg={item.imgUrl}>
      {/* <Styled.WrapperInfo> */}
      <Styled.CarouselText>{item.text}</Styled.CarouselText>
      {/* </Styled.WrapperInfo> */}
    </Styled.Wrapper>
  );
};

export default CarouselItem;

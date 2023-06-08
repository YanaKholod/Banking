import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import Carousel from "react-material-ui-carousel";

const Styled = {
  Wrapper: styled.div`
    height: auto;
    width: 100%;
    margin: 0px auto;
    overflow: hidden;
    margin-bottom: 15px;
  `,
};

const MainPageCarousel = () => {
  const images = [
    {
      id: 0,
      imgUrl:
        "https://fatcatart.com/wp-content/uploads/2019/03/Van_Gogh_Starry_Night_cat-min-540x300.jpg",
      text: "",
    },
    {
      id: 1,
      imgUrl:
        "https://static.boredpanda.com/blog/wp-content/uploads/2015/11/my-fat-ginger-cat-rewrote-art-history-and-became-a-mews-to-great-artists-4__880.jpg",
      text: "",
    },
    {
      id: 2,
      imgUrl:
        "https://mymodernmet.com/wp/wp-content/uploads/2018/06/svetlana-petrova-fat-cat-art-thumbnail.jpg",
      text: "",
    },
  ];

  return (
    <Styled.Wrapper>
      <Carousel indicators={false}>
        {images.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Styled.Wrapper>
  );
};

export default MainPageCarousel;

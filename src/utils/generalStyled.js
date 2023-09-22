import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 80px;
  padding: 24px 0;
  @media (max-width: 850px) {
    margin: 0px 10px;
  }
`;
export const StyleHeader = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
export const StyleMainImg = styled.div`
  margin-right: 16px;
`;
export const StyleTitle = styled.div`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  line-height: 28px;
`;
export const StyleDescription = styled.div`
  color: ${COLORS.LIGHTER_TEXT};
  font-size: 14px;
  line-height: 22px;
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MENU_BACKGROUND};
  border-radius: 2px;
  padding: 0px 24px;
  padding-bottom: 15px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    font-weight: 400;
  }
`;
export const QuestionLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 2px;
  color: rgba(255, 255, 255, 0.588);
  :hover {
    background-color: ${COLORS.FOREGROUND};
  }
`;
export const AnswerLine = styled.div`
  margin-top: 5px;
  padding: 8px 0;
  color: white;
  padding-left: 10px;
`;

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      theme="dark"
    />
  );
};

export const CustomRodal = styled(Rodal).attrs({
  width: 500,
  height: 500,
})`
  .rodal-dialog {
    background-color: ${COLORS.HEADER_BACKGROUND};
    .rodal-mask {
      background-color: rgba(0, 0, 0, 0.414);
    }
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
    position: fixed;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 850px) {
    .rodal-dialog {
      max-width: 90%;
      max-height: 90%;
    }
  }
`;

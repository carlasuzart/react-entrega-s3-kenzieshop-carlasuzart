import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    color: green;
    background-color: lavender;

    width: 100vw;
    top: 0;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

    h1 {
      margin-left: 50px;
      cursor: pointer;
    }

    .buttons {
      margin-top: 15px;

      button {
        height: 40px;
        background-color: lavender;
        margin-right: 20px;
        border: none;
        color: green;
        cursor: pointer;
      }
    }
  }
`;

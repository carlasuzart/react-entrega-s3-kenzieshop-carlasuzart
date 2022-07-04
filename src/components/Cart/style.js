import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  ul {
    width: 100vw;

    .title {
      display: flex;
      justify-content: space-between;
      background-color: lavender;
      width: 80vw;
      margin-bottom: 20px;
      border-radius: 4px;
      p {
        margin-left: 5vw;
        margin-right: 7vw;
        color: green;
        font-weight: 600;
        font-size: 20px;
      }
    }
    .cart {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      border: 2px solid lavender;
      border-radius: 4px;
      align-items: center;
      margin-bottom: 20px;
      width: 80vw;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-weight: 500;
        color: green;
        margin-left: 5vw;
        width: 1vw;
        text-align: left;
      }

      span {
        color: green;
        font-weight: 600;
        margin-left: 50vw;
      }

      button {
        margin-left: 2vw;
        border: none;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  section {
    .orderSum {
      font-weight: 600;
      color: green;
      background-color: lavender;
      width: 80vw;
      height: 40px;
      margin-left: 5vw;
      border-radius: 4px;
      p {
        line-height: 40px;
      }
    }
    .order {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 700;
      margin-left: 5vw;
      align-items: center;
      margin-right: 15vw;
    }
    button {
      width: 80vw;
      border: none;
      height: 40px;
      background-color: lavender;
      color: green;
      border-radius: 4px;
      font-weight: 700;
      margin-left: -10vw;
    }
  }

  @media (min-width: 1024px) {
    main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100vw;

      .title {
        width: 60vw;
      }
      .cart {
        width: 60vw;

        p {
          width: 20vw;
        }

        span {
          margin-left: 20vw;
        }
      }
    }
    section {
      width: 25vw;
      margin-right: 2vw;

      .orderSum {
        width: 25vw;
        margin-left: 0vw;
      }
      .order {
        margin-left: 2vw;

        width: 25vw;
        span {
          margin-right: 5vw;
        }
      }
      button {
        width: 25vw;
        border: none;
        height: 40px;
        background-color: lavender;
        color: green;
        border-radius: 4px;
        font-weight: 700;
        margin-left: 0;
      }
    }
  }
`;

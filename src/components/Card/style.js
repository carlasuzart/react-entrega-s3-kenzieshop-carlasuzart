import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      width: 280px;
      height: 450px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border: 2px solid #e6e6fa;
      border-radius: 5px;
      gap: 20px;
      margin: 10px;
      background-color: lavender;

      img {
        width: 280px;
        height: 280px;
      }

      .text {
        display: flex;
        flex-direction: column;

        h3 {
          text-align: left;
          margin-left: 20px;
          margin-top: -20px;
          height: 50px;
        }

        span {
          font-weight: 700;
          text-align: left;
          margin-left: 20px;
        }

        button {
          margin-top: 20px;
          margin-left: 20px;
          background-color: lavender;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 14px;
        }
        button:hover {
          color: green;
          font-weight: 500px;
          font-size: 15px;
        }
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";

export default function header() {
  return (
    <>
      <StHeader>
        <span>Todolist</span>
        <span>React</span>
      </StHeader>
    </>
  );
}
const StHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

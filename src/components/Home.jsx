import React from "react";
import AddForm from "../components/AddForm";
import styled from "styled-components";
import TodolistForm from "../components/TodolistForm";
import Layout from "./Layout";
export default function Home() {
  return (
    <Wrapper>
      <Layout>
        <AddForm />
        <TodolistForm />
      </Layout>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 20px 0;
`;

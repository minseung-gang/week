import logo from "./logo.svg";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import styled from "styled-components";
import "./App.css";
import TodolistForm from "./components/TodolistForm";


function App() {
  return (
    <Wrapper>
      <Header />
      <AddForm />
      <TodolistForm />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* display: flex; */
  max-width: 1200px;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  /*   flex-direction: column; */
  /*   align-items: center; */
  gap: 20px 0;
`;

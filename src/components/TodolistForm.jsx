import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { deleteList, updateList } from "../redux/modules/todos";

export default function TodolistForm() {
  let globalState = useSelector((state) => state.todos.todos);
  console.log(globalState);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteList(id));
    //액션객체를 보낸다.
  };

  const toggleHandler = (id) => {
    dispatch(updateList(id)); // isDone의 내용을 리듀서로 전달할 필요가 없다. id값만 있으면 리듀서에 저장된 id값을 따로 불러올 수 있기 때문
  };

  return (
    <StTodoList>
      <div className="todolist_inner">
        <div className="list_container">
          <span className="list_title">오늘 열심히 해야 할 일 🔥 </span>
          <StGrid>
            {globalState.map((todo) => {
              if (!todo.isDone) {
                // false
                return (
                  <Card
                    key={todo.id}
                    todo={todo}
                    deleteHandler={deleteHandler}
                    toggleHandler={toggleHandler}
                  />
                );
              }
            })}
          </StGrid>
        </div>
        <div className="list_container">
          <span className="list_title">오늘 열심히 한 일 💭</span>
          <StGrid>
            {globalState.map((todo) => {
              if (todo.isDone) {
                return (
                  <Card
                    key={todo.id}
                    todo={todo}
                    deleteHandler={deleteHandler}
                    toggleHandler={toggleHandler}
                  />
                );
              }
            })}
          </StGrid>
        </div>
      </div>
    </StTodoList>
  );
}

const StTodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  .todolist_inner {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
  }
  .list_container {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .list_title {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;
const StGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

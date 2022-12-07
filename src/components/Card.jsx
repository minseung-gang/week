import React from "react";
import styled from "styled-components";
import todoList from "../redux/modules/todos";

import { Link } from "react-router-dom";

export default function Card({ todo, deleteHandler, toggleHandler }) {
  const { id, order, title, content, isDone } = todo;

  return (
    <StCard>
      <div className="content_container">
        <div className="title_container">
          <span className="todo_title">{title}</span>
        </div>
        <span className="todo_content">{content}</span>
      </div>
      <div className="btn_container">
        <Link to={`/${id}`} className="detail_btn">
          <StButton className="detail_btn">상세보기</StButton>
        </Link>
        <StButton className="delete_btn" onClick={() => deleteHandler(id)}>
          삭제하기
        </StButton>
        {isDone ? (
          <StButton className="confirm_btn" onClick={() => toggleHandler(id)}>
            완료하기
          </StButton>
        ) : (
          <StButton className="cancle_btn" onClick={() => toggleHandler(id)}>
            취소하기
          </StButton>
        )}
      </div>
    </StCard>
  );
}

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  background: #e5ebff;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 15%);
  max-width: 300px;
  min-height: 180px;
  text-decoration: none;
  .content_container {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  .title_container {
    display: flex;
    justify-content: space-between;
  }
  .btn_container {
    display: flex;
    gap: 0 10px;
    justify-content: flex-end;
    align-items: center;
  }
  .todo_title {
    width: 80%;
    font-weight: 600;
    font-size: 1.2rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .todo_content {
    min-height: 40px;
    word-break: break-all;
  }
  .detail_btn {
    min-width: fit-content;
    text-decoration: none;
  }
`;

const StButton = styled.button`
  padding: 4px 6px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 3px;
  background: #fff;
  box-shadow: 2px 2px 5px -2px rgb(0 0 0 / 16%);
  cursor: pointer;
  border: 1px solid darkgrey;
  &:active {
    box-shadow: none;
  }
  &.confirm_btn {
    background: #f89494;
    color: #fff;
  }
  &.confirm_btn:active {
    background: #fff;
    color: #f89494;
  }
  &.cancle_btn {
    background: #b9b8f7;
    color: #ffffff;
  }
  &.cancle_btn:active {
    background: #fff;
    color: #b9b8f7;
  }
`;

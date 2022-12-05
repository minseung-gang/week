import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addList } from "../redux/modules/todos";
import { nanoid } from "nanoid";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const submitHandler = () => {
    // action creator

    dispatch(
      addList({
        id: nanoid(),
        order: todos.length + 1,
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <StAddForm>
      <form className="form_container">
        <div className="content_wrapper">
          <span className="title_field">제목 :</span>
          <input
            type="text"
            className="content_field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="content_wrapper">
          <span className="title_field">내용 :</span>
          <input
            type="text"
            className="content_field"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="button" className="add_btn" onClick={submitHandler}>
          추가하기
        </button>
      </form>
    </StAddForm>
  );
}

const StAddForm = styled.div`
  width: 100%;
  display: flex;
  max-width: 1000px;
  justify-content: center;
  .form_container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0 25px;
  }
  .title_field {
    min-width: fit-content;
    font-weight: 600;
    font-size: 1.1rem;
  }
  .content_field {
    height: 26px;
    text-indent: 10px;
    width: 100%;
  }
  .content_wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0 10px;
  }
  .add_btn {
    border: none;
    padding: 10px;
    cursor: pointer;
    min-width: 80px;
  }
`;

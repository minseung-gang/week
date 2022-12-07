import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readList } from "../redux/modules/todos";
import styled from "styled-components";

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.todos.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(readList(id));
  }, []);
  return (
    <StWrapper>
      <StInner>
        {detail.map((item) => {
          return (
            <StContainer key={item.id}>
              <StTitle className="">
                <span className="id_span">ID: {item.id}</span>
                <StButton onClick={() => navigate(`/`)}>돌아가기</StButton>
              </StTitle>
              <StContent>
                <span className="title_span">{item.title}</span>
                <div className="content_box">
                  <span className="content_span">{item.content}</span>
                </div>
              </StContent>
            </StContainer>
          );
        })}
      </StInner>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
`;
const StInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const StContainer = styled.div`
  max-width: 800px;
  width: 95%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 20%);
  .title_span {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 20px;
  }

  .content_span {
    font-size: 1.3rem;
  }
`;

const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  .id_span {
    font-size: 1rem;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  .content_box {
    min-height: 50vh;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    background: #f3f3f3;
  }
`;

const StButton = styled.button`
  padding: 5px 10px;
  background: #eaeaea;
  border: 1px solid grey;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

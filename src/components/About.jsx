import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { readList } from "../redux/modules/todos";

export default function About() {
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.todos.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(readList(id));
  }, []);
  return (
    <div>
      <div>
        {detail.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

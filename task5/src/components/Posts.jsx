import { Fragment, useRef, useEffect, useState } from "react";
import { PostItem } from "./PostItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPageIncrement, setEndless } from "./../store/todoSlice";

export const Posts = ({posts}) => {
  const lastElement = useRef();

  const observer = useRef();

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.posts.pages);
  const page = useSelector((state) => state.posts.page);
  

  const endless = useSelector((state) => state.posts.endless);
  const isLoading = useSelector((state) => state.posts.isLoading);


  useEffect(() => {
    if (isLoading) return;
    if (!endless) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && page < pages.length) {
        dispatch(setPageIncrement());
        dispatch(fetchPosts());

      }
    });

    observer.current.observe(lastElement.current);
  }, [endless]);


  return (
    <Fragment>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          body={post.body}
          author={post.author || "name"}
          id={post.id}
          date={post.date || "date"}
          key={Math.random()}
        />
      ))}

      {endless && <Observer ref={lastElement}></Observer>}
    </Fragment>
  );
};
const Observer = styled.div`
  height: 35px;
  background: #e5bd77;
`;

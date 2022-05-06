import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./../store/todoSlice";
import { Button } from "@mui/material";
import styled from "styled-components";
import { MyInput } from "./UI/Input";

export const FormModal = ({ visibleModal, setVisibleModal }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: "", text: "", author: "" });
  const [error, setError] = useState({ title: false, author: false });
  const inputRef = useRef();

  // useEffect(() => {
  //   if (visibleModal === true) inputRef.current.focus();
  // }, [visibleModal]);

  const blurHandler = (e) => {
    if (e.target.value === "") {
      setError({ ...error, title: true });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();

    // if ( post.title === "") {
    //   setError({...error, title: true});
    //   setVisibleModal(true);
    //   return;
    // }
    // if (post.author === "" ){
    //   setError({...error, author: true});
    //   setVisibleModal(true);
    //   return;
    // }

    dispatch(addPost({ ...post }));
    setPost({ title: "", text: "", author: "" });
    setVisibleModal(false);
    setError(false);
  };

  return (
    <Form>
      {/* {error ? "Enter this fields" : ""} */}
      {/* <MyInput ref={inputRef}
        onBlur={blurHandler}
        error={error.title}
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        label="Title"
        placeholder="Title"/> */}

      <Input
        ref={inputRef}
        onBlur={blurHandler}
        error={error.title}
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        label="Title"
        placeholder="Title"
      />
      <Input
        value={post.text}
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        label="Tetx"
        placeholder="Tetx"
      />
      <Input
        value={post.author}
        error={error.author}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
        label="Author"
        placeholder="Author"
      />

      <Button
        onClick={handleClick}
        className="form_button"
        variant="contained"
        color="success">
        Send Post
      </Button>
    </Form>
  );
};

const Input = styled.input`
  padding: 10px;
  color: #5b5b5b;
  background: papayawhip;
  border: none;
  outline: ${(props) => (props.error === true ? "2px solid red;" : "none")};
  border-radius: 3px;
  margin-bottom: 10px;
  min-width: 100%;
  font-size: 22px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px green;
  }
`;

const Form = styled.form`
  color: gray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
`;

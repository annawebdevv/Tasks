import { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost, saveEditPost } from "./../store/todoSlice";
import styled from "styled-components";

export const PostItem = ({ id, title, text, author, date }) => {
  const dispatch = useDispatch();
  const [editItem, setEditItem] = useState(false);
  const [post, setPost] = useState({ title, text });
  const [error, setError] = useState(false);

  const savePost = () => {
    if (post.title === "") {
      setError(true);
      setEditItem(true);
      return;
    }
    setEditItem(false);
    setError(false);
    dispatch(saveEditPost({ id, ...post }));
  };

  return (
    <Card key={id}>
      {error ? "Enter title field" : ""}
      {editItem ? (
        <Input
          autoFocus={true}
          error={error}
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          label="Title"
          placeholder="Title"
        />
      ) : (
        <h2>{title}</h2>
      )}
      {editItem ? (
        <Textarea
          value={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          label="Title"
          placeholder="Title"
        />
      ) : (
        <p> {text}</p>
      )}
      <hr />
      Author: {author}
      <h5> {date} </h5>
      {editItem ? (
        <EditButton onClick={savePost}> Save </EditButton>
      ) : (
        <EditButton
          onClick={() => {
            setEditItem(true);
          }}>
          {" "}
          Edit{" "}
        </EditButton>
      )}
      <Button
        onClick={() => {
          dispatch(removePost({ id }));
        }}>
        Detele
      </Button>
    </Card>
  );
};

const Button = styled.button`
  font-size: 22px;
  color: red;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 10px;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;
const EditButton = styled(Button)`
  color: green;
  margin-right: 90px;
`;
const Card = styled.div`
  border: 1px solid gray;
  margin-bottom: 10px !important;
  max-width: 400px;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  padding: 0.7em;
  position: relative;
  color: #5b5b5b;
  font-size: 22px;
  border-radius: 10px;
  margin: 0;
  overflow: auto;
`;
const Input = styled.input`
  padding: 10px;
  color: #5b5b5b;
  background: papayawhip;
  border: ${(props) => (props.error === true ? "2px solid red;" : "none")};
  border-radius: 3px;
  margin-bottom: 10px;
  min-width: 100%;
  font-size: 22px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px green;
  }
`;
const Textarea = styled.textarea`
  padding: 10px;
  color: #5b5b5b;
  background: papayawhip;
  resize: none;
  min-height: 150px;
  border-radius: 3px;
  margin-bottom: 10px;
  min-width: 100%;
  font-size: 22px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px green;
  }
`;

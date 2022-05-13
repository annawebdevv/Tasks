import { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost, saveEditPost } from "./../store/todoSlice";
import styled from "styled-components";


export const PostItem = ({ id, title, body, author, date }) => {
  const dispatch = useDispatch();
  const [editItem, setEditItem] = useState(false);
  const [post, setPost] = useState({ title, body });
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

    <div className="card" >


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
        <Title>{title}</Title>
      )}
      {editItem ? (
        <Textarea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          label="Title"
          placeholder="Title"
        />
      ) : (
        <Body> {body}</Body>
      )}

     <Author> <b>Author: </b> {author} </Author>
      <Date> {date} </Date>
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
        onClick={()=>{
          dispatch(removePost({id}))
        }}>
        Delete
      </Button>
      </div>

  );
};

const Title = styled.h2`

margin-bottom: 3px;
`;
const Body = styled.p`
  margin-bottom: 25px;
`;
const Author = styled.p`
  font-size:16px;
  font-weight: 200;
  color: #736d6e;
  margin-bottom: 5px;
`;
const Date = styled.p`
  font-size:16px;
  font-weight: 200;
  color: #736d6e;
  
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 22px;
  font-weight: 550;
  color: #943D2c;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 10px;
  background: none;
  transition: color 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #000
  }
`;
const EditButton = styled(Button)`
  color: #e5bd77;
  margin-right: 90px;
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
    box-shadow: 0px 0px 5px #943d2c;
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
    box-shadow: 0px 0px 5px #943d2c;
  }
`;

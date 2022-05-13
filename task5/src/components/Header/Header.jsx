import { useDispatch } from "react-redux";
import { fetchPosts, removeAllPosts} from "../../store/todoSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Header = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.posts.pages);

  const getPosts = () => {
    if (pages.length !== 0) return;
    dispatch(fetchPosts());
  };

  return (
    <HeaderContainer>
      <Button className="btn" onClick={getPosts}>
        {" "}
        Get APIposts
      </Button>

      <ButtonDelete
        className="btn"
        onClick={() => {
          dispatch(removeAllPosts());
        }}>
        {" "}
        Remove all Posts
      </ButtonDelete>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 10px 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  background: #e5bd77;
  @media (max-width: 420px) {
    padding: 10px;
  }
`;
const Button = styled.button`
  border: 1px solid;
`;
const ButtonDelete = styled(Button)``;

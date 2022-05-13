import { SortAndSearch } from "./SortAndSearch";
import styled from "styled-components";
import { setEndless } from "./../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export const FilterPosts = ({
  selectSort,
  setSelectSort,
  searchForm,
  setSearchForm,
  setVisibleModal,
}) => {
  const dispatch = useDispatch();
  const endless = useSelector((state) => state.posts.endless);
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Fragment>
      <SortAndSearch
        selectSort={selectSort}
        setSelectSort={setSelectSort}
        searchForm={searchForm}
        setSearchForm={setSearchForm}
      />
      <div>
        <button className="btn" onClick={() => setVisibleModal(true)}>
          Add Post
        </button>
        {posts.length ? 
        <button className="btn" style={{marginLeft: '15px'}} onClick={() => dispatch(setEndless(!endless))}>

          {endless === false ? "Endless" : "Pagination"}
        </button> : ''}
      </div>
    </Fragment>
  );
};

const Fragment = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

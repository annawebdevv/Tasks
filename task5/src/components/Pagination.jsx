import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { setPage, fetchPosts } from "./../store/todoSlice";

export const Pagination = () => {
  const pages = useSelector((state) => state.posts.pages);
  const page = useSelector((state) => state.posts.page);
  const dispatch = useDispatch();

  const changePage = (pageItem) => {
    if (pageItem === page) return;
    dispatch(setPage(pageItem));
    dispatch(fetchPosts());
  };
  return (
    <Pages>
      {pages.map((pageItem) => (
        <span
          key={pageItem}
          className={pageItem === page ? "page_current" : ""}
          onClick={() => {
            changePage(pageItem);
          }}>
          {pageItem}
        </span>
      ))}
    </Pages>
  );
};

const Pages = styled.div`
  padding: 10px 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  background: #e5bd77;
  border-radius: 10px;
  align-items: baseline;
  min-height: 45px;
  @media (max-width: 420px) {
    padding: 10px;
  }
`;

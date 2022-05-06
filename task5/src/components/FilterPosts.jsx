import { Button } from "@mui/material";
import { SortAndSearch } from "./SortAndSearch";
import styled from "styled-components";

export const FilterPosts = ({
  selectSort,
  setSelectSort,
  searchForm,
  setSearchForm,
  setVisibleModal,
}) => {
  return (
    <Fragment>
      <SortAndSearch
        selectSort={selectSort}
        setSelectSort={setSelectSort}
        searchForm={searchForm}
        setSearchForm={setSearchForm}
      />

      <Button
        style={{ marginLeft: 15 }}
        onClick={() => setVisibleModal(true)}
        variant="contained"
        color="success">
        Add Post
      </Button>
    </Fragment>
  );
};

const Fragment = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

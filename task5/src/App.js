import "./App.css";

import { useState, useEffect } from "react";
import { Posts } from "./components/Posts";
import { FormModal } from "./components/Form";
import { Modal } from "./components/Modal/Modal";
import { FilterPosts } from "./components/FilterPosts";
import { usePosts } from "./hooks/usePosts";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "./store/todoSlice";
import { Header } from "./components/Header/Header";
import { Pagination } from "./components/Pagination";

function App() {
  const [selectSort, setSelectSort] = useState("");
  const [searchForm, setSearchForm] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const pages = useSelector((state) => state.posts.pages);
  const endless = useSelector((state) => state.posts.endless);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("posts"))
      dispatch(setPosts(JSON.parse(localStorage.getItem("posts"))));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const searchedAndSortedPosts = usePosts({ posts, selectSort, searchForm });

  return (
    <div className="App">
      <Header />
      <div className="body">
        <FilterPosts
          selectSort={selectSort}
          setSelectSort={setSelectSort}
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          setVisibleModal={setVisibleModal}
        />

        {pages.length > 0 && !endless ? <Pagination/> :  ''}
        
        <Posts posts={searchedAndSortedPosts} />

        <Modal visible={visibleModal} setVisible={setVisibleModal}>
          <FormModal
            posts={searchedAndSortedPosts}
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;

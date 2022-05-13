
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage , fetchPosts } from "./../store/todoSlice";


 


export const useGetPosts = ({pageItem}) => {
	const pages = useSelector((state) => state.posts.pages);
	const page = useSelector((state) => state.posts.page);
	const dispatch = useDispatch();
  
 
	  dispatch(setPage(pageItem))
	  dispatch(fetchPosts())
  

};
import { FC } from "react";
import { IPost } from "../types/types";

interface PostItemProps {
  post: IPost;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      {post.id}. {post.title} <br /> {post.body}
    </div>
  );
};

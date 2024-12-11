import React, { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../Store/post-list-store";

function PostList() {
  const { postList } = useContext(postListData);
  console.log(postList);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {postList.map((post) => (
        <Post
          key={post.id}
          {...post}
          post={post}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reaction}
          userid={post.userid}
        />
      ))}
    </div>
  );
}

export default PostList;

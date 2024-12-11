import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card"
      style={{
        width: "25rem",
        margin: "30px",
        border: "2px solid lightgrey",
        textAlign: "center",
      }}
    >
      <div className="card-body postcard">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge m-1 text-bg-primary" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info ouralert" role="alert">
          This post has been reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
}

export default Post;

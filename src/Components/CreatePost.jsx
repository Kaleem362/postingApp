import React, { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";
function CreatePost() {
  const { addPost } = useContext(PostList);
  let useridElement = useRef();
  let postTitleElement = useRef();
  let postBodyElement = useRef();
  let PostTagsElement = useRef();
  let PostReactionsElement = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const PostTags = PostTagsElement.current.value.split(" ");
    const postreactions = PostReactionsElement.current.value;

    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    PostTagsElement.current.value = "";
    PostReactionsElement.current.value = "";

    addPost(userid, postTitle, postBody, PostTags, postreactions);
  };
  return (
    <form className="p-5" onSubmit={onSubmitHandler}>
      <div className="mb-3 col-6 ">
        <label htmlFor="User id" className="form-label text-secondary fw-bold">
          User id
        </label>
        <input
          type="text"
          ref={useridElement}
          className="form-control border-2 border-primary"
          id="User id"
          placeholder="Enter your user id "
        />
      </div>
      <div className="mb-3 col-6">
        <label
          htmlFor="Posttitle"
          className="form-label text-secondary fw-bold"
        >
          PostTitle
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control border-2 border-primary"
          id="Posttitle"
          placeholder="Enter post title here"
        />
      </div>
      <div className="mb-3 col-6">
        <label htmlFor="PostBody" className="form-label text-secondary fw-bold">
          PostBody
        </label>
        <textarea
          type="Text"
          rows={4}
          ref={postBodyElement}
          className="form-control border-2 border-primary"
          id="PostBody"
          placeholder="Enter Post description"
        />
      </div>
      <div className="mb-3 col-6 ">
        <label htmlFor="PostTags" className="form-label text-secondary fw-bold">
          PostTags
        </label>
        <input
          type="text"
          ref={PostTagsElement}
          className="form-control border-2 border-primary"
          id="Posttitle"
          placeholder="Enter tags with space in between "
        />
      </div>
      <div className="mb-3 col-6 ">
        <label
          htmlFor="Reactions"
          className="form-label text-secondary fw-bold"
        >
          Number of Reactions
        </label>
        <input
          ref={PostReactionsElement}
          type="text"
          className="form-control border-2 border-primary"
          id="Reactions"
          placeholder="reactions of the post "
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        title="Click to upload your post"
      >
        Upload Post
      </button>
    </form>
  );
}

export default CreatePost;
